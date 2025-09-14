import { PrismaClient, JOB_TYPE } from "./generated/prisma";
import pinecone from "@repo/pinecone/client";

const prisma = new PrismaClient();

const jobs = [
  {
    jobTitle: "Software Engineer Intern",
    jobDescription:
      "Join our dynamic engineering team as a Software Engineer Intern. You'll work on cutting-edge projects, collaborate with senior developers, and gain hands-on experience with modern technologies. This internship offers the opportunity to work on real-world applications and contribute to our product development.",
    skillRequired: ["JavaScript", "React", "Node.js", "Git", "Problem Solving"],
    jobType: JOB_TYPE.INTERNSHIP,
    salaryMin: 15000,
    salaryMax: 25000,
  },
  {
    jobTitle: "Full Stack Developer",
    jobDescription:
      "We're looking for a passionate Full Stack Developer to join our growing team. You'll be responsible for developing and maintaining web applications, working with both frontend and backend technologies. The ideal candidate should have experience with modern frameworks and be comfortable working in an agile environment.",
    skillRequired: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "Docker",
    ],
    jobType: JOB_TYPE.FULL_TIME,
    salaryMin: 800000,
    salaryMax: 1200000,
  },
  {
    jobTitle: "Data Science Intern",
    jobDescription:
      "Exciting opportunity for a Data Science Intern to work on machine learning projects and data analysis. You'll work with large datasets, build predictive models, and create data visualizations. This role is perfect for students interested in AI/ML and data-driven decision making.",
    skillRequired: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter",
      "SQL",
    ],
    jobType: JOB_TYPE.INTERNSHIP,
    salaryMin: 12000,
    salaryMax: 20000,
  },
  {
    jobTitle: "Frontend Developer (Part-time)",
    jobDescription:
      "Part-time Frontend Developer position for building responsive and interactive user interfaces. You'll work with our design team to implement pixel-perfect UIs and ensure excellent user experience across all devices. Flexible working hours and remote work options available.",
    skillRequired: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Responsive Design",
    ],
    jobType: JOB_TYPE.PART_TIME,
    salaryMin: 300000,
    salaryMax: 500000,
  },
  {
    jobTitle: "DevOps Engineer",
    jobDescription:
      "Join our infrastructure team as a DevOps Engineer. You'll be responsible for managing cloud infrastructure, implementing CI/CD pipelines, and ensuring system reliability. This role involves working with containerization, monitoring tools, and automation scripts.",
    skillRequired: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Jenkins",
      "Linux",
    ],
    jobType: JOB_TYPE.FULL_TIME,
    salaryMin: 900000,
    salaryMax: 1400000,
  },
  {
    jobTitle: "Mobile App Developer (Contract)",
    jobDescription:
      "6-month contract position for developing a cross-platform mobile application. You'll work with React Native to build a feature-rich mobile app that integrates with our existing backend services. Contract can be extended based on performance.",
    skillRequired: [
      "React Native",
      "JavaScript",
      "Redux",
      "Firebase",
      "App Store",
      "Play Store",
    ],
    jobType: JOB_TYPE.CONTRACT,
    salaryMin: 400000,
    salaryMax: 600000,
  },
  {
    jobTitle: "Cybersecurity Analyst Intern",
    jobDescription:
      "Internship opportunity in cybersecurity to learn about threat detection, security monitoring, and incident response. You'll work with our security team to analyze security logs, conduct vulnerability assessments, and implement security best practices.",
    skillRequired: [
      "Network Security",
      "Linux",
      "Wireshark",
      "Python",
      "Security Tools",
      "Risk Assessment",
    ],
    jobType: JOB_TYPE.INTERNSHIP,
    salaryMin: 10000,
    salaryMax: 18000,
  },
  {
    jobTitle: "Product Manager",
    jobDescription:
      "Lead product development initiatives as a Product Manager. You'll work closely with engineering, design, and business teams to define product requirements, prioritize features, and ensure successful product launches. Experience with agile methodologies required.",
    skillRequired: [
      "Product Strategy",
      "Agile",
      "Figma",
      "Analytics",
      "User Research",
      "Communication",
    ],
    jobType: JOB_TYPE.FULL_TIME,
    salaryMin: 1000000,
    salaryMax: 1500000,
  },
  {
    jobTitle: "UI/UX Designer (Part-time)",
    jobDescription:
      "Part-time UI/UX Designer role for creating intuitive and engaging user experiences. You'll work on wireframes, prototypes, and high-fidelity designs. This position offers flexibility and the opportunity to work on diverse projects.",
    skillRequired: [
      "Figma",
      "Adobe Creative Suite",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Accessibility",
    ],
    jobType: JOB_TYPE.PART_TIME,
    salaryMin: 250000,
    salaryMax: 400000,
  },
  {
    jobTitle: "Backend Developer",
    jobDescription:
      "Backend Developer position focusing on API development and database management. You'll build scalable server-side applications, design database schemas, and ensure high performance and security. Experience with microservices architecture preferred.",
    skillRequired: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "GraphQL",
    ],
    jobType: JOB_TYPE.FULL_TIME,
    salaryMin: 700000,
    salaryMax: 1100000,
  },
  {
    jobTitle: "Machine Learning Engineer (Contract)",
    jobDescription:
      "12-month contract for developing ML models and AI solutions. You'll work on computer vision projects, natural language processing, and recommendation systems. This role offers exposure to cutting-edge AI technologies and real-world applications.",
    skillRequired: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "NLP",
      "MLOps",
    ],
    jobType: JOB_TYPE.CONTRACT,
    salaryMin: 800000,
    salaryMax: 1200000,
  },
  {
    jobTitle: "Cloud Solutions Architect",
    jobDescription:
      "Design and implement cloud-based solutions as a Cloud Solutions Architect. You'll work with AWS, Azure, or GCP to build scalable and secure cloud infrastructure. This role involves architecture planning, cost optimization, and technical leadership.",
    skillRequired: [
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Architecture Design",
    ],
    jobType: JOB_TYPE.FULL_TIME,
    salaryMin: 1200000,
    salaryMax: 1800000,
  },
  {
    jobTitle: "QA Engineer Intern",
    jobDescription:
      "Quality Assurance Internship to learn about software testing methodologies and automation. You'll write test cases, perform manual testing, and learn automated testing tools. Great opportunity to understand the software development lifecycle.",
    skillRequired: [
      "Manual Testing",
      "Selenium",
      "Jest",
      "Bug Tracking",
      "Test Planning",
      "API Testing",
    ],
    jobType: JOB_TYPE.INTERNSHIP,
    salaryMin: 8000,
    salaryMax: 15000,
  },
  {
    jobTitle: "Technical Writer (Part-time)",
    jobDescription:
      "Part-time Technical Writer to create documentation, user guides, and API documentation. You'll work with development teams to document technical processes and create user-friendly content. Remote work available.",
    skillRequired: [
      "Technical Writing",
      "Markdown",
      "Git",
      "API Documentation",
      "User Guides",
      "Communication",
    ],
    jobType: JOB_TYPE.PART_TIME,
    salaryMin: 200000,
    salaryMax: 350000,
  },
  {
    jobTitle: "Blockchain Developer",
    jobDescription:
      "Blockchain Developer position to work on decentralized applications and smart contracts. You'll develop DeFi protocols, NFT marketplaces, and Web3 applications. Experience with blockchain technologies and smart contract development required.",
    skillRequired: [
      "Solidity",
      "Web3.js",
      "Ethereum",
      "Smart Contracts",
      "DeFi",
      "IPFS",
    ],
    jobType: JOB_TYPE.FULL_TIME,
    salaryMin: 1000000,
    salaryMax: 1600000,
  },
];

// Function to generate vector for a job using its description
async function generateJobVector(jobDescription: string): Promise<number[]> {
  try {
    const embedding = await pinecone.inference.embed(
      "llama-text-embed-v2",
      [jobDescription],
      { inputType: "passage", truncate: "END" }
    );

    if (!embedding) {
      throw new Error("Failed to generate vector");
    }

    const jobEmbedding = embedding as any;
    const vector = jobEmbedding.data?.[0]?.values;

    if (!vector || !Array.isArray(vector)) {
      throw new Error("Invalid vector format");
    }

    return vector;
  } catch (error) {
    console.error("Error generating job vector:", error);
    throw error;
  }
}

// Function to store job vector in Pinecone
async function storeJobVector(
  jobId: string,
  jobDescription: string,
  vector: number[]
) {
  try {
    const index = pinecone.index("job-board").namespace("job-board");

    await index.upsert([
      {
        id: jobId,
        values: vector,
        metadata: {
          text: jobDescription,
          type: "job",
        },
      },
    ]);

    console.log(`✅ Stored vector for job: ${jobId}`);
  } catch (error) {
    console.error("Error storing job vector:", error);
    throw error;
  }
}

async function main() {
  console.log("🌱 Starting to seed the database...");

  try {
    // Clear existing jobs
    console.log("🗑️  Clearing existing jobs...");
    await prisma.job.deleteMany({});

    // Create new jobs and generate vectors
    console.log("📝 Creating new jobs...");
    for (const job of jobs) {
      const createdJob = await prisma.job.create({
        data: job,
      });
      console.log(`✅ Created job: ${job.jobTitle}`);

      // Generate vector for the job
      console.log(`🔄 Generating vector for: ${job.jobTitle}`);
      try {
        const vector = await generateJobVector(job.jobDescription);
        await storeJobVector(createdJob.id, job.jobDescription, vector);
      } catch (error) {
        console.error(
          `❌ Failed to generate/store vector for ${job.jobTitle}:`,
          error
        );
        // Continue with other jobs even if one fails
      }
    }

    console.log(`🎉 Successfully seeded ${jobs.length} jobs with vectors!`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
