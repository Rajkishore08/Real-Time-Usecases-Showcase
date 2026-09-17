import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Edit3, 
  FileText, 
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Layers,
  Code
} from 'lucide-react';
import UseCaseVisual from './UseCaseVisual';
import { THEMES } from '../data/useCases';
import { FormattedShortWriteUp, FormattedDetailedWriteUp } from './SmartContentFormatter';

export default function DossierModal({ 
  useCase, 
  onClose, 
  onPrev, 
  onNext, 
  onEditCase,
  currentIndex,
  totalCases 
}) {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [copiedBlueprint, setCopiedBlueprint] = useState(false);
  const [rawTextView, setRawTextView] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowLeft' && !isImageFullscreen) onPrev();
      if (e.key === 'ArrowRight' && !isImageFullscreen) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, isImageFullscreen]);

  if (!useCase) return null;

  const currentTheme = THEMES.find(t => t.id === useCase.themeId);
  const accent = currentTheme?.color || '#00F2FE';

  const handleCopyBlueprint = () => {
    const fullContent = `${useCase.title}\nTheme ${useCase.themeId}: ${useCase.themeTitle}\n\nStatement:\n"${useCase.statement}"\n\nShort Overview:\n${useCase.shortWriteUp}\n\nDetailed Blueprint:\n${useCase.detailedWriteUp}`;
    navigator.clipboard.writeText(fullContent);
    setCopiedBlueprint(true);
    setTimeout(() => setCopiedBlueprint(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="dossier-modal-window"
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': accent }}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-badge-theme" style={{ borderColor: accent, color: accent }}>
              {currentTheme?.domain || 'Domain'}
            </span>
            <span className="modal-badge-tech">{currentTheme?.shortTitle}</span>
            <span className="modal-counter">[{currentIndex + 1} / {totalCases}]</span>
          </div>

          <div className="modal-header-right">
            {/* View Mode Toggle */}
            <button 
              className={`btn-modal-action ${rawTextView ? 'active' : ''}`}
              onClick={() => setRawTextView(!rawTextView)}
              title={rawTextView ? "Switch to Interactive Blueprint View" : "Switch to Raw Document View"}
            >
              {rawTextView ? <Layers size={14} /> : <Code size={14} />}
              <span className="btn-action-text">{rawTextView ? "Interactive View" : "Plain Text"}</span>
            </button>

            {/* Copy Blueprint */}
            <button 
              className="btn-modal-action"
              onClick={handleCopyBlueprint}
              title="Copy Complete Engineering Blueprint"
            >
              {copiedBlueprint ? <Check size={14} className="text-success" /> : <Copy size={14} />}
              <span className="btn-action-text">{copiedBlueprint ? "Copied!" : "Copy Dossier"}</span>
            </button>

            {/* Edit Content */}
            <button 
              className="btn-modal-action btn-highlight-action"
              onClick={() => onEditCase(useCase)}
              title="Upload image or edit engineering write-up"
            >
              <Edit3 size={15} />
              <span className="btn-action-text">Edit Content</span>
            </button>

            <div className="modal-nav-arrows">
              <button className="nav-arrow-btn" onClick={onPrev} title="Previous (Left Arrow)">
                <ChevronLeft size={18} />
              </button>
              <button className="nav-arrow-btn" onClick={onNext} title="Next (Right Arrow)">
                <ChevronRight size={18} />
              </button>
            </div>

            <button className="modal-close-btn" onClick={onClose} title="Close (Escape)">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Title Banner */}
        <div className="modal-title-banner">
          <div className="theme-super-title">THEME {useCase.themeId}: {useCase.themeTitle}</div>
          <h2 className="modal-main-title">{useCase.title || `Use Case ${useCase.caseNumber}`}</h2>
          <p className="modal-tagline">"{useCase.statement}"</p>
        </div>

        {/* Modal Scroll Body */}
        <div className="modal-scroll-body">
          <div className="dossier-tab-layout">
            {/* Left Column: Image / Visual & Short Write-up */}
            <div className="dossier-left-col">
              <div className="dossier-visual-container-interactive">
                <UseCaseVisual useCase={useCase} themeColor={accent} />
                {useCase.image && (
                  <button 
                    className="btn-expand-image"
                    onClick={() => setIsImageFullscreen(true)}
                    title="Expand Infographic to Fullscreen"
                  >
                    <Maximize2 size={16} />
                    <span>View Fullscreen Infographic</span>
                  </button>
                )}
              </div>

              {/* Short Write-up Box */}
              <div className="dossier-section-box executive-box">
                <div className="section-box-header">
                  <Sparkles size={16} className="text-accent" />
                  <h4>Overview &amp; Core Architecture</h4>
                </div>
                {useCase.shortWriteUp ? (
                  rawTextView ? (
                    <div className="executive-text whitespace-pre-wrap">{useCase.shortWriteUp}</div>
                  ) : (
                    <FormattedShortWriteUp text={useCase.shortWriteUp} themeColor={accent} />
                  )
                ) : (
                  <div className="empty-content-prompt">
                    <p className="empty-content-text">No short write-up added yet.</p>
                    <button className="btn-add-content-callout" onClick={() => onEditCase(useCase)}>
                      <Edit3 size={15} /> Add Overview &amp; Architecture
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Detailed Write-up */}
            <div className="dossier-right-col">
              <div className="dossier-section-box">
                <div className="section-box-header">
                  <FileText size={16} className="text-accent" />
                  <h4>Detailed Solution &amp; Engineering Blueprint</h4>
                </div>
                {useCase.detailedWriteUp ? (
                  rawTextView ? (
                    <div className="detailed-writeup-content">
                      <pre className="detailed-pre-formatted">{useCase.detailedWriteUp}</pre>
                    </div>
                  ) : (
                    <div className="detailed-formatted-wrap">
                      <FormattedDetailedWriteUp text={useCase.detailedWriteUp} themeColor={accent} />
                    </div>
                  )
                ) : (
                  <div className="empty-detailed-prompt">
                    <p className="empty-content-text">No detailed write-up added yet.</p>
                    <button className="btn-add-content-callout" onClick={() => onEditCase(useCase)}>
                      <Edit3 size={15} /> Add Detailed Content
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="modal-bottom-bar">
          <div className="modal-bottom-left">
            <span className="hud-indicator-dot" />
            <span>THEME {useCase.themeId} • USE CASE {useCase.caseNumber}</span>
          </div>

          <div className="modal-bottom-right">
            <button className="btn-modal-nav" onClick={onPrev}>
              <ChevronLeft size={16} /> Previous Case
            </button>
            <button className="btn-modal-nav btn-primary-nav" onClick={onNext}>
              Next Case <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen for Image */}
      {isImageFullscreen && useCase.image && (
        <div 
          className="fullscreen-lightbox-backdrop" 
          onClick={() => setIsImageFullscreen(false)}
        >
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-top-bar">
              <span className="lightbox-title">{useCase.title || `Use Case ${useCase.caseNumber}`} — High-Resolution Infographic</span>
              <button 
                className="lightbox-close-btn"
                onClick={() => setIsImageFullscreen(false)}
              >
                <Minimize2 size={18} />
                <span>Close Fullscreen</span>
              </button>
            </div>
            <div className="lightbox-img-wrapper">
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="lightbox-full-img" 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
