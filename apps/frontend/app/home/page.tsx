"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth/authClient";
import { useJobs } from "@/lib/networkRequests/jobs";
import { JobCard } from "@/components/Home/JobCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Job = {
  id: string;
  jobTitle: string;
  jobDescription: string;
  skillRequired: string[];
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
  salaryMin?: number;
  salaryMax?: number;
  createdAt: string; // Will be converted to Date in JobCard
};

type TabType = "recommended" | "all";

export default function Home() {
  const { data, isLoading: jobsLoading, isError } = useJobs();
  const [activeTab, setActiveTab] = useState<TabType>("recommended");

  const tabs = [
    {
      id: "recommended" as TabType,
      label: "Recommended",
      count: data?.length || 0,
    },
    { id: "all" as TabType, label: "All Jobs", count: data?.length || 0 },
  ];

  const renderJobCards = (jobs: Job[]) => (
    <>
      {jobs.map((job: Job) => (
        <JobCard
          key={job.id}
          job={{
            ...job,
            createdAt: new Date(job.createdAt),
          }}
        />
      ))}
    </>
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Tab Navigation */}
      <div className="relative mb-8 w-full inset-0 flex justify-center mx-auto">
        <div className="flex space-x-1 bg-muted/30 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                {tab.label}
                <motion.span
                  className="px-2 py-1 text-xs bg-muted rounded-full"
                  animate={{ scale: activeTab === tab.id ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.count}
                </motion.span>
              </span>

              {/* Active tab indicator */}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute inset-0 bg-background border border-border rounded-md shadow-sm -z-10"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {jobsLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-12"
            >
              <div className="text-lg text-muted-foreground">
                Loading jobs...
              </div>
            </motion.div>
          )}

          {isError && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-12"
            >
              <div className="text-lg text-destructive">
                Error loading jobs. Please try again.
              </div>
            </motion.div>
          )}

          {data && data.length > 0 && (
            <motion.div
              key={`content-${activeTab}`}
              initial={{ opacity: 0, x: 20, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderJobCards(data)}
            </motion.div>
          )}

          {data && data.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-12"
            >
              <div className="text-lg text-muted-foreground">
                No jobs available at the moment.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
