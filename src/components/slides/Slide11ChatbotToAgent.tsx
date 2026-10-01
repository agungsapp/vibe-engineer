import React from 'react';
import { motion } from 'motion/react';
import { Bot, Copy, ClipboardCheck, ArrowRight, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';

export const Slide11ChatbotToAgent: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        11 · AI Agent Paradigm Shift
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
            Evolusi Interaksi AI
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            FROM CHATBOT TO AGENT
          </h2>
          <p className="mt-2 text-slate-400 text-sm lg:text-base">
            Bukan sekadar salin-tempel jawaban teks dari kotak percakapan.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Era 1: Chatbot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                Tradisional Chatbot (ChatGPT / Claude Web)
              </span>
              <span className="text-[11px] font-mono text-slate-500">Manual Copy-Paste Cycle</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-200">PROMPT</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-200">AI TEXT ANSWER</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3.5 py-2 rounded-xl bg-slate-800 text-amber-300 flex items-center gap-1.5">
                <Copy className="w-3 h-3" /> COPY
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3.5 py-2 rounded-xl bg-slate-800 text-amber-300 flex items-center gap-1.5">
                <ClipboardCheck className="w-3 h-3" /> PASTE TO IDE
              </span>
            </div>
          </motion.div>

          {/* Era 2: AI Agent Autonomous Loop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/30 via-slate-900 to-slate-900 border border-rose-900/50 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-mono font-bold text-rose-300 uppercase">
                  Modern AI Agent Workflow
                </span>
              </div>
              <span className="text-[11px] font-mono text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800/60">
                Context-Aware Execution Loop
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-semibold">DEVELOPER</span>
              <span className="text-rose-500">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-semibold">REQUIREMENT</span>
              <span className="text-rose-500">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-rose-700 text-white font-bold flex items-center gap-1 shadow-md">
                <Bot className="w-3 h-3" /> AI AGENT
              </span>
              <span className="text-rose-500">→</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-300">READ CONTEXT</span>
              <span className="text-slate-600">→</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-300">PLAN</span>
              <span className="text-slate-600">→</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-300">CODE</span>
              <span className="text-slate-600">→</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-300">TEST</span>
              <span className="text-rose-400">↺</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-200">FIX</span>
              <span className="text-emerald-500">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-700 text-emerald-300 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> VERIFY
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 font-sans flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>
                "AI Agent dapat membaca dan menggunakan context dari project yang <strong>diberikan akses kepadanya</strong>."
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Bukan copy-paste lagi: Agent langsung bekerja di lingkungan file project</span>
        <span>Arsitektur Agent</span>
      </div>
    </div>
  );
};
