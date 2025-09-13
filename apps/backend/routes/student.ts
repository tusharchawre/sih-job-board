import { prisma } from "@repo/db/client";
import { Router } from "express";
import { auth } from "../utils/auth";
import { fromNodeHeaders } from "better-auth/node";

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

export default router;