import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Slide18SetupReveal: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        18 · Penutup Sesi Materi
      </motion.div>

      <div className="my-auto max-w-3xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl lg:text-3xl text-slate-400 font-light mb-4"
        >
          Dan sebenarnya...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="my-8"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ada satu hal yang <br />
            <span className="text-rose-400">belum saya tunjukkan.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-lg lg:text-xl text-slate-300 font-light max-w-xl mx-auto leading-relaxed"
        >
          Saya ingin menunjukkan bagaimana materi ini saya praktikkan sendiri secara nyata.
        </motion.p>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Menuju Sesi Tanya Jawab</span>
        <span>Transisi Kunci</span>
      </div>
    </div>
  );
};
