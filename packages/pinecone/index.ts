import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

export default pc;

export const jobBoardIndex = pc.index("sih-job-board").namespace("__default__");


