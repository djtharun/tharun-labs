import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "D J THARUN",
  spec: "AI & ML Engineering // Computer Science",
  location: "Hyderabad, India",
  availability: "Open to opportunities",
  tagline: "Building intelligent systems. Exploring what's next.",
  supportingDescription: "I'm a computer science student focused on AI engineering, LLM applications, retrieval systems, and backend development. I enjoy turning technical ideas into practical software.",
  email: "djtharun2006@gmail.com",
  github: "https://github.com/djtharun",
  linkedin: "https://www.linkedin.com/in/tharun-d-j-15944828b/",
  resumeUrl: "/djtharun_resume.pdf",
  aboutParagraphs: [
    "I am a Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning. My work centers on the intersection of modern AI models and production backend engineering — turning experimental models into reliable, high-throughput software systems.",
    "Rather than treating LLMs as magic black boxes, I am driven by the mechanics behind them: how structural chunking improves semantic retrieval fidelity, how vector databases like Qdrant index dense-sparse embeddings, and how agentic loops orchestrate tools with persistent memory.",
    "When I'm not architecting retrieval pipelines or building containerized agent systems, I spend time experimenting with local model inference (Ollama), event-driven stream processing, and minimalist terminal-inspired interface design."
  ],
  explorations: [
    {
      title: "Agentic AI Architectures",
      tag: "AGENTIC_LOOPS",
      description: "Autonomous tool execution, stateful planning graphs, and graceful error recovery in multi-turn environments.",
      focus: "LangChain / State Machines / Tool Routing"
    },
    {
      title: "Retrieval Optimization",
      tag: "HYBRID_RAG",
      description: "Dense-sparse vector retrieval, metadata pre-filtering, and cross-encoder reranking for low hallucination.",
      focus: "Qdrant / Docling / Reciprocal Rank Fusion"
    },
    {
      title: "LLM Evaluation & Grounding",
      tag: "EVAL_METRICS",
      description: "Systematic benchmarking of generation faithfulness, retrieval precision, and context window efficiency.",
      focus: "Groundedness / Latency Budgets / RAG Triad"
    },
    {
      title: "Memory Systems",
      tag: "PERSISTENT_MEM",
      description: "Episodic and semantic memory architectures that persist user context across disparate conversational sessions.",
      focus: "mem0 / Vector Embeddings / Temporal Indexing"
    },
    {
      title: "Intelligent Automation",
      tag: "WORKFLOW_ORCH",
      description: "Event-driven workflow orchestration coupling headless browser drivers with automated backend triggers.",
      focus: "Playwright / n8n / Async Webhooks"
    }
  ],
  systemSpecs: {
    nodeEnv: "PRODUCTION",
    labRef: "TL-HYD-2026",
    timezone: "IST (UTC+05:30)",
    deployTarget: "Cloudflare Pages Edge"
  }
};
