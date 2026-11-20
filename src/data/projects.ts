import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "document-intelligence-platform",
    number: "01",
    title: "Document Intelligence Platform",
    subtitle: "End-to-End Enterprise Retrieval & Parsing Engine",
    description: "An end-to-end document intelligence pipeline supporting document parsing, structural chunking, embedding generation, vector indexing, hybrid retrieval, metadata filtering, cross-encoder reranking, and conversational question answering.",
    fullDescription: "Built to overcome the precision loss of naive fixed-size chunking, this platform integrates Docling for structural layout parsing (preserving headers, tables, and lists) before generating high-dimensional dense representations using Qwen3 Embeddings. Candidates are retrieved via hybrid dense-sparse queries against Qdrant, filtered by extracted metadata, and re-scored via a cross-encoder reranker prior to LLM synthesis.",
    technologies: ["FastAPI", "Qdrant", "Docling", "Python", "Qwen3 Embeddings", "n8n"],
    highlights: [
      "Document ingestion",
      "Structural chunking",
      "Dense-sparse hybrid retrieval",
      "Cross-encoder reranking",
      "Retrieval APIs"
    ],
    architecture: {
      summary: "Multi-stage retrieval pipeline designed to maximize retrieval accuracy and eliminate hallucination in complex technical and tabular documents.",
      flowSteps: [
        {
          step: "01",
          label: "Structural Ingestion",
          desc: "Docling engine parses PDF and Office formats into structured hierarchical ASTs, capturing tables, headers, and footnotes."
        },
        {
          step: "02",
          label: "Contextual Chunking",
          desc: "Chunks respect logical document boundaries and carry parent document metadata rather than arbitrary token cuts."
        },
        {
          step: "03",
          label: "Vector & Sparse Indexing",
          desc: "Qwen3 embeddings generate dense vectors stored in Qdrant collections along with BM25 sparse token representations."
        },
        {
          step: "04",
          label: "Hybrid Search & Reranking",
          desc: "Reciprocal Rank Fusion (RRF) combines sparse and dense candidates, followed by cross-encoder re-scoring of top-k passages."
        },
        {
          step: "05",
          label: "API & Workflow Dispatch",
          desc: "FastAPI endpoints serve low-latency queries, with n8n orchestrating recurring batch ingestion tasks."
        }
      ],
      keyDecisions: [
        "Adopted Docling over standard PyPDF to preserve markdown table structures and column layouts.",
        "Implemented cross-encoder reranking to weed out false-positive lexical matches before injecting context into the LLM.",
        "Separated ingestion pipeline (async n8n jobs) from query endpoints (FastAPI) to maintain sub-100ms API response times."
      ],
      specs: [
        { label: "Vector DB", value: "Qdrant Vector Engine" },
        { label: "Parser", value: "Docling AST Engine" },
        { label: "Embeddings", value: "Qwen3 Embedding Matrix" },
        { label: "API Protocol", value: "FastAPI REST / OpenAPI" },
        { label: "Orchestration", value: "n8n Webhook Triggers" }
      ]
    },
    githubUrl: "https://github.com/djtharun/document-intelligence-platform",
    liveUrl: "https://github.com/djtharun/document-intelligence-platform",
    status: "Production Pipeline",
    metricLabel: "Dense + Sparse Hybrid"
  },
  {
    id: "gwen-assistant",
    number: "02",
    title: "G.W.E.N (Personal AI Assistant)",
    subtitle: "Desktop Agentic Automation & Persistent Memory System",
    description: "An agentic personal AI assistant designed for Linux desktop interaction, supporting local and cloud-hosted LLMs, long-term memory, browser automation, and modular tool execution.",
    fullDescription: "G.W.E.N bridges the gap between conversational models and real operating system capabilities. Built with LangChain and FastAPI, it incorporates mem0 and Qdrant to form a continuous episodic memory substrate, allowing G.W.E.N to remember user preferences, file structures, and past task outcomes. It securely drives headless and interactive browser sessions via Playwright, executes shell commands in controlled boundaries, and switches between local Ollama instances and external LLMs.",
    technologies: ["Python", "FastAPI", "LangChain", "mem0", "Qdrant", "Ollama", "Docker", "Playwright"],
    highlights: [
      "Agentic workflows",
      "Persistent memory",
      "Browser automation",
      "Shell command tools",
      "Local LLM integration"
    ],
    architecture: {
      summary: "Stateful agentic architecture featuring tool dispatch, memory retrieval, sandboxed command execution, and multi-model failover.",
      flowSteps: [
        {
          step: "01",
          label: "Intent & ReAct Routing",
          desc: "LangChain orchestrator evaluates user requests, dynamically deciding whether to consult memory, query tools, or synthesize answers."
        },
        {
          step: "02",
          label: "Memory Recall & Update",
          desc: "mem0 extracts salient facts and retrieves relevant user history from Qdrant vector memory prior to plan generation."
        },
        {
          step: "03",
          label: "Browser Automation",
          desc: "Playwright headless worker navigates portals, scrapes dynamic content, or fills out automated forms based on natural language commands."
        },
        {
          step: "04",
          label: "System Tool Execution",
          desc: "Modular Python tools interface with Linux CLI utilities, file operations, and system monitoring safely."
        },
        {
          step: "05",
          label: "Local/Cloud Model Dispatch",
          desc: "Queries execute primarily against local Ollama models (Llama 3 / Mistral) for privacy, falling back to cloud APIs when needed."
        }
      ],
      keyDecisions: [
        "Implemented mem0 on top of Qdrant to separate ephemeral session context from persistent long-term biographical facts.",
        "Employed Playwright over standard HTTP scrapers to reliably handle client-rendered single page applications and auth sessions.",
        "Containerized background worker components in Docker to ensure sandbox isolation on Linux desktops."
      ],
      specs: [
        { label: "Agent Engine", value: "LangChain ReAct Agent" },
        { label: "Memory Substrate", value: "mem0 + Qdrant Vector" },
        { label: "Inference Engine", value: "Ollama (Local) / Cloud API" },
        { label: "Browser Engine", value: "Playwright Chromium Headless" },
        { label: "Deployment", value: "Docker Linux Stack" }
      ]
    },
    githubUrl: "https://github.com/djtharun/gwen-assistant",
    liveUrl: "https://github.com/djtharun/gwen-assistant",
    status: "Active Workstation Agent",
    metricLabel: "Autonomous Desktop Tools"
  },
  {
    id: "health-orbit-dashboard",
    number: "03",
    title: "Health Orbit Dashboard",
    subtitle: "Real-Time Telemetry & LLM Diagnostic Anomaly Stream",
    description: "A real-time healthcare monitoring demonstration combining simulated patient telemetry, event-driven backend processing, live dashboards, and local LLM-powered anomaly insights.",
    fullDescription: "A distributed demonstration system designed to model intensive care telemetry monitoring. A high-frequency Python simulation stream generates realistic physiological data points (heart rate, blood pressure, SpO2, respiratory trends) across diverse patient personas. An event-driven Express.js service broadcasts updates via Server-Sent Events (SSE) to a React frontend, while an integrated Ollama local LLM automatically analyzes telemetry anomalies in real time to generate clinical context briefs.",
    technologies: ["React", "Express.js", "PostgreSQL", "Python", "Ollama"],
    highlights: [
      "Real-time telemetry",
      "Server-Sent Events",
      "Patient personas",
      "Vital-sign visualization",
      "AI-generated contextual insights"
    ],
    architecture: {
      summary: "Event-driven telemetry processing pipeline connecting simulated physiological sensors with live streaming UI and local AI diagnostic briefs.",
      flowSteps: [
        {
          step: "01",
          label: "Physiological Simulation",
          desc: "Python telemetry service generates time-series vital signs according to configurable patient medical personas and sudden stress triggers."
        },
        {
          step: "02",
          label: "Event Streaming (SSE)",
          desc: "Express.js pipeline consumes telemetry signals, persists historical logs to PostgreSQL, and broadcasts real-time SSE streams."
        },
        {
          step: "03",
          label: "Anomaly Detection",
          desc: "Threshold and variance algorithms identify arrhythmia, hypoxia, and acute vital shifts in real-time."
        },
        {
          step: "04",
          label: "Local LLM Insights",
          desc: "Ollama runs on-premise inference to generate concise natural language diagnostic summaries based on telemetry spikes."
        },
        {
          step: "05",
          label: "Live React Dashboard",
          desc: "Frontend visualizes vital trends with low-overhead SVG waveforms, alerts, and persona history."
        }
      ],
      keyDecisions: [
        "Used Server-Sent Events (SSE) instead of WebSocket overhead for unidirectional real-time data broadcasting.",
        "Implemented local Ollama processing to simulate realistic HIPAA-compliant on-premise healthcare data isolation.",
        "Structured patient persona matrices in PostgreSQL for instant replay and regression simulation testing."
      ],
      specs: [
        { label: "Frontend", value: "React + SVG Telemetry" },
        { label: "Backend Stream", value: "Express.js SSE Broadcaster" },
        { label: "Data Store", value: "PostgreSQL Time-Series Log" },
        { label: "Inference", value: "Ollama Local Clinical Context" },
        { label: "Telemetry Gen", value: "Python Persona Simulator" }
      ]
    },
    githubUrl: "https://github.com/djtharun/health-orbit-dashboard",
    liveUrl: "https://github.com/djtharun/health-orbit-dashboard",
    status: "Telemetry Prototype",
    metricLabel: "SSE Stream + Local LLM"
  }
];
