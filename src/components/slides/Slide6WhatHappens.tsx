import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Slide6WhatHappens: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none bg-[#070a0f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-600 uppercase"
      >
        06 · The Pivot Question
      </motion.div>

      <div className="my-auto max-w-4xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base lg:text-lg font-mono text-slate-400 mb-4"
        >
          Kalau AI sekarang bisa membuat code...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase"
        >
          THEN WHAT HAPPENS <br />
          <span className="text-slate-400">TO US?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 text-xl text-slate-400 font-light"
        >
          Apakah peran orang IT masih ada?
        </motion.p>

        {/* The Bold Resolute Answer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
          className="mt-12 inline-flex flex-col items-center"
        >
          <div className="px-8 py-3 rounded-2xl bg-white text-slate-950 font-black text-4xl lg:text-5xl tracking-widest flex items-center gap-3 shadow-2xl shadow-white/10">
            <CheckCircle2 className="w-8 h-8 text-rose-600" />
            YES.
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-6 text-xl lg:text-2xl font-semibold text-rose-400 max-w-xl"
          >
            Justru karena AI semakin cepat.
          </motion.p>
        </motion.div>
      </div>

      <div className="text-xs text-slate-600 font-mono flex justify-between items-center border-t border-slate-900 pt-4">
        <span>Fokus: Peran software engineer tidak hilang, melainkan berevolusi</span>
        <span>Human in the Loop</span>
      </div>
    </div>
  );
};
