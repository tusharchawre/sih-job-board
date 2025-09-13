import { Router } from "express";
import { prisma } from "@repo/db/client";

import { auth } from "../utils/auth";
import { fromNodeHeaders } from "better-auth/node";

const router = Router();





 


router.get("/", async (req, res) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }

 	try {
 		const jobs = await prisma.job.findMany({
 			
 		});
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
        
        return res.status(500).json({ error: error});
    }
});

router.get("/reccomended", async (req, res) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    
    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    // TODO: Implement recommendation logic here 
});




 
export  { router as jobsRouter }; 