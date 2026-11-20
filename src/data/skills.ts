import { SkillGroup } from '../types';

export const skillsData: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    code: "AIML_CORE",
    description: "Foundational machine learning frameworks, data manipulation, deep learning primitives, and statistical modeling.",
    skills: [
      "PyTorch",
      "NumPy",
      "Pandas",
      "LLMs",
      "embeddings",
      "anomaly detection"
    ]
  },
  {
    category: "AI Engineering",
    code: "AI_ENG_SYS",
    description: "Production retrieval architectures, semantic search indices, agentic loops, and document layout parsing.",
    skills: [
      "RAG",
      "hybrid retrieval",
      "cross-encoder reranking",
      "agents",
      "mem0",
      "Qdrant",
      "Docling"
    ]
  },
  {
    category: "Backend Engineering",
    code: "BACKEND_INFRA",
    description: "High-throughput asynchronous APIs, event-driven streaming pipelines, and relational database systems.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SSE"
    ]
  },
  {
    category: "Programming",
    code: "LANG_CORE",
    description: "Core languages for systems development, algorithmic problem solving, scripting, and web interfaces.",
    skills: [
      "Python",
      "C++",
      "Java",
      "JavaScript",
      "SQL"
    ]
  },
  {
    category: "Developer Tools",
    code: "TOOL_OPS",
    description: "Containerization, version control, local LLM serving runtimes, and automated workflow orchestration.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Ollama",
      "n8n",
      "Jupyter Notebook"
    ]
  }
];
