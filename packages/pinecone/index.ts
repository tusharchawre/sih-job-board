import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

export default pc;

export const jobBoardIndex = pc.index(process.env.PINECONE_INDEX!, process.env.PINECONE_HOST).namespace(process.env.PINECONE_NAMESPACE!);


