"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { JobForm } from "@/components/admin/JobForm";
import { authClient } from "@/lib/auth/authClient";
import { signIn } from "@/lib/auth/authClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Job {
  id: string;
  jobTitle: string;
  jobDescription: string;
  skillRequired: string[];
  jobType: "INTERNSHIP" | "FULL_TIME" | "PART_TIME" | "CONTRACT";
  salaryMin?: number;
  salaryMax?: number;
}

export default function EditJobPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const session = await authClient.getSession();
        if (!session?.data) {
          setError("Please sign in to access this page");
          setLoading(false);
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${jobId}`, {
          credentials: 'include',
        });

        if (response.ok) {
          const jobData = await response.json();
          setJob(jobData);
        } else if (response.status === 401) {
          setError("Please sign in to access this page");
        } else {
          setError("Job not found or access denied");
        }
      } catch (err) {
        setError("An error occurred");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading job...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">{error}</p>
            <Button onClick={signIn} className="w-full">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Job Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">The job you're trying to edit doesn't exist.</p>
            <Button onClick={() => window.history.back()} className="w-full">
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <JobForm initialData={job} jobId={job.id} />
      </div>
    </div>
  );
}