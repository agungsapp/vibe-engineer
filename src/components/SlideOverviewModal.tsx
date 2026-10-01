import React from 'react';
import { SLIDES } from '../data/slidesData';
import { X, LayoutGrid, CheckCircle } from 'lucide-react';
import { sound } from '../utils/audio';

interface SlideOverviewModalProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (slideId: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-6 lg:p-12 overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-700 flex items-center justify-center text-white font-bold">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white font-mono">DAFTAR SEMUA SLIDE (19 SLIDES)</h2>
            <p className="text-xs text-slate-500">Pilih slide untuk langsung berpindah</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-xs font-mono flex items-center gap-1.5"
        >
          <X className="w-4 h-4" />
          <span>Tutup (Esc)</span>
        </button>
      </div>

      {/* Grid of slides */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 overflow-y-auto flex-1 pr-2 pb-6">
        {SLIDES.map((slide) => {
          const isActive = slide.id === currentSlide;

          return (
            <button
              key={slide.id}
              onClick={() => {
                sound.playSlideClick();
                onSelectSlide(slide.id);
                onClose();
              }}
              className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all group aspect-video ${
                isActive
                  ? 'bg-rose-950/40 border-rose-500 ring-2 ring-rose-500/30'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                <span>SLIDE {slide.id < 10 ? `0${slide.id}` : slide.id}</span>
                <span className={isActive ? 'text-rose-400 font-bold' : 'text-slate-600'}>
                  {slide.category}
                </span>
              </div>

              <div className="my-auto">
                <div className="font-bold text-xs text-white line-clamp-2 leading-snug group-hover:text-rose-300 transition-colors">
                  {slide.title}
                </div>
                {slide.subtitle && (
                  <div className="text-[10px] text-slate-400 line-clamp-1 mt-1 font-light">
                    {slide.subtitle}
                  </div>
                )}
              </div>

              <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/60">
                <span>~{slide.durationSec}s</span>
                {isActive && <CheckCircle className="w-3 h-3 text-rose-400" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
