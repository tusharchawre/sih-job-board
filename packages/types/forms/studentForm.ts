import { z } from "zod";

// Enums matching Prisma schema
const BRANCH = z.enum(["CSD", "AIDS", "COMPS", "CIVIL", "MTRX", "MECH"]);
const YEAROFSTUDY = z.enum(["FE", "SE", "TE", "BE"]);

// Nested schemas for related models
const ProjectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  link: z.url().optional(),
});

const CertificationSchema = z.object({
  title: z.string().min(1, "Certification title is required"),
  description: z.string().min(1, "Certification description is required"),
  link: z.url().optional(),
});

const WorkExperienceSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  currentlyWorking: z.boolean().default(false),
  description: z.string().min(1, "Work description is required"),
});

// Main student onboarding form schema
const StudentOnboardingForm = z.object({
  // Required fields
  name: z.string().min(1, "Name is required"),
  branch: BRANCH,
  yearofStudy: YEAROFSTUDY,

  // Optional personal information
  ien: z.number().int().positive("IEN must be a positive integer").optional(),
  phoneNumber: z
    .number()
    .int()
    .positive("Phone number must be a positive integer")
    .optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),

  // Academic information
  cgpa: z
    .number()
    .min(0, "CGPA must be 0 or greater")
    .max(10, "CGPA must be 10 or less")
    .optional(),
  percentage10th: z
    .number()
    .min(0, "10th percentage must be 0 or greater")
    .max(100, "10th percentage must be 100 or less")
    .optional(),
  percentage12th: z
    .number()
    .min(0, "12th percentage must be 0 or greater")
    .max(100, "12th percentage must be 100 or less")
    .optional(),

  // Skills and URLs
  skills: z.array(z.string()).default([]),
  githubUrl: z
    .string()
    .url("Please provide a valid GitHub URL")
    .optional()
    .or(z.literal("")),
  linkedinUrl: z
    .string()
    .url("Please provide a valid LinkedIn URL")
    .optional()
    .or(z.literal("")),
  twitterUrl: z
    .string()
    .url("Please provide a valid Twitter URL")
    .optional()
    .or(z.literal("")),
  portfolioUrl: z
    .string()
    .url("Please provide a valid portfolio URL")
    .optional()
    .or(z.literal("")),

  // Resume
  resumeUrl: z
    .string()
    .url("Please provide a valid resume URL")
    .optional()
    .or(z.literal("")),

  // Related data arrays
  projects: z.array(ProjectSchema).default([]),
  certifications: z.array(CertificationSchema).default([]),
  workExperiences: z.array(WorkExperienceSchema).default([]),
});

// Type inference for TypeScript
type StudentOnboardingFormData = z.infer<typeof StudentOnboardingForm>;
type ProjectData = z.infer<typeof ProjectSchema>;
type CertificationData = z.infer<typeof CertificationSchema>;
type WorkExperienceData = z.infer<typeof WorkExperienceSchema>;

export {
  StudentOnboardingForm,
  ProjectSchema,
  CertificationSchema,
  WorkExperienceSchema,
  BRANCH,
  YEAROFSTUDY,
  type StudentOnboardingFormData,
  type ProjectData,
  type CertificationData,
  type WorkExperienceData,
};
