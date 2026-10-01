import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Slide1Title } from './slides/Slide1Title';
import { Slide2Stats } from './slides/Slide2Stats';
import { Slide3BeforeAI } from './slides/Slide3BeforeAI';
import { Slide4ThenAI } from './slides/Slide4ThenAI';
import { Slide5VibeCoding } from './slides/Slide5VibeCoding';
import { Slide6WhatHappens } from './slides/Slide6WhatHappens';
import { Slide7VibeEngineering } from './slides/Slide7VibeEngineering';
import { Slide8TheEngineer } from './slides/Slide8TheEngineer';
import { Slide9ShiftLeft } from './slides/Slide9ShiftLeft';
import { Slide10Automation } from './slides/Slide10Automation';
import { Slide11ChatbotToAgent } from './slides/Slide11ChatbotToAgent';
import { Slide12TerminalSimulation } from './slides/Slide12TerminalSimulation';
import { Slide13MCPProtocol } from './slides/Slide13MCPProtocol';
import { Slide14SecurityQuestion } from './slides/Slide14SecurityQuestion';
import { Slide15SecurityAnswer } from './slides/Slide15SecurityAnswer';
import { Slide16BigPicture } from './slides/Slide16BigPicture';
import { Slide17ImpactSummary } from './slides/Slide17ImpactSummary';
import { Slide18SetupReveal } from './slides/Slide18SetupReveal';
import { Slide19QnaAndReveal } from './slides/Slide19QnaAndReveal';

interface SlideRendererProps {
  currentSlide: number;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ currentSlide }) => {
  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1Title />;
      case 2:
        return <Slide2Stats />;
      case 3:
        return <Slide3BeforeAI />;
      case 4:
        return <Slide4ThenAI />;
      case 5:
        return <Slide5VibeCoding />;
      case 6:
        return <Slide6WhatHappens />;
      case 7:
        return <Slide7VibeEngineering />;
      case 8:
        return <Slide8TheEngineer />;
      case 9:
        return <Slide9ShiftLeft />;
      case 10:
        return <Slide10Automation />;
      case 11:
        return <Slide11ChatbotToAgent />;
      case 12:
        return <Slide12TerminalSimulation />;
      case 13:
        return <Slide13MCPProtocol />;
      case 14:
        return <Slide14SecurityQuestion />;
      case 15:
        return <Slide15SecurityAnswer />;
      case 16:
        return <Slide16BigPicture />;
      case 17:
        return <Slide17ImpactSummary />;
      case 18:
        return <Slide18SetupReveal />;
      case 19:
        return <Slide19QnaAndReveal />;
      default:
        return <Slide1Title />;
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0a0e17]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
