import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ChevronRight, ChevronDown, Code, Box, CheckCircle } from 'lucide-react';

interface ComponentNode {
  name: string;
  type: string;
  props: Record<string, string>;
  children?: ComponentNode[];
}

const VIRTUAL_DOM: ComponentNode = {
  name: 'PresentationApp',
  type: 'React.FC',
  props: { theme: 'bank-eka-dark', mode: 'interactive-keynote' },
  children: [
    {
      name: 'PresentationShell',
      type: 'ShellLayout',
      props: { aspectRatio: '16:9', keyboardShortcuts: 'enabled', soundEngine: 'WebAudio' },
      children: [
        {
          name: 'SlideRenderer',
          type: 'SwitchDispatcher',
          props: { activeSlide: '19', totalSlides: '19' },
          children: [
            {
              name: 'Slide19QnaAndReveal',
              type: 'KeynoteSlide',
              props: { presenter: 'Agung Saputra', status: 'deck_exploded' },
              children: [
                { name: 'Motion.div (Viewport)', type: 'MotionContainer', props: { layoutId: 'deck-frame', perspective: '1200px' } },
                { name: 'ShiftLeftPipelineSimulator', type: 'InteractiveTool', props: { runner: 'DevSecOpsAgent', scans: 'SAST + Trivy' } },
                { name: 'WebAudioSynthesizer', type: 'AudioEngine', props: { state: 'active', sfx: 'keynote_chimes' } },
              ],
            },
          ],
        },
        {
          name: 'ProgressBar & BrandHeader',
          type: 'HeaderFooterChrome',
          props: { company: 'Bank Eka', event: 'FEKDI x IFSE 2026' },
        },
      ],
    },
  ],
};

export const LiveComponentTree: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ComponentNode>(VIRTUAL_DOM.children![0].children![0].children![0]);

  const renderNode = (node: ComponentNode, depth = 0) => {
    const isSelected = selectedNode.name === node.name;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.name} style={{ marginLeft: `${depth * 14}px` }} className="my-1">
        <button
          onClick={() => setSelectedNode(node)}
          className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono w-full text-left transition-colors ${
            isSelected
              ? 'bg-rose-900/40 text-rose-300 border border-rose-700/60 font-semibold'
              : 'hover:bg-slate-800 text-slate-300'
          }`}
        >
          {hasChildren ? <ChevronDown className="w-3 h-3 text-slate-500" /> : <Box className="w-3 h-3 text-slate-600" />}
          <span className="text-rose-400">&lt;</span>
          <span className="text-white">{node.name}</span>
          <span className="text-rose-400">/&gt;</span>
        </button>

        {hasChildren && (
          <div className="border-l border-slate-800/80 ml-2">
            {node.children!.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-[#070a10] rounded-xl border border-slate-800 p-4 text-xs font-mono">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
        <div className="flex items-center gap-2 text-rose-400 font-bold">
          <Layers className="w-4 h-4" />
          <span>REACT COMPONENT HIERARCHY</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-[10px]">
          Live Virtual DOM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-hidden">
        {/* Tree Explorer */}
        <div className="overflow-y-auto pr-2 border-r border-slate-800/60 max-h-[320px]">
          {renderNode(VIRTUAL_DOM)}
        </div>

        {/* Selected Node Inspector */}
        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 overflow-y-auto">
          <div className="text-[11px] text-slate-400 mb-2 font-bold flex items-center justify-between">
            <span>PROPS INSPECTOR</span>
            <span className="text-rose-400">{selectedNode.type}</span>
          </div>

          <div className="text-white font-bold text-sm mb-3">
            &lt;{selectedNode.name} /&gt;
          </div>

          <div className="space-y-1.5">
            {Object.entries(selectedNode.props).map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-[11px] py-1 border-b border-slate-850">
                <span className="text-slate-400">{k}:</span>
                <span className="text-emerald-400">"{v}"</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-850 flex items-center gap-1.5 text-[11px] text-slate-400">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mounted in React 19 fiber tree</span>
          </div>
        </div>
      </div>
    </div>
  );
};
