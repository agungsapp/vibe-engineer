import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export const Slide9ShiftLeft: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        09 · DevSecOps Connection · Security Velocity
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-4">
            <Shield className="w-3.5 h-3.5" /> DevSecOps Theme
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            WHEN AI GETS FASTER, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-200 to-white">
              SECURITY HAS TO MOVE WITH IT.
            </span>
          </h2>
        </motion.div>

        {/* Shift Left Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Shift Left Security Model
            </span>
            <span className="text-xs font-mono text-slate-500">Continuous Verification</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 py-4">
            <div className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs lg:text-sm font-semibold">
              PLAN
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />

            <div className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs lg:text-sm font-semibold">
              CODE
            </div>
            <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />

            {/* In-line Early Security Check */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="px-4 py-2.5 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 font-mono text-xs lg:text-sm font-bold shadow-lg shadow-rose-950/50 flex items-center gap-1.5"
            >
              <Shield className="w-4 h-4 text-rose-400" />
              SECURITY CHECK
            </motion.div>
            <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />

            <div className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs lg:text-sm font-semibold">
              TEST
            </div>
            <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />

            {/* Pre-deploy Security Check */}
            <div className="px-4 py-2.5 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 font-mono text-xs lg:text-sm font-bold flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-rose-400" />
              SECURITY CHECK
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />

            <div className="px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 font-mono text-xs lg:text-sm font-semibold">
              DEPLOY
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
            <p className="text-slate-300 text-sm lg:text-base font-light">
              "Security tidak hanya diperiksa setelah software selesai di ujung akhir. <br />
              <strong className="text-white font-medium">Security dibawa lebih awal (Shift Left)</strong> ke setiap iterasi development."
            </p>
          </div>
        </motion.div>

        {/* DevSecOps Principle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs lg:text-sm text-slate-400"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>
            Dengan AI yang melipatgandakan laju perubahan kode, pengujian manual semata akan menjadi bottleneck yang rapuh.
          </span>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Prinsip: Shift Left Security</span>
        <span>Materi Kelas DevSecOps</span>
      </div>
    </div>
  );
};
