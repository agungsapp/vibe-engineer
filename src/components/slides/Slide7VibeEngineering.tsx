import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CheckCheck, ShieldCheck, Microscope, Layers } from 'lucide-react';

export const Slide7VibeEngineering: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        07 · Insight · Konsep Utama
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
            Evolusi Disiplin
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            VIBE ENGINEERING
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-light max-w-2xl mx-auto">
            "AI tetap digunakan untuk <strong className="text-white font-semibold">kecepatan</strong>. <br />
            Engineer tetap memastikan hasilnya <strong className="text-rose-400 font-semibold">benar dan aman</strong>."
          </p>
        </motion.div>

        {/* Process Diagram */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-5 py-2 rounded-xl bg-slate-800 text-slate-300 font-mono text-sm">
              AI GENERATION
            </span>
            <span className="text-slate-500">→</span>
            <span className="px-5 py-2 rounded-xl bg-slate-800 text-white font-mono text-sm font-semibold">
              RAW CODE
            </span>
          </div>

          <div className="flex justify-center mb-4 text-rose-400">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'REVIEW', desc: 'Arsitektur & Logic', icon: Microscope },
              { label: 'TEST', desc: 'Unit & Integration', icon: CheckCheck },
              { label: 'SECURITY', desc: 'Scan & Vulnerability', icon: ShieldCheck },
              { label: 'VERIFY', desc: 'Business Acceptance', icon: Layers },
            ].map((gate, i) => {
              const Icon = gate.icon;
              return (
                <motion.div
                  key={gate.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center shadow-md"
                >
                  <Icon className="w-5 h-5 text-rose-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white font-mono">{gate.label}</h4>
                  <p className="text-xs text-slate-400 mt-1">{gate.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Analogy Cards from FEKDI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80"
        >
          <div className="text-xs font-mono text-slate-400 mb-3 text-center uppercase tracking-wider">
            Analogi dari Pembicara FEKDI (Speaker Perspective)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs font-mono">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <div className="text-slate-400 font-bold">Coding Manual</div>
              <div className="text-[11px] text-slate-500 mb-1">(Sebelum ada AI)</div>
              <div className="text-slate-300 text-sm font-bold">"MS Paint"</div>
              <div className="text-slate-500 mt-1 text-[11px]">Serba manual, piksel demi piksel dari nol</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <div className="text-slate-400 font-bold">Vibe Coding</div>
              <div className="text-[11px] text-slate-500 mb-1">(Era Generative AI)</div>
              <div className="text-slate-300 text-sm font-bold">"MS Paint Pro"</div>
              <div className="text-slate-500 mt-1 text-[11px]">Cepat, instan, tapi presisi & guardrail belum teruji</div>
            </div>
            <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/60 shadow-lg shadow-rose-950/40">
              <div className="text-rose-400 font-bold">Vibe Engineering</div>
              <div className="text-[11px] text-rose-300/70 mb-1">(Agentic Software Engineering)</div>
              <div className="text-rose-200 text-sm font-bold">"Photoshop"</div>
              <div className="text-slate-300 mt-1 text-[11px]">Sistem layer lengkap, context, review & pipeline profesional</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Analogi pembicara FEKDI · Bukan definisi formal industri</span>
        <span>Kualitas & Ketepatan</span>
      </div>
    </div>
  );
};
