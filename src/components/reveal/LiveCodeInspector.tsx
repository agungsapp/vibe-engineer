import React, { useState } from 'react';
import { FileCode, Copy, Check } from 'lucide-react';

const FILES_SNIPPETS: Record<string, { lang: string; code: string }> = {
  'PresentationShell.tsx': {
    lang: 'tsx',
    code: `import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sound } from '../utils/audio';

export const PresentationShell: React.FC = ({ children }) => {
  // 16:9 Presentation Frame with Keyboard Navigation
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-screen h-screen bg-[#070a10] flex items-center justify-center">
      <main className="aspect-video w-full max-w-7xl bg-[#0b0f17] shadow-2xl border border-slate-800">
        {children}
      </main>
    </div>
  );
};`,
  },
  'audio.ts': {
    lang: 'ts',
    code: `// Zero-dependency Web Audio API Synthesizer
class SoundEngine {
  private ctx: AudioContext | null = null;
  public playGlitchWhoosh() {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.5);
    // ... White noise burst filter & binaural stereo separation
  }
}
export const sound = new SoundEngine();`,
  },
  'ShiftLeftSecurity.tsx': {
    lang: 'tsx',
    code: `// DevSecOps Continuous Verification Pipeline
export const ShiftLeftSecurity = () => {
  return (
    <PipelineContainer>
      <Gate name="SAST" scanner="Semgrep" detectSecrets={true} />
      <Gate name="Vulnerability" scanner="Trivy" scanDependencies={true} />
      <Gate name="Vitest" coverageMin={80} failOnMismatch={true} />
    </PipelineContainer>
  );
};`,
  },
};

export const LiveCodeInspector: React.FC = () => {
  const [activeFile, setActiveFile] = useState<string>('PresentationShell.tsx');
  const [copied, setCopied] = useState<boolean>(false);

  const copyCode = () => {
    navigator.clipboard.writeText(FILES_SNIPPETS[activeFile].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="h-full flex flex-col bg-[#070a10] rounded-xl border border-slate-800 p-4 text-xs font-mono">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
        <div className="flex items-center gap-2">
          {Object.keys(FILES_SNIPPETS).map((fileName) => (
            <button
              key={fileName}
              onClick={() => setActiveFile(fileName)}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                activeFile === fileName
                  ? 'bg-rose-950/60 border border-rose-800 text-rose-300 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              {fileName}
            </button>
          ))}
        </div>

        <button
          onClick={copyCode}
          className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="text-[10px]">{copied ? 'COPIED' : 'COPY'}</span>
        </button>
      </div>

      <div className="flex-1 bg-slate-950 p-3 rounded-lg border border-slate-850 overflow-auto font-mono text-[11px] text-slate-300 leading-relaxed">
        <pre>{FILES_SNIPPETS[activeFile].code}</pre>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
        <span>Vite + React 19 + TypeScript + Motion</span>
        <span className="text-rose-400">Pure Client-Side React Engine</span>
      </div>
    </div>
  );
};
