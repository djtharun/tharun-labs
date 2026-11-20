import { useState } from 'react';
import { profileData } from '../data/profile';
import EngineeringStatus from './EngineeringStatus';
import { 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Copy, 
  Check, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle bg-bg-secondary relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>[ SECTION 04 // COMMUNICATIONS &amp; DISPATCH ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary font-sans">
              Have an interesting problem to solve?
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
              Available for AI engineering internships, research collaborations, backend development, and technical inquiries.
            </p>
          </div>
        </div>

        {/* Contact Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Channel Card */}
          <div className="lg:col-span-7 bg-bg-surface/80 border border-border-default rounded-lg p-6 sm:p-8 space-y-6 tech-corner-tl tech-corner-br">
            <div className="space-y-2">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block">
                DIRECT TRANSMISSION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                Let&apos;s build intelligent systems together.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you want to discuss dense-sparse vector indexing, autonomous agent frameworks, or modern backend pipelines, my inbox is always open.
              </p>
            </div>

            {/* Email Box with Copy & Mailto */}
            <div className="p-4 rounded border border-border-default bg-bg-primary/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-bg-surface border border-border-subtle flex items-center justify-center text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text-muted uppercase">PRIMARY EMAIL</div>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-mono text-sm text-text-primary hover:text-accent transition-colors font-medium"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-bg-surface border border-border-subtle hover:border-accent/40 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-accent text-bg-primary font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/90 transition-all shadow-phosphor"
                >
                  <span>Send</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Link Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-border-subtle bg-bg-surface/50 hover:border-accent/40 hover:bg-bg-elevated transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
                  <span className="font-mono text-xs text-text-primary">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-border-subtle bg-bg-surface/50 hover:border-accent/40 hover:bg-bg-elevated transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-accent-secondary group-hover:text-accent transition-colors" />
                  <span className="font-mono text-xs text-text-primary">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
              </a>

              <a
                href={profileData.resumeUrl}
                download
                className="p-3 rounded border border-border-subtle bg-bg-surface/50 hover:border-accent/40 hover:bg-bg-elevated transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-accent group-hover:text-accent transition-colors" />
                  <span className="font-mono text-xs text-text-primary">Resume</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Lab Station & Location Note */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-lg border border-border-default bg-bg-surface/60 space-y-4 tech-corner-tl tech-corner-br">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
                <span className="text-text-muted uppercase">BASE STATION</span>
                <span className="text-accent font-semibold">HYDERABAD, INDIA</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-text-secondary">
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Target Roles:</span>
                  <span className="text-text-primary font-medium">AI Eng / Backend / SWE</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Primary Language:</span>
                  <span className="text-text-primary font-medium">Python, C++, SQL</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle">
                  <span className="text-text-muted">Timezone:</span>
                  <span className="text-text-primary font-medium">IST (UTC+05:30)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-muted">Availability:</span>
                  <span className="text-accent font-medium">Immediate / Open</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3 bg-bg-primary rounded border border-border-subtle font-mono text-[11px] text-text-muted leading-relaxed">
                  <span className="text-accent">NOTE:</span> Links and profile metadata are centralized in <code className="text-text-primary">src/data/profile.ts</code> for zero-friction updates.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Engineering Status Panel */}
        <EngineeringStatus />
      </div>
    </section>
  );
}
