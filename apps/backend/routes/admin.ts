import { Router } from "express";
import { JobForm } from "@repo/types";
import { auth } from "../utils/auth";
import { fromNodeHeaders } from "better-auth/node";
import { prisma } from "@repo/db/client";
import { jobBoardIndex } from "@repo/pinecone/client";

const router = Router();

router.get("/profile", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      name: true,
      emailVerified: true,
      image: true,
      role: true,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // The admin plugin should add role info to the session
  return res.status(200).json({
    ...user,
  });
});

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

  // Tolerate Pinecone errors (e.g., 404) so DB write isn't blocked
  try {
    await jobBoardIndex.upsertRecords([
      {
        _id: job.id,
        jobDescription: job.jobDescription,
        jobTitle: job.jobTitle,
        skillRequired: job.skillRequired,
        jobType: job.jobType,
        salaryMin: job.salaryMin ?? 0,
        salaryMax: job.salaryMax ?? 0,
      },
    ]);
  } catch (error) {
    console.log("Pinecone upsert failed; continuing", { id: job.id, error });
  }

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

  // Best-effort: ignore Pinecone 404s or transient errors
  try {
    await jobBoardIndex.deleteOne(job.id);
  } catch (error) {
    console.warn("Pinecone delete failed; continuing", { id: job.id, error });
  }

  try {
    await jobBoardIndex.upsertRecords([
      {
        _id: job.id,
        jobDescription: job.jobDescription,
        jobTitle: job.jobTitle,
        skillRequired: job.skillRequired,
        jobType: job.jobType,
        salaryMin: job.salaryMin ?? 0,
        salaryMax: job.salaryMax ?? 0,
      },
    ]);
  } catch (error) {
    console.warn("Pinecone upsert failed; continuing", { id: job.id, error });
  }

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

  try {
    await jobBoardIndex.deleteOne(id);
  } catch (error) {
    console.warn("Pinecone delete failed; continuing", { id, error });
  }

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
