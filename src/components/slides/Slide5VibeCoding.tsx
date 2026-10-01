import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Lightbulb, MessageSquareText, Cpu, FileCode2, ShieldAlert } from 'lucide-react';

export const Slide5VibeCoding: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        05 · Connection · Fenomena Baru
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        {/* Huge Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
            Fenomena Global Industri
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight">
            VIBE CODING
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-lg mx-auto">
            Ketika ide diubah menjadi kode secepat kita mengetik prompt.
          </p>
        </motion.div>

        {/* The Rapid Flow */}
        <div className="flex items-center justify-center gap-2 lg:gap-4 mb-12">
          {[
            { label: 'IDEA', icon: Lightbulb },
            { label: 'PROMPT', icon: MessageSquareText },
            { label: 'AI MODEL', icon: Cpu },
            { label: 'CODE', icon: FileCode2 },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.label}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-850 flex items-center gap-2 shadow-md"
                >
                  <Icon className="w-4 h-4 text-rose-400" />
                  <span className="text-xs lg:text-sm font-bold text-white font-mono">{item.label}</span>
                </motion.div>
                {idx < 3 && (
                  <span className="text-slate-600 font-bold text-lg">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* The Dramatic Inequality Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-rose-950/30 to-slate-950 border border-rose-900/40 relative overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 text-center font-mono">
            <div className="flex flex-col items-center">
              <span className="text-2xl lg:text-3xl font-black text-white">CODE TERBUAT</span>
              <span className="text-xs text-slate-400 mt-1">Output berhasil digenerate</span>
            </div>

            <span className="text-4xl lg:text-5xl font-extrabold text-rose-500">≠</span>

            <div className="flex flex-col items-center">
              <span className="text-2xl lg:text-3xl font-black text-amber-300">CODE BENAR</span>
              <span className="text-xs text-slate-400 mt-1">Sesuai logic & edge-case</span>
            </div>

            <span className="text-4xl lg:text-5xl font-extrabold text-rose-500">≠</span>

            <div className="flex flex-col items-center">
              <span className="text-2xl lg:text-3xl font-black text-rose-400">CODE SECURE</span>
              <span className="text-xs text-slate-400 mt-1">Tahan uji keamanan bank</span>
            </div>
          </div>

          <div className="mt-8 text-center text-xs lg:text-sm text-slate-400 font-sans border-t border-slate-800/80 pt-4 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Kecepatan membuat kode tinggi, tapi jaminan kebenaran & keamanan tidak otomatis tercipta.</span>
          </div>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Catatan Penting: Vibe Coding bukan buruk, tapi belum tentu production-ready</span>
        <span>Konteks Perbankan</span>
      </div>
    </div>
  );
};
