"use client";

import { JobForm } from "@/components/admin/JobForm";

export default function CreateJobPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <JobForm />
      </div>
    </div>
  );
}