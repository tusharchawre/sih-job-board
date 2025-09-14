import { prisma } from "@repo/db/client";
import express from "express";
import pinecone from "@repo/pinecone/client";
import { adminRoutes } from "./routes/admin";
import { studentRoutes } from "./routes/student";
import { jobsRoutes } from "./routes/jobs";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";

const app = express();
app.use(
  cors({
    origin:"http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth));


app.use(express.json());

app.use("/api/jobs", jobsRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
