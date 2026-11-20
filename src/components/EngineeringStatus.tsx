import { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Globe, Clock, Server, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';

export default function EngineeringStatus() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (Hyderabad timezone)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-border-default bg-bg-surface/90 rounded-lg p-5 sm:p-6 tech-corner-tl tech-corner-br backdrop-blur-md">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2 font-mono text-xs text-text-primary">
          <Activity className="w-4 h-4 text-accent" />
          <span className="font-bold tracking-wider uppercase">PORTFOLIO TELEMETRY &amp; ENVIRONMENT SPEC</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-accent bg-bg-primary px-2.5 py-1 rounded border border-border-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>REAL RUNTIME METADATA</span>
        </div>
      </div>

      {/* Grid of Real Metrics */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono">
        {/* Metric 1: Location & Time */}
        <div className="p-3 bg-bg-primary/60 border border-border-subtle rounded space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <Clock className="w-3 h-3 text-accent" />
            <span>LOCAL (IST)</span>
          </div>
          <div className="text-sm font-bold text-text-primary">
            {istTime || '16:24:00'}
          </div>
          <div className="text-[10px] text-text-muted">UTC+05:30 HYD</div>
        </div>

        {/* Metric 2: Hosting Target */}
        <div className="p-3 bg-bg-primary/60 border border-border-subtle rounded space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <Globe className="w-3 h-3 text-accent-secondary" />
            <span>HOSTING</span>
          </div>
          <div className="text-sm font-bold text-text-primary truncate">
            Cloudflare Pages
          </div>
          <div className="text-[10px] text-text-muted">Global Anycast Edge</div>
        </div>

        {/* Metric 3: Framework */}
        <div className="p-3 bg-bg-primary/60 border border-border-subtle rounded space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <Cpu className="w-3 h-3 text-accent" />
            <span>CORE STACK</span>
          </div>
          <div className="text-sm font-bold text-text-primary">
            React 18 + TS
          </div>
          <div className="text-[10px] text-text-muted">Vite 6 Fast Bundle</div>
        </div>

        {/* Metric 4: Architecture */}
        <div className="p-3 bg-bg-primary/60 border border-border-subtle rounded space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <Server className="w-3 h-3 text-accent-secondary" />
            <span>INFRASTRUCTURE</span>
          </div>
          <div className="text-sm font-bold text-text-primary">
            Static SPA
          </div>
          <div className="text-[10px] text-text-muted">Zero Server Overhead</div>
        </div>

        {/* Metric 5: Security */}
        <div className="p-3 bg-bg-primary/60 border border-border-subtle rounded space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <ShieldCheck className="w-3 h-3 text-accent" />
            <span>INTEGRITY</span>
          </div>
          <div className="text-sm font-bold text-text-primary">
            Strict Typecheck
          </div>
          <div className="text-[10px] text-text-muted">No Runtime Leaks</div>
        </div>

        {/* Metric 6: Status */}
        <div className="p-3 bg-bg-primary/60 border border-border-subtle rounded space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>STATUS</span>
          </div>
          <div className="text-sm font-bold text-accent truncate">
            Open
          </div>
          <div className="text-[10px] text-text-muted truncate">
            {profileData.availability}
          </div>
        </div>
      </div>
    </div>
  );
}
