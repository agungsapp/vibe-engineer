import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Code2, TestTube2, Rocket } from 'lucide-react';

export const Slide3BeforeAI: React.FC = () => {
  const steps = [
    { label: 'PLAN', icon: FileText, desc: 'Requirement & Spec', detail: 'Analisis manual & BRD' },
    { label: 'CODE', icon: Code2, desc: 'Manual Coding', detail: 'Ketik baris demi baris' },
    { label: 'TEST', icon: TestTube2, desc: 'Quality Check', detail: 'Manual / Unit Test' },
    { label: 'DEPLOY', icon: Rocket, desc: 'Release to Prod', detail: 'Deployment scheduled' },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        03 · Observation · Baseline
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            BEFORE AI
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto font-light">
            Kurang lebih seperti inilah workflow software development yang selama ini kita kenal.
          </p>
        </motion.div>

        {/* Sequential Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-full p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center hover:border-slate-700 transition-colors shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 mb-4 border border-slate-700/60">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 mb-1">0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-white tracking-wide">{step.label}</h3>
                  <p className="text-sm text-slate-300 mt-2 font-medium">{step.desc}</p>
                  <span className="text-xs text-slate-500 mt-1">{step.detail}</span>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-sm text-slate-400 font-mono"
        >
          Kecepatan delivery berbanding lurus dengan kapasitas ketik & eksplorasi manual developer.
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Karakteristik: Linier, manual, handoff antar tahap berulang</span>
        <span>Tradisi Rekayasa Perangkat Lunak</span>
      </div>
    </div>
  );
};
