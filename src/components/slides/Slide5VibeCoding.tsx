import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, MessageSquareText, Cpu, FileCode2, ShieldAlert, X } from 'lucide-react';

export const Slide5VibeCoding: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<string>('/images/vibe-coding-case.jpeg');
  const fallbackUrl = "https://i.postimg.cc/wvGNBj1n/IMG-20260925-070649-picsay.jpg";

  const handleImageError = () => {
    if (currentImg !== fallbackUrl) {
      setCurrentImg(fallbackUrl);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-8 lg:p-14 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase flex items-center justify-between"
      >
        <span>05 · Fenomena Global Industri</span>
        <span className="text-rose-400 font-mono">Case Study</span>
      </motion.div>

      <div className="my-auto max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-1 block">
            Fenomena Global Industri
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            VIBE CODING
          </h2>
          <p className="mt-1.5 text-slate-400 text-sm max-w-lg mx-auto">
            Ketika ide diubah menjadi kode secepat kita mengetik prompt.
          </p>
        </motion.div>

        {/* 2-Column Balanced Layout: Left = Logic & Inequality, Right = 100% Clean Square Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column (7 cols): Rapid Flow + Inequality Cards */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-4">
            {/* The Rapid Flow */}
            <div className="flex items-center justify-start flex-wrap gap-2">
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
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5 shadow-sm"
                    >
                      <Icon className="w-3.5 h-3.5 text-rose-400" />
                      <span className="text-xs font-bold text-white font-mono">{item.label}</span>
                    </motion.div>
                    {idx < 3 && (
                      <span className="text-slate-600 font-bold text-sm">→</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* The Dramatic Inequality Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-5 lg:p-6 rounded-2xl bg-gradient-to-b from-rose-950/30 to-slate-950 border border-rose-900/40 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3 text-center font-mono">
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-lg lg:text-xl font-black text-white">CODE TERBUAT</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Output ter-generate</span>
                </div>

                <span className="text-2xl lg:text-3xl font-extrabold text-rose-500">≠</span>

                <div className="flex-1 flex flex-col items-center">
                  <span className="text-lg lg:text-xl font-black text-amber-300">CODE BENAR</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Sesuai logic bisnis</span>
                </div>

                <span className="text-2xl lg:text-3xl font-extrabold text-rose-500">≠</span>

                <div className="flex-1 flex flex-col items-center">
                  <span className="text-lg lg:text-xl font-black text-rose-400">CODE SECURE</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Tahan uji keamanan bank</span>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-slate-400 font-sans border-t border-slate-800/80 pt-3 flex items-center justify-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Kecepatan membuat kode tinggi, tapi jaminan kebenaran & keamanan tidak otomatis tercipta.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): The 100% Unobscured Square Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:col-span-5 flex flex-col items-center justify-center"
          >
            {/* Clean square container - 100% free of overlays */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative w-full max-w-[290px] lg:max-w-[340px] aspect-square rounded-xl overflow-hidden border border-slate-700/80 hover:border-rose-500 shadow-2xl bg-black cursor-pointer transition-all hover:scale-[1.01]"
              title="Klik untuk memperbesar gambar"
            >
              <img
                src={currentImg}
                onError={handleImageError}
                alt="Contoh Kasus Vibe Coding"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* External text caption placed strictly BELOW the image frame so nothing is blocked */}
            <div className="mt-2 text-center">
              <span className="text-[11px] text-slate-400 font-mono block">
                [Contoh Nyata: AI mulai ngelantur tanpa guardrail]
              </span>
              <span className="text-[9px] text-slate-500 font-mono">
                (Klik gambar untuk melihat resolusi penuh)
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-3">
        <span>Catatan: Vibe Coding tanpa guardrail berisiko halusinasi logic perbankan</span>
        <span>Konteks Perbankan Bank Eka</span>
      </div>

      {/* Zoom Modal if user wants to inspect the image in high resolution - completely unobstructed */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-3xl w-full flex flex-col items-center">
              {/* Close Button top-right outside image */}
              <button
                onClick={() => setIsZoomed(false)}
                className="self-end mb-2 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-rose-600 transition-colors flex items-center gap-1 text-xs font-mono"
              >
                <X className="w-4 h-4" />
                <span>Tutup Preview (ESC)</span>
              </button>

              {/* Clean Image View with all 4 corners visible */}
              <div className="w-full aspect-square max-h-[80vh] bg-black rounded-lg border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src={currentImg}
                  onError={handleImageError}
                  alt="Contoh Kasus Vibe Coding (Full Resolution)"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
