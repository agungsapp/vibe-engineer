import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Clock, BookOpen } from 'lucide-react';

export const Slide2Stats: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      {/* Slide category tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        02 · Context & Background
      </motion.div>

      {/* 3 Key Stats */}
      <div className="max-w-5xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="text-rose-500 mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tight font-mono">
              2 HARI
            </div>
            <div className="text-sm text-slate-400 mt-2 font-medium">
              Intensive Learning di Jakarta
            </div>
            <div className="text-xs text-slate-500 mt-1">
              FEKDI x IFSE 2026
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="text-rose-500 mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tight font-mono">
              8 KELAS
            </div>
            <div className="text-sm text-slate-400 mt-2 font-medium">
              AI, Security & Enterprise Architecture
            </div>
            <div className="text-xs text-slate-500 mt-1">
              2 tema utama yang kita angkat hari ini
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-2xl bg-rose-950/20 border border-rose-900/40 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="text-rose-400 mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="text-5xl lg:text-6xl font-black text-rose-300 tracking-tight font-mono">
              1 TANYA
            </div>
            <div className="text-sm text-rose-200/90 mt-2 font-medium">
              Refleksi Praktis untuk Tim Kita
            </div>
            <div className="text-xs text-rose-300/60 mt-1">
              Dari kacamata Software Engineer
            </div>
          </motion.div>
        </div>

        {/* The Fundamental Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800/80 shadow-2xl"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
            Pertanyaan Reflektif
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            "Kalau AI sekarang bisa coding, <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-200 to-white">
              apa yang berubah dari pekerjaan kita sebagai IT?
            </span>"
          </h2>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Slot: 10 Menit Sharing · 6 Peserta IT</span>
        <span>Perspektif: Software Engineer</span>
      </div>
    </div>
  );
};
