"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, IndianRupee } from "lucide-react";

type JobType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";

interface Job {
  id: string;
  jobTitle: string;
  jobDescription: string;
  skillRequired: string[];
  jobType: JobType;
  salaryMin?: number;
  salaryMax?: number;
  createdAt: Date;
}

interface JobCardProps {
  job: Job;
}

const jobTypeLabels: Record<JobType, string> = {
  FULL_TIME: "Full Time",
  PART_TIME: "Part Time",
  CONTRACT: "Contract",
  INTERNSHIP: "Internship",
};

const formatSalary = (min?: number, max?: number) => {
  if (!min && !max) return null;
  if (min && max) return `₹${min.toLocaleString()} - ₹${max.toLocaleString()}`;
  if (min) return `From ₹${min.toLocaleString()}`;
  if (max) return `Up to ₹${max.toLocaleString()}`;
};

const getTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
};

export function JobCard({ job }: JobCardProps) {
  const salary = formatSalary(job.salaryMin, job.salaryMax);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      }}
      className="w-full"
    >
      <Card className="group cursor-pointer border-border/50 hover:border-border/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <CardContent className="p-6">
          <motion.div
            className="flex items-start justify-between mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex-1">
              <motion.h3
                className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-balance"
                transition={{ duration: 0.2 }}
              >
                {job.jobTitle}
              </motion.h3>
              <motion.div
                className="flex items-center gap-4 mt-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-4 h-4" />
                  <span>{getTimeAgo(job.createdAt)}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {jobTypeLabels[job.jobType]}
                  </Badge>
                </motion.div>
              </motion.div>
            </div>
            {salary && (
              <motion.div
                className="flex items-center gap-1 text-sm font-medium text-foreground"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>{salary}</span>
              </motion.div>
            )}
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground mb-4 line-clamp-2 text-pretty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {job.jobDescription}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {job.skillRequired.slice(0, 4).map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: 0.5 + index * 0.08,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <Badge variant="outline" className="text-xs cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
            {job.skillRequired.length > 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  delay: 0.5 + 4 * 0.08,
                  duration: 0.3,
                }}
              >
                <Badge
                  variant="outline"
                  className="text-xs text-muted-foreground cursor-default"
                >
                  +{job.skillRequired.length - 4} more
                </Badge>
              </motion.div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
