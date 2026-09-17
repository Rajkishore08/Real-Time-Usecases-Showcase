import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  Edit3
} from 'lucide-react';
import UseCaseVisual from './UseCaseVisual';
import { THEMES } from '../data/useCases';
import { FormattedShortWriteUp } from './SmartContentFormatter';

export default function PresentationView({
  useCases,
  onOpenDossier,
  onEditCase
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentCase = useCases[currentIndex] || useCases[0];
  const currentTheme = THEMES.find(t => t.id === currentCase?.themeId);
  const accent = currentTheme?.color || '#00F2FE';

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % useCases.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, useCases.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentIndex(prev => (prev + 1) % useCases.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => (prev - 1 + useCases.length) % useCases.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [useCases.length]);

  if (!currentCase) return null;

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % useCases.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + useCases.length) % useCases.length);

  return (
    <div className="presentation-container" style={{ '--stage-accent': accent }}>
      {/* Top Controls */}
      <div className="stage-controls-bar">
        <div className="stage-meta-left">
          <span className="stage-pill-domain">{currentTheme?.shortTitle}</span>
          <span className="stage-slide-counter">
            USE CASE <strong>{currentIndex + 1}</strong> OF {useCases.length}
          </span>
        </div>

        <div className="stage-nav-center">
          <button className="stage-nav-btn" onClick={prevSlide} title="Previous (Left Arrow)">
            <ChevronLeft size={20} />
          </button>
          <button 
            className={`stage-nav-btn play-pause-btn ${isPlaying ? 'playing' : ''}`} 
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause auto-slide" : "Start auto-slide (7s)"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button className="stage-nav-btn" onClick={nextSlide} title="Next (Right Arrow or Space)">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="stage-actions-right">
          <button 
            className="stage-btn-edit"
            onClick={() => onEditCase(currentCase)}
            title="Upload image or edit write-up"
          >
            <Edit3 size={15} />
            <span>Edit Content</span>
          </button>
          <button 
            className="stage-btn-dossier"
            onClick={() => onOpenDossier(currentCase)}
          >
            <span>View Full Details</span>
            <Maximize2 size={15} />
          </button>
        </div>
      </div>

      {/* Main Stage */}
      <div className="presentation-stage">
        {/* Visual */}
        <div className="stage-visual-panel">
          <div className="stage-visual-wrapper">
            <UseCaseVisual useCase={currentCase} themeColor={accent} />
          </div>
        </div>

        {/* Content */}
        <div className="stage-content-panel">
          <div className="stage-theme-breadcrumb">
            THEME {currentCase.themeId}: {currentCase.themeTitle}
          </div>

          <h2 className="stage-case-title">
            {currentCase.title || `Use Case ${currentCase.caseNumber}`}
          </h2>
          
          <div className="stage-tagline-quote">
            "{currentCase.statement}"
          </div>

          {/* Solution & Short Write-up */}
          <div className="stage-summary-box">
            <div className="summary-box-title">
              <Sparkles size={16} className="text-accent" />
              <span>SOLUTION &amp; LIVE DATAFLOW</span>
            </div>
            {currentCase.shortWriteUp ? (
              <div className="stage-formatted-short">
                <FormattedShortWriteUp text={currentCase.shortWriteUp} themeColor={accent} />
              </div>
            ) : (
              <p className="stage-summary-text text-muted">Awaiting your solution write-up...</p>
            )}
          </div>

          {/* Detailed Write-up preview */}
          {currentCase.detailedWriteUp && (
            <div className="stage-detailed-box">
              <div className="summary-box-title">
                <span>DETAILED WRITE-UP PREVIEW</span>
              </div>
              <p className="stage-detailed-text">
                {typeof currentCase.detailedWriteUp === 'string' 
                  ? currentCase.detailedWriteUp.substring(0, 240) + '...'
                  : JSON.stringify(currentCase.detailedWriteUp).substring(0, 240) + '...'}
              </p>
            </div>
          )}

          <div className="stage-bottom-action">
            <button 
              className="btn-stage-explore"
              onClick={() => onOpenDossier(currentCase)}
            >
              <span>Explore Complete Use Case</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="presentation-thumbnails-scroller">
        {useCases.map((c, idx) => (
          <button
            key={c.id}
            className={`thumb-btn ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            style={{
              '--thumb-accent': accent
            }}
          >
            <span className="thumb-num">0{idx + 1}</span>
            <span className="thumb-title">T{c.themeId} • C{c.caseNumber}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
