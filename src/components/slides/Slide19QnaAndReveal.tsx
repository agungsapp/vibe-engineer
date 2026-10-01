import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, Terminal, Mail, Building2, Play, RefreshCw, Cpu } from 'lucide-react';
import { ExplodedDeckView } from '../reveal/ExplodedDeckView';
import { sound } from '../../utils/audio';

export const Slide19QnaAndReveal: React.FC = () => {
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);

  const triggerReveal = () => {
    sound.playGlitchWhoosh();
    setIsGlitching(true);

    setTimeout(() => {
      setIsGlitching(false);
      setIsExploded(true);
    }, 700);
  };

  const handleBackToPresentation = () => {
    sound.playSlideClick();
    setIsExploded(false);
  };

  if (isExploded) {
    return <ExplodedDeckView onBackToPresentation={handleBackToPresentation} />;
  }

  return (
    <div className={`h-full flex flex-col justify-between p-12 lg:p-20 relative select-none overflow-hidden ${isGlitching ? 'filter invert contrast-200' : ''}`}>
      {/* Glitch overlay during transition */}
      {isGlitching && (
        <div className="absolute inset-0 bg-rose-600/20 mix-blend-screen z-50 pointer-events-none flex items-center justify-center">
          <div className="text-white font-mono text-3xl font-black tracking-widest animate-ping">
            DECONSTRUCTING POWERPOINT FACADE...
          </div>
        </div>
      )}

      {/* Slide category tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase flex items-center justify-between"
      >
        <span>19 · Tanya Jawab & Penutup</span>
        <span className="text-slate-600">Bank Eka IT Knowledge Sharing</span>
      </motion.div>

      {/* Main Q&A Content - Looks like an authentic, elegant Keynote Q&A slide */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 text-rose-500 mb-6 shadow-2xl"
        >
          <MessageSquare className="w-10 h-10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-6xl lg:text-8xl font-black text-white tracking-tight"
        >
          Q&A
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-2xl lg:text-3xl text-slate-300 font-light"
        >
          Let's talk.
        </motion.p>

        {/* Presenter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-md mx-auto shadow-xl"
        >
          <div className="font-bold text-white text-lg">Agung Saputra</div>
          <div className="text-xs text-rose-400 font-mono mt-0.5">Software Engineer · Bank Eka</div>
          <div className="text-xs text-slate-400 mt-2">
            Materi: FEKDI x IFSE 2026 (PIDI Digital Talent Expo)
          </div>
        </motion.div>

        {/* The Hidden Trigger Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10"
        >
          <button
            onClick={triggerReveal}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 text-white font-bold text-sm lg:text-base shadow-xl shadow-rose-950/60 hover:shadow-rose-600/30 transition-all hover:scale-105 active:scale-95 border border-rose-500/40"
          >
            <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>BUKA RAHASIA DI BALIK DECK INI</span>
            <span className="text-xs bg-black/30 px-2 py-0.5 rounded font-mono text-rose-200">
              The Big Reveal
            </span>
          </button>
          <div className="text-xs text-slate-500 font-mono mt-2">
            Klik tombol di atas untuk membuka arsitektur aplikasi sesungguhnya
          </div>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Selesai Presentasi Materi Utama (~10 Menit)</span>
        <span>Terima Kasih Rekan-Rekan IT Bank Eka</span>
      </div>
    </div>
  );
};
