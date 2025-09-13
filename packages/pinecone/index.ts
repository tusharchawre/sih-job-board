import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!
});

export default pc;


const indexName = 'job-board';
await pc.createIndexForModel({
  name: indexName,
  cloud: 'aws',
  region: 'us-east-1',
  embed: {
    model: 'llama-text-embed-v2',
    fieldMap: { job_description: 'chunk_text' },
  },
  waitUntilReady: true,
});


const index = pc.index(indexName).namespace("job-board");


export { index as jobBoardIndex };

