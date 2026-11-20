import { profileData } from '../data/profile';
import { Terminal, Compass, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle bg-bg-primary relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>[ SECTION 03 // RESEARCHER BACKGROUND & EDUCATION ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary uppercase font-sans">
              About &amp; Principles
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-text-secondary">COMPUTER SCIENCE &amp; ENGINEERING (AI &amp; ML)</span>
          </div>
        </div>

        {/* Narrative & Laboratory Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-accent pl-4 py-1">
              <p className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                ENGINEERING PERSPECTIVE
              </p>
              <p className="text-lg text-text-primary font-medium mt-1">
                Engineering intelligent systems requires moving past prompts to robust pipelines, deterministic guarantees, and clean abstractions.
              </p>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed text-sm sm:text-base font-normal">
              {profileData.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Academic & Focus Details */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded border border-border-default bg-bg-surface/60 tech-corner-tl">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-1">
                  CORE SPECIALIZATION
                </span>
                <p className="text-sm font-semibold text-text-primary">
                  Artificial Intelligence &amp; Machine Learning
                </p>
                <p className="text-xs text-text-secondary mt-1 font-mono">
                  Vector retrieval, agent loops, &amp; distributed backend architectures.
                </p>
              </div>

              <div className="p-4 rounded border border-border-default bg-bg-surface/60 tech-corner-br">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-1">
                  PRIMARY FOCUS
                </span>
                <p className="text-sm font-semibold text-text-primary">
                  Practical Systems Engineering
                </p>
                <p className="text-xs text-text-secondary mt-1 font-mono">
                  Turning algorithmic theory into reproducible, low-latency code.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Exploring Section */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                  CURRENTLY EXPLORING
                </h3>
              </div>
              <span className="font-mono text-[10px] text-accent flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                ACTIVE INVESTIGATIONS
              </span>
            </div>

            <p className="font-mono text-xs text-text-muted">
              Current technical investigations, research themes, and architectural prototypes:
            </p>

            <div className="space-y-3 pt-1">
              {profileData.explorations.map((item) => (
                <div
                  key={item.tag}
                  className="p-3.5 rounded bg-bg-surface/70 border border-border-default hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] pb-1">
                    <span className="text-accent font-semibold flex items-center gap-1">
                      <span>[{item.tag}]</span>
                    </span>
                    <span className="text-[10px] text-text-muted group-hover:text-text-secondary transition-colors">
                      {item.focus}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-text-primary mt-0.5 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-text-muted hover:text-accent transition-colors"
              >
                <span>Track commit log on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
