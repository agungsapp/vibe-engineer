import React from 'react';
import { SLIDES } from '../data/slidesData';
import { X, Clock, User, BookOpen, Volume2 } from 'lucide-react';

interface PresenterNotesModalProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  elapsedSec: number;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  currentSlide,
  isOpen,
  onClose,
  elapsedSec,
}) => {
  if (!isOpen) return null;

  const slide = SLIDES[currentSlide - 1];

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-end p-4">
      <div className="w-full max-w-md h-full bg-[#0c101a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl text-slate-200 font-sans">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Catatan Presenter (Agung)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Time & Session Tracker */}
          <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-rose-400" />
                <span>Timer Berjalan</span>
              </div>
              <div className="text-xl font-bold text-white">{formatTime(elapsedSec)} / 10:00</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                <span>Target Slide</span>
              </div>
              <div className="text-xl font-bold text-rose-400">~{slide?.durationSec || 30}s</div>
            </div>
          </div>

          {/* Current Slide Info */}
          <div className="mb-4">
            <span className="text-[11px] font-mono text-slate-500 uppercase">
              Slide {slide?.id} of {SLIDES.length} · {slide?.category}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5 leading-snug">
              {slide?.title}
            </h3>
            {slide?.subtitle && (
              <p className="text-xs text-rose-400 font-mono mt-0.5">{slide.subtitle}</p>
            )}
          </div>

          {/* Speaker Talking Points in Indonesian */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-4 max-h-[300px] overflow-y-auto">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
              Panduan Penyampaian Lisan:
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              "{slide?.speakerNotes}"
            </p>
          </div>
        </div>

        {/* Footer shortcuts hint */}
        <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
          <div className="flex justify-between">
            <span>Next: <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">Space</kbd> / <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">→</kbd></span>
            <span>Prev: <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">←</kbd></span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Tutup Notes: <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">P</kbd> atau <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">Esc</kbd></span>
            <span>Slide Overview: <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">O</kbd></span>
          </div>
        </div>
      </div>
    </div>
  );
};
