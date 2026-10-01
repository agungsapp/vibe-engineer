import React from 'react';
import { motion } from 'motion/react';
import { Compass, Zap } from 'lucide-react';

export const Slide17ImpactSummary: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        17 · Impact · Core Thesis
      </motion.div>

      <div className="my-auto max-w-4xl mx-auto w-full text-center">
        {/* Statement 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <Zap className="w-6 h-6 text-amber-400" />
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            AI MAKES US FASTER.
          </h2>
        </motion.div>

        {/* Statement 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <Compass className="w-6 h-6 text-rose-500" />
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-200 to-white tracking-tight">
            ENGINEERING KEEPS US RIGHT.
          </h2>
        </motion.div>

        {/* Core Thesis Paragraph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 shadow-2xl max-w-2xl mx-auto"
        >
          <p className="text-lg lg:text-2xl text-slate-200 font-light leading-relaxed">
            "Semakin cepat kita menghasilkan software, semakin penting kita memastikan software tersebut <strong className="text-white font-semibold">benar</strong>, <strong className="text-rose-400 font-semibold">aman</strong>, dan <strong className="text-white font-semibold">dapat dipertanggungjawabkan</strong>."
          </p>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Tesis Utama Sharing Session Bank Eka</span>
        <span>Kesimpulan Kunci</span>
      </div>
    </div>
  );
};
