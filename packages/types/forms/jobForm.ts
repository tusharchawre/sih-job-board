import { z } from "zod";

// Enum matching Prisma schema
const JOB_TYPE = z.enum(["INTERNSHIP", "FULL_TIME", "PART_TIME", "CONTRACT"]);

// Job form schema
const JobForm = z
  .object({
    // Required fields
    jobTitle: z
      .string()
      .min(1, "Job title is required")
      .max(100, "Job title must be less than 100 characters"),
    jobDescription: z
      .string()
      .min(10, "Job description must be at least 10 characters")
      .max(5000, "Job description must be less than 5000 characters"),
    skillRequired: z
      .array(z.string().min(1, "Skill cannot be empty"))
      .min(1, "At least one skill is required")
      .max(20, "Maximum 20 skills allowed"),
    jobType: JOB_TYPE,

    // Optional salary fields
    salaryMin: z
      .number()
      .int()
      .positive("Minimum salary must be a positive integer")
      .optional(),
    salaryMax: z
      .number()
      .int()
      .positive("Maximum salary must be a positive integer")
      .optional(),
  })
  .refine(
    (data) => {
      // If both salary fields are provided, salaryMax should be greater than or equal to salaryMin
      if (data.salaryMin && data.salaryMax) {
        return data.salaryMax >= data.salaryMin;
      }
      return true;
    },
    {
      message: "Maximum salary must be greater than or equal to minimum salary",
      path: ["salaryMax"],
    }
  );

// Type inference for TypeScript
type JobFormData = z.infer<typeof JobForm>;

export { JobForm, JOB_TYPE, type JobFormData };
