import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Check, AlertCircle, Play } from 'lucide-react';

export const Slide12TerminalSimulation: React.FC = () => {
  const terminalLines = [
    { text: '> agent.inspectProject("./src")', status: 'done', delay: 300 },
    { text: '  ✓ Indexed 24 files, mapped dependencies in tsconfig.json', status: 'info', delay: 700 },
    { text: '> agent.readRelevantFiles(["auth.ts", "transferService.ts"])', status: 'done', delay: 1100 },
    { text: '> agent.planImplementation("Terapkan validasi limit transfer harian")', status: 'done', delay: 1600 },
    { text: '> agent.modifyCode("src/services/transferService.ts")', status: 'done', delay: 2100 },
    { text: '> agent.runTests("npm test transferService.test.ts")', status: 'running', delay: 2600 },
    { text: '  ✕ FAIL: Expected daily limit rejection at Rp 25.000.000 (Got: 200 OK)', status: 'error', delay: 3100 },
    { text: '> agent.readErrorAndPatch("Fix inequality check in limitEvaluator.ts")', status: 'done', delay: 3600 },
    { text: '> agent.runTestsAgain()', status: 'running', delay: 4100 },
    { text: '  ✓ PASS: 14/14 tests passing. Verification complete in 1.42s', status: 'success', delay: 4600 },
  ];

  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isReplaying, setIsReplaying] = useState<boolean>(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setVisibleCount(current);
      if (current >= terminalLines.length) {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [isReplaying]);

  const handleReplay = () => {
    setVisibleCount(0);
    setIsReplaying((prev) => !prev);
  };

  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        12 · AI Agent In Action
      </motion.div>

      <div className="my-auto max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            IT'S NOT JUST COPY-PASTE ANYMORE.
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Simulasi eksekusi otonom AI Agent dalam sandbox pengembangan:
          </p>
        </motion.div>

        {/* Polished Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-[#070b12] border border-slate-800 shadow-2xl overflow-hidden font-mono"
        >
          {/* Window Title Bar */}
          <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs text-slate-400 ml-2 font-medium">agent-session · sandbox workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleReplay}
                className="text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors flex items-center gap-1"
                title="Putar Ulang Simulasi Terminal"
              >
                <span>↺ Replay</span>
              </button>
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Controlled Environment</span>
              </div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 text-xs lg:text-sm space-y-2 min-h-[300px] flex flex-col justify-start">
            {terminalLines.slice(0, visibleCount).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex items-start gap-2 ${line.status === 'error'
                  ? 'text-rose-400 font-semibold'
                  : line.status === 'success'
                    ? 'text-emerald-400 font-semibold'
                    : line.status === 'info'
                      ? 'text-slate-400 italic'
                      : line.status === 'running'
                        ? 'text-amber-300'
                        : 'text-slate-200'
                  }`}
              >
                <span>{line.text}</span>
              </motion.div>
            ))}

            {visibleCount < terminalLines.length && (
              <div className="text-rose-500 animate-pulse text-sm">▌</div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Siklus: Inspect ➔ Plan ➔ Edit ➔ Test ➔ Self-Fix ➔ Verify</span>
        <span>Simulasi Agentic Workflow</span>
      </div>
    </div>
  );
};
