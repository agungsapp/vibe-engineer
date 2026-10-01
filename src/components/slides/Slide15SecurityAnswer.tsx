import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck, Lock } from 'lucide-react';

export const Slide15SecurityAnswer: React.FC = () => {
  const permissions = [
    { label: 'Read Project Files', allowed: true, note: 'Hanya workspace repo terkait' },
    { label: 'Run Local Tests', allowed: true, note: 'Dalam sandbox container' },
    { label: 'Modify Project Code', allowed: true, note: 'Tunduk pada git review / PR' },
    { label: 'Access Production Secrets', allowed: false, note: 'Strictly blocked / no credentials' },
    { label: 'Deploy Directly to Production', allowed: false, note: 'Harus lewat CI/CD & Approval' },
    { label: 'Unrestricted System Access', allowed: false, note: 'Isolated environment' },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        15 · Security Boundary · Least Privilege
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-3">
            <Lock className="w-3.5 h-3.5" /> Prinsip Least Privilege
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            AI ≠ UNLIMITED ACCESS
          </h2>
          <p className="mt-2 text-base text-rose-400 font-semibold font-mono">
            "AI hanya boleh mendapatkan akses yang memang dibutuhkan."
          </p>
        </motion.div>

        {/* Access Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {permissions.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
              className={`p-3.5 rounded-xl border flex items-center justify-between ${
                item.allowed
                  ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-200'
                  : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                    item.allowed
                      ? 'bg-emerald-600/30 text-emerald-300'
                      : 'bg-rose-600/30 text-rose-400'
                  }`}
                >
                  {item.allowed ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">{item.label}</div>
                  <div className="text-[11px] text-slate-400">{item.note}</div>
                </div>
              </div>

              <span
                className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  item.allowed ? 'bg-emerald-900/40 text-emerald-300' : 'bg-rose-900/40 text-rose-300'
                }`}
              >
                {item.allowed ? 'ALLOWED ✓' : 'BLOCKED ✕'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Technical Accuracy Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed text-center"
        >
          <span className="text-rose-400 font-bold">Poin Ketepatan Teknis: </span>
          MCP bukan jaminan keamanan instan. Security tetap bergantung pada <span className="text-white font-semibold">permission, authentication, authorization, isolation, secrets management, policy</span>, dan konfigurasi environment perbankan kita.
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Definisi Batas Akses & Keamanan Sistem</span>
        <span>Enterprise DevSecOps</span>
      </div>
    </div>
  );
};
