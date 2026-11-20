import { Terminal, ArrowUp, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-primary border-t border-border-default py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs text-text-muted">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          {/* Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span className="font-bold tracking-wider text-text-primary text-sm">
                THARUN LABS
              </span>
              <span className="text-text-muted">//</span>
              <span className="text-text-secondary">D J THARUN</span>
            </div>
            <p className="text-[11px] text-text-muted">
              Computer Science &amp; Engineering // AI &amp; Machine Learning
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-5 text-text-secondary">
            <a href="#index" className="hover:text-accent transition-colors">Index</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#expertise" className="hover:text-accent transition-colors">Expertise</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border-subtle hover:border-accent text-text-secondary hover:text-text-primary transition-colors bg-bg-surface"
          >
            <span>TOP_OF_STACK</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-4">
            <span>© 2026 D J THARUN. ALL SYSTEMS NOMINAL.</span>
            <span className="hidden sm:inline text-text-muted">|</span>
            <span className="hidden sm:inline">HOSTED ON CLOUDFLARE PAGES</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
