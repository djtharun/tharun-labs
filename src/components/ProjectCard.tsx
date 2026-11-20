import { useState } from 'react';
import { Project } from '../types';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Cpu, 
  Workflow, 
  ArrowRight 
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="group relative border border-border-default bg-bg-surface/70 rounded-lg p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 tech-corner-tl tech-corner-br"
      id={`project-${project.number}`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-accent font-bold tracking-widest text-sm">
            #{project.number}
          </span>
          <span className="text-text-muted">//</span>
          <span className="text-text-secondary tracking-wider uppercase font-semibold">
            {project.metricLabel || "CORE ARCHITECTURE"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] text-text-muted tracking-tight">
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Title, Description, Highlights */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors font-sans">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-text-secondary mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Technical Highlights */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-accent" />
              <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs font-mono text-text-secondary bg-bg-primary/50 px-2.5 py-1.5 rounded border border-border-subtle"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Technologies & Action Hub */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-border-subtle lg:pl-8">
          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent-secondary" />
              <span>TECHNOLOGY STACK</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-bg-elevated border border-border-default text-text-primary hover:border-accent/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${
                expanded
                  ? 'bg-accent text-bg-primary font-bold shadow-phosphor'
                  : 'bg-bg-elevated text-text-primary border border-border-default hover:border-accent/60'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>{expanded ? 'Hide Architecture' : 'Inspect Architecture'}</span>
              {expanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded border border-border-subtle bg-bg-primary/60 hover:border-border-default text-text-secondary hover:text-text-primary font-mono text-xs transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </a>
          </div>
        </div>
      </div>

      {/* Expandable Architecture Deep-Dive Drawer */}
      {expanded && (
        <div className="mt-8 pt-8 border-t border-border-default animate-fadeIn">
          <div className="bg-bg-primary/80 border border-border-default rounded-md p-5 sm:p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-sm" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  TECHNICAL ARCHITECTURE & PIPELINE SPECIFICATION
                </h4>
              </div>
              <span className="font-mono text-[11px] text-text-muted">
                PROJECT ID: {project.id}
              </span>
            </div>

            {/* In-depth summary */}
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Pipeline Flow Steps */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                EXECUTION FLOW & STAGES
              </span>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {project.architecture.flowSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-3 bg-bg-surface border border-border-subtle rounded relative group/step hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-subtle">
                      <span className="font-mono text-[11px] text-accent font-bold">
                        STAGE {step.step}
                      </span>
                      <ArrowRight className="w-3 h-3 text-text-muted hidden md:block" />
                    </div>
                    <div className="font-mono text-xs font-semibold text-text-primary mb-1">
                      {step.label}
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Decisions & Hardware/Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              {/* Decisions */}
              <div className="lg:col-span-7 space-y-2">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                  KEY ENGINEERING DECISIONS & RATIONALE
                </span>
                <ul className="space-y-2">
                  {project.architecture.keyDecisions.map((decision, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs text-text-secondary flex items-start gap-2 bg-bg-surface/50 p-2.5 rounded border border-border-subtle"
                    >
                      <span className="text-accent font-mono font-bold mt-0.5">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hardware / Software Subsystem Matrix */}
              <div className="lg:col-span-5 space-y-2">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                  SYSTEM SUBSTRATE METRICS
                </span>
                <div className="bg-bg-surface/50 border border-border-subtle rounded p-3 space-y-2 font-mono text-xs">
                  {project.architecture.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between py-1 border-b border-border-subtle last:border-none"
                    >
                      <span className="text-text-muted">{spec.label}</span>
                      <span className="text-text-primary font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
