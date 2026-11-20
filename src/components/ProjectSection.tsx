import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';
import ProjectCard from './ProjectCard';
import { Terminal, Code2 } from 'lucide-react';

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle relative bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>[ SECTION 01 // CORE RESEARCH & SYSTEMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary uppercase font-sans">
              Selected Projects
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
              Real systems constructed around retrieval pipelines, autonomous desktop agents, and real-time telemetry streaming. No fabricated metrics.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Technical Footer Note */}
        <div className="p-4 rounded border border-border-subtle bg-bg-surface/40 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-accent" />
            <span>ALL SYSTEM REPOSITORIES INCLUDE ARCHITECTURAL SCHEMAS & CONFIGURATIONS</span>
          </div>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            VIEW MORE EXPERIMENTS ON GITHUB &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
