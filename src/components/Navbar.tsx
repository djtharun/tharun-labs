import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X, Command } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('index');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['index', 'projects', 'expertise', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Index', href: '#index', id: 'index' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#index"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Tharun Labs Home"
          >
            <div className="w-8 h-8 rounded border border-border-default bg-bg-surface flex items-center justify-center group-hover:border-accent transition-colors">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-wider text-text-primary group-hover:text-accent transition-colors">
                THARUN LABS
              </span>
              <span className="font-mono text-[10px] text-text-muted tracking-tight">
                SYS.V2.6 // AI ENG
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 border border-border-subtle bg-bg-surface/80 px-3 py-1.5 rounded tech-corner-tl tech-corner-br">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1 text-xs font-mono tracking-wide transition-colors relative ${
                  activeSection === item.id
                    ? 'text-accent font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {activeSection === item.id && (
                  <span className="inline-block w-1 h-1 bg-accent rounded-full mr-1.5 animate-pulse" />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls & External Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Status indicator */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-bg-surface border border-border-subtle text-[11px] font-mono text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-text-primary">{profileData.availability}</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-text-muted hover:text-text-primary border border-border-subtle hover:border-border-default rounded bg-bg-surface/50 transition-colors"
              title="Open Command Palette (Ctrl+K or ⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-accent" />
              <span>⌘K</span>
            </button>

            {/* Social Links */}
            <div className="flex items-center space-x-2 border-l border-border-subtle pl-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text-secondary hover:text-accent hover:bg-bg-surface rounded transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text-secondary hover:text-accent hover:bg-bg-surface rounded transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu & Command Palette Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-text-secondary hover:text-accent border border-border-subtle rounded bg-bg-surface"
              aria-label="Open Command Palette"
            >
              <Command className="w-4 h-4 text-accent" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary border border-border-subtle rounded bg-bg-surface"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-default bg-bg-primary/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <span className="font-mono text-xs text-text-muted">SYSTEM NAVIGATION</span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AVAILABLE
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-mono flex items-center justify-between rounded ${
                  activeSection === item.id
                    ? 'bg-bg-surface text-accent border border-border-subtle'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface/50'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-text-muted">#{item.id}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href={profileData.resumeUrl}
              download
              className="text-xs font-mono px-3 py-1 bg-accent/10 border border-accent/40 text-accent rounded"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
