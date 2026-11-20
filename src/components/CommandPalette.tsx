import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  FolderGit2, 
  Cpu, 
  User, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Copy, 
  Check, 
  X,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Project' | 'Action';
  title: string;
  subtitle: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-index',
      category: 'Navigation',
      title: 'Index // Main Terminal',
      subtitle: 'Overview, hero instrumentation, and quick links',
      shortcut: 'G H',
      icon: <Terminal className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#index'),
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Selected Projects',
      subtitle: 'Explore 3 core AI engineering systems and architectures',
      shortcut: 'G P',
      icon: <FolderGit2 className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#projects'),
    },
    {
      id: 'proj-01',
      category: 'Project',
      title: 'Project 01: Document Intelligence Platform',
      subtitle: 'Docling, Qdrant hybrid retrieval & cross-encoder reranking',
      shortcut: '01',
      icon: <Sparkles className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#project-01'),
    },
    {
      id: 'proj-02',
      category: 'Project',
      title: 'Project 02: G.W.E.N (Personal AI Assistant)',
      subtitle: 'Desktop agentic automation, mem0 memory & Playwright',
      shortcut: '02',
      icon: <Sparkles className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#project-02'),
    },
    {
      id: 'proj-03',
      category: 'Project',
      title: 'Project 03: Health Orbit Dashboard',
      subtitle: 'Real-time telemetry, SSE stream & Ollama clinical insights',
      shortcut: '03',
      icon: <Sparkles className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#project-03'),
    },
    {
      id: 'nav-expertise',
      category: 'Navigation',
      title: 'Technical Expertise',
      subtitle: 'Searchable capability matrix & framework toolchains',
      shortcut: 'G E',
      icon: <Cpu className="w-4 h-4 text-accent-secondary" />,
      action: () => navigateTo('#expertise'),
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'About & Principles',
      subtitle: 'CS education, focus areas, and currently exploring list',
      shortcut: 'G A',
      icon: <User className="w-4 h-4 text-accent" />,
      action: () => navigateTo('#about'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Contact & Dispatch',
      subtitle: 'Email, inquiries, and laboratory telemetry',
      shortcut: 'G C',
      icon: <Mail className="w-4 h-4 text-accent-secondary" />,
      action: () => navigateTo('#contact'),
    },
    // Actions
    {
      id: 'action-resume',
      category: 'Action',
      title: 'Download Resume',
      subtitle: 'Curriculum vitae (PDF)',
      shortcut: 'PDF',
      icon: <FileText className="w-4 h-4 text-accent" />,
      action: () => {
        onClose();
        const a = document.createElement('a');
        a.href = profileData.resumeUrl;
        a.download = 'D_J_Tharun_Resume.pdf';
        a.click();
      },
    },
    {
      id: 'action-github',
      category: 'Action',
      title: 'Open GitHub Profile',
      subtitle: 'Browse repositories & source implementations',
      shortcut: 'GH',
      icon: <Github className="w-4 h-4 text-text-primary" />,
      action: () => {
        onClose();
        window.open(profileData.github, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'action-linkedin',
      category: 'Action',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect with D J Tharun professionally',
      shortcut: 'LI',
      icon: <Linkedin className="w-4 h-4 text-accent-secondary" />,
      action: () => {
        onClose();
        window.open(profileData.linkedin, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'action-copy-email',
      category: 'Action',
      title: 'Copy Email to Clipboard',
      subtitle: profileData.email,
      shortcut: 'CP',
      icon: copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4 text-accent" />,
      action: copyEmail,
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filteredCommands.length || 1)) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-2xl bg-bg-surface border border-border-default rounded-lg shadow-2xl overflow-hidden tech-corner-tl tech-corner-br"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle bg-bg-primary/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-text-primary tracking-wider uppercase font-semibold">
              LAB COMMAND PALETTE // ROUTE_DISPATCH
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-text-muted hover:text-text-primary rounded transition-colors"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative border-b border-border-subtle bg-bg-surface flex items-center px-4">
          <Search className="w-4 h-4 text-accent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search sections (e.g., 'Projects', 'Qdrant', 'Resume')..."
            className="w-full bg-transparent px-3 py-3.5 text-sm font-mono text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="font-mono text-[10px] text-text-muted hover:text-text-primary px-1.5 py-0.5 rounded border border-border-subtle"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center font-mono space-y-2">
              <Terminal className="w-8 h-8 text-text-muted mx-auto" />
              <p className="text-sm text-text-secondary">NO MATCHING PROTOCOLS FOUND</p>
              <p className="text-xs text-text-muted">
                Try searching for &quot;Projects&quot;, &quot;Expertise&quot;, &quot;About&quot;, or &quot;Resume&quot;.
              </p>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded flex items-center justify-between gap-3 font-mono transition-colors ${
                    isSelected
                      ? 'bg-bg-elevated border border-accent/40 text-text-primary'
                      : 'border border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded border shrink-0 ${
                        isSelected
                          ? 'bg-accent/10 border-accent/50 text-accent'
                          : 'bg-bg-primary border-border-subtle text-text-muted'
                      }`}
                    >
                      {cmd.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold truncate ${
                            isSelected ? 'text-accent' : 'text-text-primary'
                          }`}
                        >
                          {cmd.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-bg-primary border border-border-subtle text-text-muted">
                          {cmd.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted truncate mt-0.5">
                        {cmd.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {cmd.shortcut && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-primary border border-border-subtle text-text-muted">
                        {cmd.shortcut}
                      </span>
                    )}
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected
                          ? 'text-accent translate-x-0.5'
                          : 'text-text-muted opacity-40'
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-border-subtle bg-bg-primary flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-text-muted">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-bg-surface border border-border-default text-text-secondary text-[10px]">
                ↑
              </kbd>{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-bg-surface border border-border-default text-text-secondary text-[10px]">
                ↓
              </kbd>{' '}
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-bg-surface border border-border-default text-text-secondary text-[10px]">
                ↵
              </kbd>{' '}
              Select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-bg-surface border border-border-default text-text-secondary text-[10px]">
                ESC
              </kbd>{' '}
              Close
            </span>
          </div>

          <span className="text-accent/80 font-semibold">
            {copied ? 'EMAIL COPIED TO CLIPBOARD' : 'THARUN LABS TERMINAL'}
          </span>
        </div>
      </div>
    </div>
  );
}
