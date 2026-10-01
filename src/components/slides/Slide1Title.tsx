import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Building2, MapPin, Calendar } from 'lucide-react';

export const Slide1Title: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Top corporate bar */}
      <motion.div 
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between border-b border-slate-800/80 pb-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-rose-700 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-rose-900/30">
            E
          </div>
          <div>
            <span className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Bank Eka</span>
            <span className="text-xs text-slate-500 block">Divisi Teknologi Informasi</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            FEKDI x IFSE 2026 · Jakarta
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            Monthly IT Sharing
          </span>
        </div>
      </motion.div>

      {/* Center main title */}
      <div className="my-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-600"></span>
          <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase font-mono">
            Executive Summary & Tech Debrief
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          FROM CODING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-rose-400">
            TO ENGINEERING
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 text-xl lg:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed"
        >
          Catatan yang saya bawa pulang dari <span className="text-white font-medium">FEKDI x IFSE 2026</span> (PIDI Digital Talent Expo).
        </motion.p>
      </div>

      {/* Bottom presenter footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-between border-t border-slate-800/80 pt-6 text-sm text-slate-400"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-semibold text-slate-200">
            AS
          </div>
          <div>
            <div className="text-white font-medium text-base">Agung Saputra</div>
            <div className="text-xs text-slate-500">Software Engineer · Bank Eka</div>
          </div>
        </div>

        <div className="text-right text-xs text-slate-500 font-mono">
          <div>2 Focus Themes: AI Adoption & DevSecOps</div>
          <div className="text-slate-600">Durasi Presentasi: ~10 Menit</div>
        </div>
      </motion.div>
    </div>
  );
};
