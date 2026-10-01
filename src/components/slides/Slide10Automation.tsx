import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, KeyRound, Bug, FileCode, CheckCircle } from 'lucide-react';

export const Slide10Automation: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        10 · Automation · CI/CD Security Gates
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
            DevSecOps Pipeline
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            WE CAN'T CHECK EVERYTHING MANUALLY.
          </h2>
          <p className="mt-2 text-slate-400 text-sm lg:text-base">
            Otomatisasi pengamanan mutlak diperlukan seiring peningkatan volume kode dari AI.
          </p>
        </motion.div>

        {/* Pipeline Stream */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8 text-xs font-mono overflow-x-auto py-2"
        >
          {['AI', 'CODE', 'GIT', 'SECURITY CHECKS', 'TEST', 'CI/CD', 'DEPLOY'].map((stage, idx) => (
            <React.Fragment key={stage}>
              <span className={`px-3 py-1.5 rounded-lg border ${stage === 'SECURITY CHECKS' ? 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                {stage}
              </span>
              {idx < 6 && <span className="text-slate-600">→</span>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Inside Security Checks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800"
          >
            <div className="flex items-center gap-2 text-rose-400 mb-3">
              <KeyRound className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">Secret Detection</h3>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Mendeteksi kredensial yang tidak sengaja tertulis di source code.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-rose-900/40 text-[11px] font-mono text-rose-300">
              Contoh bahaya: <br />
              <span className="text-slate-400 line-through">API_KEY="sk_live_bankeka..."</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800"
          >
            <div className="flex items-center gap-2 text-rose-400 mb-3">
              <FileCode className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">SAST (Static Analysis)</h3>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Pemindaian pola kode untuk menemukan potensi celah logika & injeksi.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
              Contoh: SQL injection vulnerability, insecure deserialization
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800"
          >
            <div className="flex items-center gap-2 text-rose-400 mb-3">
              <Bug className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">Dependency Scan (Trivy)</h3>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Memeriksa CVE pada library & package third-party yang digunakan aplikasi.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
              <span>Scan via Trivy</span>
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Contoh Tooling: Trivy, Semgrep, Gitleaks (bukan tutorial tools)</span>
        <span>Otomasi Keamanan</span>
      </div>
    </div>
  );
};
