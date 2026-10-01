import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Bug,
  Terminal,
  Cpu,
  ArrowRight,
  StepForward,
  FastForward,
  Clock,
  KeyRound,
  FileCode2,
  Check,
  Pause
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface PipelineLog {
  time: string;
  level: 'info' | 'success' | 'warn';
  message: string;
}

interface PipelineStep {
  id: string;
  name: string;
  tool: string;
  iconName: string;
  status: 'idle' | 'running' | 'success' | 'warning';
  summary: string;
  logs: string[];
}

export const LivePipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [activeSpeed, setActiveSpeed] = useState<'normal' | 'fast' | 'manual'>('normal');
  const [userPrompt, setUserPrompt] = useState<string>('Validasi limit transfer antar bank Rp 50.000.000 / hari');
  const [liveLogs, setLiveLogs] = useState<PipelineLog[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const logTerminalEndRef = useRef<HTMLDivElement>(null);

  const initialSteps: PipelineStep[] = [
    {
      id: 'req',
      name: 'Requirement & Context',
      tool: 'Developer Prompt & Context Spec',
      iconName: 'context',
      status: 'idle',
      summary: 'Mempersiapkan context project, schema domain perbankan & rules limit harian.',
      logs: [
        '[CONTEXT] Membaca repository context & dependency tree di /src...',
        '[SPEC] Mengidentifikasi business rules: Batas Rp 50.000.000 / 24 jam.',
        '[GUARDRAILS] Menyiapkan boundary constraints & API contract target.',
      ],
    },
    {
      id: 'ai-gen',
      name: 'AI Code Generation',
      tool: 'AI Agent Sandbox',
      iconName: 'agent',
      status: 'idle',
      summary: 'Menganalisis codebase, menggenerate logic validasi di src/services/transferService.ts',
      logs: [
        '[AGENT] Menganalisis src/services/transferService.ts & model Account.',
        '[CODEGEN] Menyusun validasi akumulasi nominal transfer harian.',
        '[PATCH] Menghasilkan 42 baris kode logic baru dengan TypeScript types.',
      ],
    },
    {
      id: 'sast',
      name: 'Secret & SAST Scan',
      tool: 'SAST / Secret Detection (Gitleaks pattern)',
      iconName: 'sast',
      status: 'idle',
      summary: 'Scanning kode terhadap kebocoran API key, hardcoded token & static analysis.',
      logs: [
        '[SAST] Memindai Abstract Syntax Tree (AST) untuk potensi injection.',
        '[SECRET-SCAN] Regex testing terhadap 140 pola credentials & key tokens.',
        '[AUDIT PASSED] 0 hardcoded secrets. 0 credentials leak terdeteksi.',
      ],
    },
    {
      id: 'trivy',
      name: 'Dependency CVE Scan',
      tool: 'Trivy Scanner Engine',
      iconName: 'trivy',
      status: 'idle',
      summary: 'Memeriksa database CVE terhadap 14 library third-party yang digunakan.',
      logs: [
        '[TRIVY] Mengunduh CVE feed terbaru dari vulnerability database.',
        '[DEPENDENCY] Memeriksa package-lock.json (14 packages terpindai).',
        '[RESULT] 0 Critical, 0 High, 0 Medium vulnerabilities. Clean bill.',
      ],
    },
    {
      id: 'vitest',
      name: 'Automated Test Suite',
      tool: 'Vitest Harness Runner',
      iconName: 'test',
      status: 'idle',
      summary: 'Menjalankan unit test & boundary tests untuk skenario limit transfer berulang.',
      logs: [
        '[TEST] Menjalankan test suite: transferService.test.ts...',
        '[EDGE-CASE] Menguji nominal tepat Rp 50.000.000 (Pass: 200 OK).',
        '[BOUNDARY] Menguji transfer berlebih Rp 50.000.001 (Pass: 422 Rejected).',
        '[COVERAGE] 18/18 Unit tests passed. Branch coverage 94.2%.',
      ],
    },
    {
      id: 'deploy',
      name: 'CI/CD Staging Deploy',
      tool: 'Automated Git Pipeline',
      iconName: 'deploy',
      status: 'idle',
      summary: 'Build artefact terverifikasi & deployment otomatis ke sandbox staging.',
      logs: [
        '[CI/CD] Merangkum security report & test manifest ke dalam git tag.',
        '[CONTAINER] Build docker image staging bank-eka-service:v2.4.1.',
        '[STAGING] Deployment sukses! Health-check endpoint /health HTTP 200 OK.',
      ],
    },
  ];

  const [steps, setSteps] = useState<PipelineStep[]>(initialSteps);

  // Auto-scroll log terminal
  useEffect(() => {
    logTerminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [liveLogs]);

  // Clean intervals on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const addLog = (message: string, level: 'info' | 'success' | 'warn' = 'info') => {
    const time = new Date().toLocaleTimeString('id-ID', { hour12: false });
    setLiveLogs((prev) => [...prev.slice(-30), { time, level, message }]);
  };

  const getStepDuration = () => {
    if (activeSpeed === 'fast') return 1200;
    return 2400; // Normal realistic pacing (~2.4s per step)
  };

  const executeStep = (stepIdx: number) => {
    if (stepIdx >= steps.length) {
      // Completed all
      setIsRunning(false);
      setCurrentStepIndex(steps.length);
      setStepProgress(100);
      sound.playSuccessChime();
      addLog('PIPELINE COMPLETE: Seluruh gerbang DevSecOps terverifikasi 100%!', 'success');
      return;
    }

    setCurrentStepIndex(stepIdx);
    setStepProgress(0);

    const targetStep = steps[stepIdx];
    sound.playSlideClick();
    addLog(`Memulai Step ${stepIdx + 1}: [${targetStep.name}] via ${targetStep.tool}...`, 'info');

    // Update status to running
    setSteps((prev) =>
      prev.map((s, idx) => {
        if (idx === stepIdx) return { ...s, status: 'running' };
        if (idx < stepIdx) return { ...s, status: 'success' };
        return { ...s, status: 'idle' };
      })
    );

    const duration = getStepDuration();
    const updateFreq = 40;
    const progressInc = (updateFreq / duration) * 100;

    // Stream logs for this step during its duration
    targetStep.logs.forEach((logMessage, logIdx) => {
      const logDelay = (duration / (targetStep.logs.length + 1)) * (logIdx + 1);
      setTimeout(() => {
        addLog(logMessage, logIdx === targetStep.logs.length - 1 ? 'success' : 'info');
      }, logDelay);
    });

    let currentProgress = 0;
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    progressIntervalRef.current = setInterval(() => {
      currentProgress += progressInc;
      if (currentProgress >= 100) {
        currentProgress = 100;
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      }
      setStepProgress(Math.min(currentProgress, 100));
    }, updateFreq);

    timerRef.current = setTimeout(() => {
      // Step success
      setSteps((prev) =>
        prev.map((s, idx) => (idx === stepIdx ? { ...s, status: 'success' } : s))
      );
      sound.playTone(440 + stepIdx * 40, 0.1);

      if (activeSpeed === 'manual') {
        setIsRunning(false);
        addLog(`Step ${stepIdx + 1} [${targetStep.name}] selesai. Menunggu klik 'Lanjut Step' presenter...`, 'warn');
      } else {
        executeStep(stepIdx + 1);
      }
    }, duration);
  };

  const handleRunPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsPaused(false);
    setLiveLogs([]);
    addLog(`Memulai Pipeline DevSecOps untuk prompt: "${userPrompt}"`, 'info');
    executeStep(0);
  };

  const handleNextManualStep = () => {
    const nextIdx = currentStepIndex < 0 ? 0 : currentStepIndex + 1;
    if (nextIdx < steps.length) {
      setIsRunning(true);
      executeStep(nextIdx);
    }
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setCurrentStepIndex(-1);
    setStepProgress(0);
    setSteps(initialSteps);
    setLiveLogs([]);
  };

  return (
    <div className="h-full flex flex-col bg-[#070a10] rounded-xl border border-slate-800 p-4 text-xs font-mono select-none">
      {/* Header bar with controls */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 mb-3 gap-2">
        <div className="flex items-center gap-2 text-rose-400 font-bold">
          <Terminal className="w-4 h-4" />
          <span className="text-white">DEVSECOPS PIPELINE RUNNER</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800 text-rose-300 font-normal">
            Controlled Pacing
          </span>
        </div>

        {/* Speed / Mode Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-[11px]">
            <button
              onClick={() => setActiveSpeed('normal')}
              disabled={isRunning}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${activeSpeed === 'normal'
                ? 'bg-rose-950 text-rose-300 border border-rose-800 font-bold'
                : 'text-slate-400 hover:text-white'
                }`}
              title="Kecepatan presentasi wajar (~2.4s per step)"
            >
              <Clock className="w-3 h-3" />
              <span>Realistis (~2.4s)</span>
            </button>

            <button
              onClick={() => setActiveSpeed('fast')}
              disabled={isRunning}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${activeSpeed === 'fast'
                ? 'bg-rose-950 text-rose-300 border border-rose-800 font-bold'
                : 'text-slate-400 hover:text-white'
                }`}
              title="Kecepatan lebih cepat (~1.2s per step)"
            >
              <FastForward className="w-3 h-3" />
              <span>Cepat (1.2s)</span>
            </button>

            <button
              onClick={() => setActiveSpeed('manual')}
              disabled={isRunning}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${activeSpeed === 'manual'
                ? 'bg-rose-950 text-rose-300 border border-rose-800 font-bold'
                : 'text-slate-400 hover:text-white'
                }`}
              title="Jalankan satu per satu dengan tombol Next"
            >
              <StepForward className="w-3 h-3" />
              <span>Step-by-Step</span>
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {activeSpeed === 'manual' && currentStepIndex >= 0 && currentStepIndex < steps.length - 1 && !isRunning ? (
            <button
              onClick={handleNextManualStep}
              className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 shadow-md transition-colors"
            >
              <StepForward className="w-3 h-3" />
              <span>LANJUT STEP BERIKUTNYA</span>
            </button>
          ) : (
            <button
              onClick={handleRunPipeline}
              disabled={isRunning}
              className="px-3.5 py-1.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold flex items-center gap-1.5 transition-colors shadow-md disabled:opacity-50"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isRunning ? 'PIPELINE BERJALAN...' : 'EXECUTE PIPELINE'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Requirement Input Bar */}
      <div className="mb-3 flex items-center gap-2 p-2 rounded-lg bg-slate-950/80 border border-slate-800">
        <span className="text-rose-400 text-[11px] shrink-0 font-bold uppercase">Prompt Input:</span>
        <input
          type="text"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          disabled={isRunning}
          className="bg-transparent text-white text-xs w-full focus:outline-none placeholder:text-slate-600"
          placeholder="Tuliskan spesifikasi requirement..."
        />
      </div>

      {/* Main split: Pipeline steps on top, live streaming terminal on bottom */}
      <div className="flex-1 grid grid-rows-12 gap-3 min-h-0 overflow-hidden">
        {/* Step list (Rows 1-7) */}
        <div className="row-span-7 overflow-y-auto space-y-2 pr-1">
          {steps.map((st, idx) => {
            const isCurrent = currentStepIndex === idx;
            const isDone = st.status === 'success' || (currentStepIndex > idx);

            return (
              <div
                key={st.id}
                className={`p-2.5 rounded-lg border transition-all ${isCurrent
                  ? 'bg-rose-950/40 border-rose-500 shadow-lg ring-1 ring-rose-500/40'
                  : isDone
                    ? 'bg-emerald-950/20 border-emerald-900/60'
                    : 'bg-slate-950/40 border-slate-850 opacity-60'
                  }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400">0{idx + 1}.</span>
                    <span className="font-bold text-white text-xs">{st.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-850 px-1.5 py-0.5 rounded border border-slate-800">
                      {st.tool}
                    </span>
                  </div>

                  <div className="text-[10px] font-bold">
                    {isCurrent && (
                      <span className="text-amber-400 flex items-center gap-1.5 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        EXECUTING ({Math.round(stepProgress)}%)
                      </span>
                    )}
                    {isDone && !isCurrent && (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        PASSED ✓
                      </span>
                    )}
                    {!isCurrent && !isDone && <span className="text-slate-600">PENDING</span>}
                  </div>
                </div>

                {/* Progress bar for active step */}
                {isCurrent && (
                  <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden my-1.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-75"
                      style={{ width: `${stepProgress}%` }}
                    />
                  </div>
                )}

                <div className="text-[11px] text-slate-400 truncate pl-4">
                  {st.summary}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Streaming Terminal Console (Rows 8-12) */}
        <div className="row-span-5 bg-[#04060a] border border-slate-800 rounded-lg p-3 flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-850 mb-1.5 text-[10px] text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-semibold">LIVE PIPELINE STREAM LOGS</span>
            </div>
            <span>DevSecOps Audit Trail</span>
          </div>

          <div className="flex-1 overflow-y-auto font-mono text-[11px] space-y-1 pr-1">
            {liveLogs.length === 0 ? (
              <div className="text-slate-600 italic py-2">
                Tekan "EXECUTE PIPELINE" untuk melihat simulasi eksekusi verifikasi real-time step-by-step...
              </div>
            ) : (
              liveLogs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 leading-tight">
                  <span className="text-slate-600 text-[10px] shrink-0 font-mono">[{log.time}]</span>
                  <span
                    className={
                      log.level === 'success'
                        ? 'text-emerald-400 font-semibold'
                        : log.level === 'warn'
                          ? 'text-amber-300 font-semibold'
                          : 'text-slate-300'
                    }
                  >
                    {log.message}
                  </span>
                </div>
              ))
            )}
            <div ref={logTerminalEndRef} />
          </div>

          <div className="pt-1.5 border-t border-slate-850 flex items-center justify-between text-[10px] text-slate-500">
            <span>Shift Left Security Guarantee</span>
            <span className="text-rose-400 font-semibold">Bank Eka Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
