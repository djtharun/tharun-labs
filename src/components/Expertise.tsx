import { useState } from 'react';
import { skillsData } from '../data/skills';
import { Cpu, Search, Database, Terminal, Wrench, Binary, Brain } from 'lucide-react';

export default function Expertise() {
  const [filterQuery, setFilterQuery] = useState('');

  const categoryIcons: Record<string, React.ReactNode> = {
    "AI & Machine Learning": <Brain className="w-4 h-4 text-accent" />,
    "AI Engineering": <Cpu className="w-4 h-4 text-accent" />,
    "Backend Engineering": <Database className="w-4 h-4 text-accent-secondary" />,
    "Programming": <Binary className="w-4 h-4 text-accent" />,
    "Developer Tools": <Wrench className="w-4 h-4 text-accent-secondary" />
  };

  const filteredCategories = skillsData.map((category) => {
    if (!filterQuery) {
      return {
        ...category,
        matchedSkills: category.skills,
        isVisible: true
      };
    }

    const q = filterQuery.toLowerCase();
    const matched = category.skills.filter(s => s.toLowerCase().includes(q));
    const categoryMatches = category.category.toLowerCase().includes(q) || category.description.toLowerCase().includes(q);

    return {
      ...category,
      matchedSkills: categoryMatches ? category.skills : matched,
      isVisible: categoryMatches || matched.length > 0
    };
  }).filter(c => c.isVisible);

  return (
    <section
      id="expertise"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle bg-bg-secondary relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>[ SECTION 02 // CAPABILITY MATRIX & TOOLCHAINS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary uppercase font-sans">
              Technical Expertise
            </h2>
          </div>

          {/* Interactive Stack Filter */}
          <div className="w-full md:w-72 relative">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter stack (e.g. Qdrant, FastAPI)..."
                className="w-full bg-bg-surface border border-border-default focus:border-accent rounded pl-9 pr-3 py-2 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-bg-surface/80 border border-border-default rounded-lg p-6 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 tech-corner-tl tech-corner-br"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-accent" />}
                    <h3 className="font-mono text-xs font-bold text-text-primary tracking-wider uppercase">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted bg-bg-primary px-2 py-0.5 rounded border border-border-subtle">
                    {group.code}
                  </span>
                </div>

                {/* Subsystem Description */}
                <p className="mt-3 text-xs text-text-secondary leading-relaxed font-normal">
                  {group.description}
                </p>

                {/* Skill Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.matchedSkills.map((skill) => {
                    const isHighlighted = filterQuery && skill.toLowerCase().includes(filterQuery.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                          isHighlighted
                            ? 'bg-accent text-bg-primary font-bold shadow-phosphor'
                            : 'bg-bg-primary border border-border-subtle text-text-primary hover:border-accent/50 hover:bg-bg-elevated'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${isHighlighted ? 'bg-bg-primary' : 'bg-accent'}`} />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Technical Meta */}
              <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[10px] text-text-muted">
                <span>INDEXED: {group.skills.length} NODES</span>
                <span className="text-accent/80 font-mono">VERIFIED ARCHITECTURE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Callout Banner */}
        <div className="p-6 rounded-lg border border-border-default bg-bg-surface/50 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span>CORE ENGINEERING PHILOSOPHY</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Prioritizing deterministic pipelines, verified retrieval precision, and resilient backend boundaries over probabilistic guesswork. No fabricated proficiency bars or vanity metrics.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="font-mono text-xs px-4 py-2 bg-bg-primary border border-border-default rounded text-text-secondary">
              <span className="text-text-muted">SYSTEM STATUS: </span>
              <span className="text-accent font-semibold">ALL PRIMITIVES ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
