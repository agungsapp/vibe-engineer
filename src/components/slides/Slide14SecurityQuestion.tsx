import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export const Slide14SecurityQuestion: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none bg-[#090b12]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        14 · Critical Security Question
      </motion.div>

      <div className="my-auto max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-950/60 border border-rose-800/80 text-rose-400 mb-6 shadow-xl shadow-rose-950/50"
        >
          <ShieldAlert className="w-8 h-8" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl lg:text-7xl font-black text-white tracking-wider mb-6"
        >
          WAIT.
        </motion.h2>

        <div className="space-y-2 text-slate-300 text-lg lg:text-xl font-light mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            "Kalau AI bisa <span className="text-white font-medium">membaca project</span>..."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            "...menjalankan <span className="text-white font-medium">tools</span>..."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            "...dan mengubah <span className="text-white font-medium">code</span>..."
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.0, type: 'spring', stiffness: 200 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/80 via-rose-900/40 to-rose-950/80 border border-rose-600/60 shadow-2xl"
        >
          <h3 className="text-3xl lg:text-5xl font-black text-rose-300 tracking-tight uppercase">
            BUKANKAH ITU BERBAHAYA?
          </h3>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-850 pt-4">
        <span>Insting Wajar IT & Information Security Perbankan</span>
        <span>Pertanyaan Kritis</span>
      </div>
    </div>
  );
};
