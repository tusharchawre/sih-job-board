"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign } from "lucide-react"

type JobType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP"

interface Job {
  id: string
  jobTitle: string
  jobDescription: string
  skillRequired: string[]
  jobType: JobType
  salaryMin?: number
  salaryMax?: number
  createdAt: Date
}

interface JobCardProps {
  job: Job
}

const jobTypeLabels: Record<JobType, string> = {
  FULL_TIME: "Full Time",
  PART_TIME: "Part Time",
  CONTRACT: "Contract",
  INTERNSHIP: "Internship",
}

const formatSalary = (min?: number, max?: number) => {
  if (!min && !max) return null
  if (min && max) return `$${min.toLocaleString()} - $${max.toLocaleString()}`
  if (min) return `From $${min.toLocaleString()}`
  if (max) return `Up to $${max.toLocaleString()}`
}

const getTimeAgo = (date: Date) => {
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 24) {
    return `${diffInHours}h ago`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays}d ago`
}

export function JobCard({ job }: JobCardProps) {
  const salary = formatSalary(job.salaryMin, job.salaryMax)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="group cursor-pointer border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-balance">
                {job.jobTitle}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{getTimeAgo(job.createdAt)}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {jobTypeLabels[job.jobType]}
                </Badge>
              </div>
            </div>
            {salary && (
              <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                <DollarSign className="w-4 h-4" />
                <span>{salary}</span>
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 text-pretty">{job.jobDescription}</p>

          <div className="flex flex-wrap gap-2">
            {job.skillRequired.slice(0, 4).map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="outline" className="text-xs">
                  {skill}
                </Badge>
              </motion.div>
            ))}
            {job.skillRequired.length > 4 && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                +{job.skillRequired.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
