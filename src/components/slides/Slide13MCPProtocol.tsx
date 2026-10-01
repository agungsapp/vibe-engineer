import React from 'react';
import { motion } from 'motion/react';
import { Network, FolderTree, GitBranch, Database, Wrench, Bot } from 'lucide-react';

export const Slide13MCPProtocol: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 lg:p-20 relative select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        13 · Protocol Layer · Model Context Protocol
      </motion.div>

      <div className="my-auto max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
            Standar Integrasi Baru
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase">
            HOW DOES AI TALK TO OUR TOOLS?
          </h2>
          <p className="mt-2 text-slate-400 text-sm lg:text-base">
            Model Context Protocol (MCP) sebagai jembatan terstruktur.
          </p>
        </motion.div>

        {/* MCP Tree Architecture */}
        <div className="max-w-2xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* AI Top Node */}
            <div className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold font-mono text-sm flex items-center gap-2 shadow-lg">
              <Bot className="w-4 h-4 text-rose-400" />
              AI FOUNDATION MODEL
            </div>

            {/* Vertical connector line */}
            <div className="w-0.5 h-8 bg-rose-500/60 my-1"></div>

            {/* MCP Center Bridge */}
            <div className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-900/80 to-rose-950 border-2 border-rose-500 text-white font-extrabold font-mono text-base flex items-center gap-2.5 shadow-xl shadow-rose-950/60">
              <Network className="w-5 h-5 text-rose-400" />
              MCP (Model Context Protocol)
            </div>

            {/* Vertical connector line */}
            <div className="w-0.5 h-8 bg-rose-500/60 my-1"></div>

            {/* Sub-tools branches */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {[
                { name: 'Files / Docs', icon: FolderTree, desc: 'Project Workspace' },
                { name: 'Git Repositories', icon: GitBranch, desc: 'Version Control' },
                { name: 'Databases', icon: Database, desc: 'Read-only Schemas' },
                { name: 'Development Tools', icon: Wrench, desc: 'Linters & Compilers' },
              ].map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center hover:border-slate-700 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-rose-400 mx-auto mb-2" />
                    <div className="text-xs font-bold text-slate-200 font-mono">{tool.name}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{tool.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Explanation Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center max-w-3xl mx-auto"
        >
          <p className="text-slate-300 text-sm leading-relaxed">
            "<strong>MCP</strong> adalah protokol/standar yang memungkinkan model AI berinteraksi dengan tools dan sumber context melalui <strong>interface yang terstruktur</strong>."
          </p>
        </motion.div>
      </div>

      <div className="text-xs text-slate-500 font-mono flex justify-between items-center border-t border-slate-800/50 pt-4">
        <span>Arsitektur Antarmuka: Client-Server MCP Standard</span>
        <span>Model Context Protocol</span>
      </div>
    </div>
  );
};
