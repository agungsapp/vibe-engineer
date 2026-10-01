import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Bot, Code, Users2 } from 'lucide-react';

export const Slide4ThenAI: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        04 · Observation · The Inflection Point
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" /> Akselerasi Drastis
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            THEN AI HAPPENED.
          </h2>
          <p className="mt-3 text-xl font-medium text-rose-400">
            Development became much faster.
          </p>
        </motion.div>

        {/* Pipeline with AI in the middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 lg:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-center gap-3 lg:gap-4 shadow-xl"
        >
          <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm">
            PLAN
          </span>
          <ArrowRight className="w-4 h-4 text-slate-500" />

          {/* Glowing AI node */}
          <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold text-sm shadow-lg shadow-rose-900/40 flex items-center gap-2 ring-2 ring-rose-400/40">
            <Bot className="w-4 h-4" />
            AI GENERATION
          </div>
          <ArrowRight className="w-4 h-4 text-rose-500" />

          <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm">
            CODE
          </span>
          <ArrowRight className="w-4 h-4 text-slate-500" />

          <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm">
            TEST
          </span>
          <ArrowRight className="w-4 h-4 text-slate-500" />

          <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm">
            DEPLOY
          </span>
        </motion.div>

        {/* 2 Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800"
          >
            <div className="text-slate-400 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono uppercase text-slate-400">Natural Language Interface</span>
            </div>
            <p className="text-slate-200 text-base leading-relaxed">
              Sekarang kita bisa memberikan requirement dalam <strong>bahasa natural</strong> dan AI dapat membantu menghasilkan code secara instan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800"
          >
            <div className="text-slate-400 mb-2 flex items-center gap-2">
              <Users2 className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono uppercase text-slate-400">Demokratisasi Pembuatan Software</span>
            </div>
            <p className="text-slate-200 text-base leading-relaxed">
              Bahkan orang yang sebelumnya <strong>tidak terbiasa coding</strong> pun dapat menghasilkan code atau prototype fungsional dengan bantuan AI.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Fakta: Barrier to produce code turun drastis</span>
        <span>Observasi FEKDI 2026</span>
      </div>
    </div>
  );
};
