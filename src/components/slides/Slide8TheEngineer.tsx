import React from 'react';
import { motion } from 'motion/react';
import { Bot, UserCheck, AlertTriangle } from 'lucide-react';

export const Slide8TheEngineer: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        08 · Insight · Pembagian Peran
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE ENGINEER
          </h2>
          <p className="mt-2 text-rose-400 font-semibold text-lg">
            "AI bisa coding. AI belum menggantikan engineering judgment."
          </p>
        </motion.div>

        {/* 2 Sides Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* AI Agent Box */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-4 text-slate-300">
              <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">AI Agent</h3>
                <span className="text-xs text-slate-500 font-mono">Execution Engine</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-slate-600">▪</span> Generate boilerplate & functions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">▪</span> Modify files berdasarkan instruksi
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">▪</span> Run automated test scripts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">▪</span> Fix syntax & type errors
              </li>
            </ul>
          </motion.div>

          {/* Human Engineer Box */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/20 via-slate-900 to-slate-950 border border-rose-900/40 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4 text-rose-300">
              <div className="w-9 h-9 rounded-lg bg-rose-900/40 flex items-center justify-center text-rose-400 border border-rose-800/50">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">The Engineer (Human)</h3>
                <span className="text-xs text-rose-400 font-mono">Direction & Judgment</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-200 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✔</span> Define core requirement & context
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✔</span> Enterprise System Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✔</span> Banking Business Logic & edge-cases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✔</span> Security validation & final decision
              </li>
            </ul>
          </motion.div>
        </div>

        {/* The Golden Junior Developer Analogy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="p-6 rounded-2xl bg-slate-900/90 border-l-4 border-l-rose-500 border border-slate-800 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1">
                Analogi Kunci FEKDI
              </div>
              <p className="text-base lg:text-lg text-white font-medium">
                "AI Agent seperti <span className="text-rose-400 font-bold">junior developer yang sangat cepat</span>."
              </p>
              <p className="text-sm lg:text-base text-slate-300 mt-2 italic">
                Dan junior yang sangat cepat tetap membutuhkan senior yang tahu kapan pekerjaannya benar — dan kapan dia mulai <span className="text-rose-300 font-semibold underline decoration-rose-500 underline-offset-4">ngelantur</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Prinsip: Supercharged Speed + Grounded Judgment</span>
        <span>Peran IT Bank Eka</span>
      </div>
    </div>
  );
};
