import { ArrowDownRight, FileText, Github, MapPin, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section
      id="index"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border-subtle overflow-hidden"
    >
      {/* Background Grid Pattern & Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Editorial & Info */}
        <div className="lg:col-span-7 space-y-8">
          {/* Metadata Header Badge */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded border border-border-default bg-bg-surface text-xs font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-primary tracking-wider font-semibold">
              PERSONAL ENGINEERING SPACE / 2026
            </span>
            <span className="text-text-muted hidden sm:inline">|</span>
            <span className="text-text-muted hidden sm:inline">REF: {profileData.systemSpecs.labRef}</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary uppercase font-sans">
                {profileData.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-accent font-mono text-sm sm:text-base font-medium">
              <span className="text-accent/60">&gt;</span>
              <h2>{profileData.tagline}</h2>
            </div>
          </div>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal">
            {profileData.supportingDescription}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded bg-accent text-bg-primary font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/90 transition-all shadow-phosphor"
            >
              <span>Explore Projects</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-border-default bg-bg-surface hover:border-accent/60 text-text-primary font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download Resume</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded border border-border-subtle bg-bg-surface/50 hover:border-border-default text-text-secondary hover:text-text-primary font-mono text-xs transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          {/* Location & Status Bar */}
          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent-secondary" />
              <span className="text-text-secondary">{profileData.location}</span>
              <span className="text-[10px] text-text-muted">(17.3850° N, 78.4867° E)</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/80" />
              <span className="text-text-secondary">{profileData.availability}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-text-muted" />
              <span>STACK: PYTORCH / QDRANT / FASTAPI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sci-Fi Scientific Instrumentation / Orbital Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-md aspect-square relative rounded-lg border border-border-subtle bg-bg-surface/40 p-6 tech-corner-tl tech-corner-br backdrop-blur-sm">
            {/* Corner telemetry marks */}
            <div className="absolute top-2 left-3 font-mono text-[10px] text-text-muted tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-sm inline-block" />
              <span>RADAR_TELEMETRY // LIVE</span>
            </div>
            <div className="absolute top-2 right-3 font-mono text-[10px] text-text-muted tracking-widest">
              SYS_FREQ: 60Hz
            </div>
            <div className="absolute bottom-2 left-3 font-mono text-[10px] text-text-muted">
              COORDINATE: HYD-SEC-01
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[10px] text-accent">
              STATUS: NOMINAL
            </div>

            {/* SVG Instrumentation Graphic */}
            <div className="w-full h-full flex items-center justify-center relative">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-border-default select-none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B5FF55" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#65D9C7" stopOpacity="0.1" />
                  </linearGradient>
                  <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B5FF55" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#090B0A" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Subtle Center Glow */}
                <circle cx="200" cy="200" r="140" fill="url(#centerCore)" />

                {/* Crosshairs */}
                <line x1="20" y1="200" x2="380" y2="200" stroke="#1C261F" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="20" x2="200" y2="380" stroke="#1C261F" strokeWidth="1" strokeDasharray="4 4" />

                {/* Concentric Calibration Circles */}
                <circle cx="200" cy="200" r="170" fill="none" stroke="#1C261F" strokeWidth="1" />
                <circle cx="200" cy="200" r="130" fill="none" stroke="#243228" strokeWidth="1" strokeDasharray="2 4" />
                <circle cx="200" cy="200" r="85" fill="none" stroke="#1C261F" strokeWidth="1" />
                <circle cx="200" cy="200" r="40" fill="none" stroke="#2D3D32" strokeWidth="1" />

                {/* Rotating Scanner Line using CSS Animation */}
                <g className="origin-center animate-[spin_12s_linear_infinite]">
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="30"
                    stroke="url(#orbitGlow)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="30" r="3" fill="#B5FF55" />
                </g>

                {/* Counter Rotating Ring with Degree Ticks */}
                <g className="origin-center animate-[spin_28s_linear_infinite_reverse]">
                  <circle
                    cx="200"
                    cy="200"
                    r="110"
                    fill="none"
                    stroke="#B5FF55"
                    strokeWidth="1.5"
                    strokeDasharray="18 42"
                    strokeOpacity="0.35"
                  />
                  {/* Plotted Orbital Nodes */}
                  <circle cx="277" cy="123" r="4" fill="#65D9C7" />
                  <circle cx="123" cy="277" r="3.5" fill="#B5FF55" />
                </g>

                {/* Central Core Element */}
                <circle cx="200" cy="200" r="12" fill="#151B16" stroke="#B5FF55" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="4" fill="#B5FF55" />

                {/* Node Annotations */}
                <text x="285" y="125" fill="#929C91" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">
                  SYS:QDRANT
                </text>
                <text x="75" y="285" fill="#929C91" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">
                  NODE:DOCLING
                </text>
                <text x="210" y="70" fill="#B5FF55" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">
                  RE_ACT:RUN
                </text>
              </svg>

              {/* Central Badge Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="mt-28 bg-bg-surface/90 border border-border-default px-3 py-1 rounded text-center backdrop-blur-sm">
                  <div className="text-[10px] font-mono text-text-muted">FOCUS_VECTOR</div>
                  <div className="text-xs font-mono text-accent font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 inline" />
                    <span>RETRIEVAL & AGENTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
