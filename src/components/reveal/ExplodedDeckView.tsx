import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Terminal, Code2, Cpu, Eye, RotateCw, Monitor, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { LiveComponentTree } from './LiveComponentTree';
import { LivePipelineSimulator } from './LivePipelineSimulator';
import { LiveCodeInspector } from './LiveCodeInspector';
import { sound } from '../../utils/audio';

interface ExplodedDeckViewProps {
  onBackToPresentation: () => void;
}

export const ExplodedDeckView: React.FC<ExplodedDeckViewProps> = ({ onBackToPresentation }) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'tree' | 'code'>('pipeline');
  const [is3DView, setIs3DView] = useState<boolean>(true);
  const [tiltX, setTiltX] = useState<number>(20);
  const [tiltY, setTiltY] = useState<number>(-18);

  const pipelineStages = [
    { label: 'Requirement', note: 'Context & Scope' },
    { label: 'AI Agent', note: 'Code Generation' },
    { label: 'Code Review', note: 'Logic & Arch' },
    { label: 'Test Suite', note: 'Vitest Unit' },
    { label: 'Security Scan', note: 'SAST & Trivy' },
    { label: 'Verified App', note: 'React 19 Prod' },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#05080e] relative overflow-hidden select-none text-slate-100">
      {/* Background Dev Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e11d48 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Exploded Navigation Bar */}
      <div className="px-6 py-3 bg-[#090d16]/90 border-b border-slate-800 flex items-center justify-between z-20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-rose-950/80 border border-rose-800 text-rose-300 font-mono text-xs font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>REACT ENGINE DECONSTRUCTED</span>
          </div>

          <span className="text-xs text-slate-500 font-mono hidden md:inline">
            Bank Eka IT Knowledge Sharing Session · Agung Saputra
          </span>
        </div>

        {/* Tab Controls & 3D Toggle */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => {
                setActiveTab('pipeline');
                sound.playSlideClick();
              }}
              className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'pipeline' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>DevSecOps Simulator</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('tree');
                sound.playSlideClick();
              }}
              className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'tree' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Virtual DOM</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('code');
                sound.playSlideClick();
              }}
              className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'code' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </button>
          </div>

          <button
            onClick={() => {
              setIs3DView(!is3DView);
              sound.playSlideClick();
            }}
            className={`px-3 py-1.5 rounded-lg border font-mono transition-colors flex items-center gap-1.5 ${
              is3DView
                ? 'bg-rose-950/60 border-rose-700 text-rose-300 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{is3DView ? '3D Isometric: ON' : 'Flat View'}</span>
          </button>

          <button
            onClick={onBackToPresentation}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Kembali ke Slide</span>
          </button>
        </div>
      </div>

      {/* Main Big Reveal Content Area */}
      <div className="flex-1 p-6 flex flex-col justify-between overflow-hidden relative z-10">
        {/* Big Reveal Banner Statement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 shrink-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" /> The Reveal
          </div>
          <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-white uppercase">
            THIS IS NOT A POWERPOINT.
          </h1>
          <div className="text-xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-200 to-white mt-1">
            THIS IS A REACT WEB APP.
          </div>
          <p className="text-xs lg:text-sm text-slate-400 font-mono mt-1">
            React 19 + AI-assisted development + Engineering workflow = Real Working Software
          </p>
        </motion.div>

        {/* Center Interactive Split View */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 items-center">
          {/* Left: 3D Exploded Layer Presentation Mockup */}
          <div className="lg:col-span-6 h-full flex flex-col items-center justify-center p-4">
            <div
              className="relative w-full aspect-video transition-transform duration-500"
              style={
                is3DView
                  ? {
                      perspective: '1200px',
                      transformStyle: 'preserve-3d',
                      transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.85)`,
                    }
                  : { transform: 'scale(0.92)' }
              }
            >
              {/* Layer 1: Background Grid & Hardware Plate */}
              <div 
                className="absolute inset-0 rounded-2xl bg-slate-950/80 border-2 border-rose-900/50 shadow-2xl flex flex-col p-6 pointer-events-none"
                style={is3DView ? { transform: 'translateZ(-80px)' } : {}}
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>LAYER 01 · SYSTEM BUS & INFRASTRUCTURE</span>
                  <span>VITE 8.3 & TSX</span>
                </div>
                <div className="my-auto text-center text-xs font-mono text-slate-600">
                  Runtime: Node.js 22 · TypeScript · Tailwind CSS v4 · Web Audio Synth
                </div>
              </div>

              {/* Layer 2: Component Virtual DOM Wireframe */}
              <div 
                className="absolute inset-0 rounded-2xl bg-rose-950/20 border border-rose-600/40 pointer-events-none flex flex-col p-6"
                style={is3DView ? { transform: 'translateZ(-30px)' } : {}}
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-rose-400 font-bold">
                  <span>LAYER 02 · REACT VIRTUAL DOM TREE</span>
                  <span>&lt;SlideRenderer /&gt;</span>
                </div>
                <div className="mt-2 space-y-1 font-mono text-[10px] text-rose-300/80">
                  <div>&lt;PresentationShell theme="bank-eka"&gt;</div>
                  <div className="pl-4">&lt;Slide19QnaAndReveal state="exploded"&gt;</div>
                  <div className="pl-8">&lt;DevSecOpsPipeline verified={true} /&gt;</div>
                  <div className="pl-4">&lt;/Slide19QnaAndReveal&gt;</div>
                  <div>&lt;/PresentationShell&gt;</div>
                </div>
              </div>

              {/* Layer 3: Presentation UI Surface (The PowerPoint facade) */}
              <div 
                className="absolute inset-0 rounded-2xl bg-[#0b0f17] border-2 border-slate-700 shadow-2xl flex flex-col justify-between p-6 overflow-hidden ring-4 ring-rose-500/20"
                style={is3DView ? { transform: 'translateZ(40px)' } : {}}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px]">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                    <span>Bank Eka · Presentation Mode</span>
                  </div>
                  <span className="text-slate-500 font-mono">19 / 19</span>
                </div>

                <div className="my-auto text-center">
                  <div className="text-3xl font-black text-white">Q&A</div>
                  <p className="text-xs text-rose-400 font-mono mt-1">Let's talk · Agung Saputra</p>
                  <p className="text-[11px] text-slate-400 mt-3 max-w-xs mx-auto">
                    Seluruh 19 slide sebelumnya dirender secara dinamis menggunakan komponen React & state machine!
                  </p>
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 font-mono border-t border-slate-800 pt-2">
                  <span>FEKDI x IFSE 2026</span>
                  <span>React Keynote App</span>
                </div>
              </div>
            </div>

            {/* 3D Camera Controls */}
            {is3DView && (
              <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400 bg-slate-900/80 px-4 py-1.5 rounded-xl border border-slate-800">
                <span className="text-[11px]">Tilt X:</span>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={tiltX}
                  onChange={(e) => setTiltX(Number(e.target.value))}
                  className="w-20 accent-rose-500"
                />
                <span className="text-[11px]">Tilt Y:</span>
                <input
                  type="range"
                  min="-45"
                  max="45"
                  value={tiltY}
                  onChange={(e) => setTiltY(Number(e.target.value))}
                  className="w-20 accent-rose-500"
                />
              </div>
            )}
          </div>

          {/* Right: Live Interactive Workstation */}
          <div className="lg:col-span-6 h-full flex flex-col min-h-[380px]">
            {activeTab === 'pipeline' && <LivePipelineSimulator />}
            {activeTab === 'tree' && <LiveComponentTree />}
            {activeTab === 'code' && <LiveCodeInspector />}
          </div>
        </div>

        {/* Bottom Miniature Visual Pipeline */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 shrink-0">
          <div className="text-[11px] font-mono text-slate-400 mb-2 text-center uppercase tracking-wider">
            Alur Nyata Pembuatan Aplikasi Ini: AI-Assisted Engineering Workflow
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            {pipelineStages.map((stage, idx) => (
              <React.Fragment key={stage.label}>
                <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white font-bold">{stage.label}</span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">({stage.note})</span>
                </div>
                {idx < pipelineStages.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
