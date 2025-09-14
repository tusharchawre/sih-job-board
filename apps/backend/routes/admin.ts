import { Router } from "express";
import { JobForm } from "@repo/types";
import { auth } from "../utils/auth";
import { fromNodeHeaders } from "better-auth/node";
import { prisma } from "@repo/db/client";
import { jobBoardIndex } from "@repo/pinecone/client";

const router = Router();

router.post("/create-job", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const validatedData = await JobForm.safeParse(req.body);

  if (!validatedData.success) {
    return res.status(400).json({ error: validatedData.error.message });
  }

  const job = await prisma.job.create({
    data: validatedData.data,
  });

  await jobBoardIndex.upsertRecords([
    {
      _id: job.id,
      job_description: job.jobDescription,
      job_title: job.jobTitle,
      skill_required: job.skillRequired,
      job_type: job.jobType,
      salary_min: job.salaryMin ?? 0,
      salary_max: job.salaryMax ?? 0,
    },
  ]);

  return res.status(200).json(job);
});

router.put("/edit-job/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;

  const validatedData = await JobForm.safeParse(req.body);

  if (!validatedData.success) {
    return res.status(400).json({ error: validatedData.error.message });
  }

  const job = await prisma.job.update({
    where: { id: id },
    data: validatedData.data,
  });

  await jobBoardIndex.deleteOne(job.id);

  await jobBoardIndex.upsertRecords([
    {
      _id: job.id,
      job_description: job.jobDescription,
      job_title: job.jobTitle,
      skill_required: job.skillRequired,
      job_type: job.jobType,
      salary_min: job.salaryMin ?? 0,
      salary_max: job.salaryMax ?? 0,
    },
  ]);

  return res.status(200).json(job);
});

router.delete("/delete-job/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;
  await prisma.job.delete({
    where: { id: id },
  });

  await jobBoardIndex.deleteOne(id);

  return res.status(200).json({ message: "Job deleted successfully" });
});

router.get("/export-data/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;
  const job = await prisma.job.findUnique({
    where: { id: id },
    include: {
      applications: true,
    },
  });

  // TODO: Export data to excel

  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }

  return res.status(200).json(job);
});

export { router as adminRoutes };
