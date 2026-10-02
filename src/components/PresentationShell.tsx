import React, { useState, useEffect, useRef } from 'react';
import { SlideRenderer } from './SlideRenderer';
import { PresenterNotesModal } from './PresenterNotesModal';
import { SlideOverviewModal } from './SlideOverviewModal';
import { SLIDES } from '../data/slidesData';
import { sound } from '../utils/audio';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Volume2,
  VolumeX,
  FileText,
  LayoutGrid,
  Sparkles,
  RotateCcw
} from 'lucide-react';

export const PresentationShell: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [slide5Step, setSlide5Step] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Timer counter for 10-minute presentation
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalSlides = SLIDES.length;

  const goToNextSlide = () => {
    // If we are on Slide 5 and meme image is not yet revealed, reveal it first!
    if (currentSlide === 5 && slide5Step === 0) {
      sound.playSlideClick();
      setSlide5Step(1);
      return;
    }

    if (currentSlide < totalSlides) {
      sound.playSlideClick();
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next !== 5) setSlide5Step(0);
        return next;
      });
    }
  };

  const goToPrevSlide = () => {
    // If we are on Slide 5 and meme image is revealed, step back to hiding it first
    if (currentSlide === 5 && slide5Step === 1) {
      sound.playSlideClick();
      setSlide5Step(0);
      return;
    }

    if (currentSlide > 1) {
      sound.playSlideClick();
      setCurrentSlide((prev) => {
        const prevSlide = prev - 1;
        if (prevSlide === 5) {
          setSlide5Step(1);
        } else {
          setSlide5Step(0);
        }
        return prevSlide;
      });
    }
  };

  const goToSlide = (slideId: number) => {
    if (slideId >= 1 && slideId <= totalSlides) {
      setCurrentSlide(slideId);
      if (slideId !== 5) setSlide5Step(0);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => { });
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => { });
    }
  };

  const toggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          sound.playSlideClick();
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides);
          sound.playSlideClick();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleMute();
          break;
        case 'Escape':
          if (isNotesOpen) setIsNotesOpen(false);
          if (isOverviewOpen) setIsOverviewOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slide5Step, totalSlides, isNotesOpen, isOverviewOpen]);

  // Handle subtle auto-hide controls on mouse move
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      setShowControls(false);
    }, 2500);
  };

  const progressPercent = ((currentSlide - 1) / (totalSlides - 1)) * 100;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen bg-[#07090e] text-slate-100 flex items-center justify-center overflow-hidden font-sans select-none"
    >
      {/* 16:9 Presentation Frame Container max-w-[1520px] */}
      <main className="relative w-full  aspect-video max-h-screen bg-[#0a0e17] rounded-none md:rounded-xl shadow-2xl shadow-black/80 border-0 md:border border-slate-800/80 flex flex-col justify-between overflow-hidden">
        {/* Slide Content Viewport */}
        <div className="flex-1 w-full h-full relative overflow-hidden">
          <SlideRenderer
            currentSlide={currentSlide}
            slide5Step={slide5Step}
            onRevealSlide5={() => setSlide5Step(1)}
          />
        </div>

        {/* Minimal Progress Line at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 z-30">
          <div
            className="h-full bg-gradient-to-r from-rose-700 via-rose-500 to-rose-400 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </main>

      {/* Floating Tactical Keynote Controls (Appears on Hover / Subtle) */}
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 rounded-full bg-[#0b0f17]/90 border border-slate-800/80 backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-mono text-slate-300 transition-opacity duration-300 ${showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <button
          onClick={goToPrevSlide}
          disabled={currentSlide === 1}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Previous slide (← / Backspace)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsOverviewOpen(true)}
          className="px-2.5 py-1 rounded-md hover:bg-slate-800 transition-colors font-bold text-white flex items-center gap-1.5"
          title="Overview Grid (O)"
        >
          <span className="text-rose-400 font-bold">{currentSlide < 10 ? `0${currentSlide}` : currentSlide}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">{totalSlides}</span>
        </button>

        <button
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Next slide (→ / Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="w-px h-3.5 bg-slate-800 mx-1" />

        <button
          onClick={() => setIsNotesOpen(true)}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Presenter Notes (P)"
        >
          <FileText className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setIsOverviewOpen(true)}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title="All Slides Grid (O)"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Mute / Unmute Sound FX (M)"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Slide Navigation Overlay Modals */}
      <PresenterNotesModal
        currentSlide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        elapsedSec={elapsedSec}
      />

      <SlideOverviewModal
        currentSlide={currentSlide}
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onSelectSlide={goToSlide}
      />
    </div>
  );
};
