import React from 'react';
import { motion } from 'motion/react';
import { User, FileText, Bot, Code, TestTube, ShieldCheck, GitMerge, Rocket, Activity, RotateCcw } from 'lucide-react';

export const Slide16BigPicture: React.FC = () => {
  const nodes = [
    { label: 'HUMAN', icon: User, color: 'text-white' },
    { label: 'REQUIREMENT', icon: FileText, color: 'text-slate-300' },
    { label: 'AI AGENT', icon: Bot, color: 'text-rose-400', highlight: true },
    { label: 'CODE', icon: Code, color: 'text-slate-300' },
    { label: 'TEST', icon: TestTube, color: 'text-slate-300' },
    { label: 'SECURITY', icon: ShieldCheck, color: 'text-rose-300', highlight: true },
    { label: 'CI/CD', icon: GitMerge, color: 'text-slate-300' },
    { label: 'DEPLOY', icon: Rocket, color: 'text-emerald-400' },
    { label: 'MONITORING', icon: Activity, color: 'text-sky-400' },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        16 · Architecture · The Big Picture
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
            End-To-End Enterprise Integration
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            AI INSIDE ENGINEERING
          </h2>
          <p className="mt-2 text-slate-400 text-sm lg:text-base">
            AI tidak menggantikan pilar engineering — AI terintegrasi menjadi akselerator di dalamnya.
          </p>
        </motion.div>

        {/* The Big Circular/Linear System Flow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 lg:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl relative"
        >
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 items-center justify-center">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={`p-3 rounded-xl flex flex-col items-center text-center transition-all ${
                    node.highlight
                      ? 'bg-rose-950/40 border border-rose-700/60 shadow-lg shadow-rose-950/30'
                      : 'bg-slate-950/60 border border-slate-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1.5 ${node.color}`} />
                  <span className="text-[10px] font-mono font-bold text-slate-200 uppercase tracking-tighter">
                    {node.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Feedback loop indicator */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 text-rose-400">
              <RotateCcw className="w-4 h-4 animate-spin-slow" />
              <span>Feedback Loop: Telemetry, Observability & Error Logging ➔ Human & AI</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">Continuous Improvement</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-center text-slate-300 text-sm font-light"
        >
          "AI bukan entitas terpisah di luar pagar IT — AI adalah co-pilot yang dikelilingi oleh guardrail pengujian & keamanan Bank."
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Arsitektur Holistik Software Engineering Modern</span>
        <span>Sistemik & Terukur</span>
      </div>
    </div>
  );
};
