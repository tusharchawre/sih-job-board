import { prisma } from "@repo/db/client";
import { Router } from "express";
import { auth } from "../utils/auth";
import { fromNodeHeaders } from "better-auth/node";
import { StudentOnboardingForm } from "@repo/types";
import pinecone from "@repo/pinecone/client";

const router = Router();

router.get("/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const student = await prisma.student.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  return res.status(200).json(student);
});

router.post("/create-student", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const validatedData = await StudentOnboardingForm.safeParse(req.body);

  if (!validatedData.success) {
    return res.status(400).json({ error: validatedData.error.message });
  }

  const { projects, certifications, workExperiences, ...studentData } =
    validatedData.data;

  const student = await prisma.student.create({
    data: {
      ...studentData,
      userId: session.user.id,
      projects: {
        create: projects.map((project) => ({
          title: project.title,
          description: project.description,
          link: project.link,
        })),
      },
      certifications: {
        create: certifications.map((cert) => ({
          title: cert.title,
          description: cert.description,
          link: cert.link,
        })),
      },
      workExperiences: {
        create: workExperiences.map((work) => ({
          companyName: work.companyName,
          role: work.role,
          startDate: new Date(work.startDate),
          endDate: work.endDate ? new Date(work.endDate) : null,
          currentlyWorking: work.currentlyWorking,
          description: work.description,
        })),
      },
    },
    include: {
      projects: true,
      workExperiences: true,
      certifications: true,
    },
  });

  const embedding = await pinecone.inference.embed(
    "llama-text-embed-v2",
    [
      student.bio ?? "",
      student.projects.map((project) => project.description).join("\n"),
      student.workExperiences.map((work) => work.description).join("\n"),
      student.certifications.map((cert) => cert.description).join("\n"),
      student.skills.join("\n"),
    ],
    { inputType: "passage", truncate: "END" },
  );

  if (!embedding) {
    return res.status(400).json({ error: "Failed to generate vector" });
  }

  const studentEmbedding = embedding as any;

  const vector = studentEmbedding.data?.[0]?.values;

  await prisma.student.update({
    where: { id: student.id },
    data: {
      studentVector: vector,
    },
  });

  return res.status(201).json(student);
});

router.put("/:id", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  const validatedData = await StudentOnboardingForm.safeParse(req.body);

  if (!validatedData.success) {
    return res.status(400).json({ error: validatedData.error.message });
  }

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;

  const { projects, certifications, workExperiences, ...studentData } =
    validatedData.data;

  const student = await prisma.student.update({
    where: { id: id },
    data: {
      ...studentData,
      projects: {
        create: projects.map((project) => ({
          title: project.title,
          description: project.description,
          link: project.link,
        })),
      },
      certifications: {
        create: certifications.map((cert) => ({
          title: cert.title,
          description: cert.description,
          link: cert.link,
        })),
      },
      workExperiences: {
        create: workExperiences.map((work) => ({
          companyName: work.companyName,
          role: work.role,
          startDate: new Date(work.startDate),
          endDate: work.endDate ? new Date(work.endDate) : null,
          currentlyWorking: work.currentlyWorking,
          description: work.description,
        })),
      },
    },
    include: {
      projects: true,
      workExperiences: true,
      certifications: true,
    },
  });

  // Vector Generation
  const embedding = await pinecone.inference.embed(
    "llama-text-embed-v2",
    [
      student.bio ?? "",
      student.projects.map((project) => project.description).join("\n"),
      student.workExperiences.map((work) => work.description).join("\n"),
      student.certifications.map((cert) => cert.description).join("\n"),
      student.skills.join("\n"),
    ],
    { inputType: "passage", truncate: "END" },
  );

  if (!embedding) {
    return res.status(400).json({ error: "Failed to generate vector" });
  }

  const studentEmbedding = embedding as any;

  const vector = studentEmbedding.data?.[0]?.values;

  await prisma.student.update({
    where: { id: id },
    data: {
      studentVector: vector,
    },
  });

  return res.status(200).json(student);
});


router.get("/applied-jobs", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  
  
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const student = await prisma.student.findUnique({
    where: { userId: session.user.id },
  });
  
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const appliedJobs = await prisma.application.findMany({
    where: { studentId: student.id },
  });

  return res.status(200).json(appliedJobs);
});

export { router as studentRoutes };
