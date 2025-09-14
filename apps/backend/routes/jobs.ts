import { Router } from "express";
import { prisma } from "@repo/db/client";
import { auth } from "../utils/auth";
import { fromNodeHeaders } from "better-auth/node";
import { jobBoardIndex } from "@repo/pinecone/client";

const router = Router();

router.get("/", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const jobs = await prisma.job.findMany({});
    res.json(jobs);
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: errorMsg });
  }
});

router.get("/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { id } = req.params;

  try {
    const job = await prisma.job.findUnique({
      where: { id: id },
    });

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.get("/reccomended", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const student = await prisma.student.findUnique({
    where: {
      userId: user.id,
    },
  });

  const studentVector = student?.studentVector;

  if (!studentVector) {
    return res.status(404).json({ error: "Student vector not found" });
  }

  const recommendedJobs = await jobBoardIndex.query({
    vector: studentVector,
    topK: 10,
    includeValues: false,
    includeMetadata: true,
  });

  return res.status(200).json(recommendedJobs);
});

router.post("/apply/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;

  const job = await prisma.job.findUnique({
    where: { id: id },
  });

  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }

  const student = await prisma.student.findUnique({
    where: { userId: session.user.id },
  });

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }


  const application = await prisma.application.create({
    data: {
      studentId: student.id,
      jobId: job.id,
    },
  });

  return res.status(201).json(application);
});

export { router as jobsRoutes };
