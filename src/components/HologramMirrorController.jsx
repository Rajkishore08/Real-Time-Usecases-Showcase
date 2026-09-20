import React, { useState, useEffect } from 'react';
import { 
  Projector, 
  FlipHorizontal, 
  FlipVertical, 
  RotateCw, 
  Moon, 
  Sun,
  X,
  Sparkles,
  Maximize,
  Check
} from 'lucide-react';

export default function HologramMirrorController({
  mirrorMode = 'none', // 'none', 'vertical', 'horizontal', 'both'
  onChangeMirrorMode,
  pureBlackBg = false,
  onTogglePureBlack
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  const handleSelectMode = (mode, label) => {
    onChangeMirrorMode?.(mode);
    triggerToast(`Hologram: ${label}`);
  };

  // Keyboard shortcuts: 'H' for next mirror mode, 'B' for pure black
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'h' || e.key === 'H') {
        const modes = ['none', 'vertical', 'horizontal', 'both'];
        const currentIdx = modes.indexOf(mirrorMode);
        const nextMode = modes[(currentIdx + 1) % modes.length];
        const labels = {
          none: 'Normal View',
          vertical: 'Vertical Flip (45° Glass)',
          horizontal: 'Horizontal Flip',
          both: 'Both / Inverted'
        };
        handleSelectMode(nextMode, labels[nextMode]);
      } else if (e.key === 'b' || e.key === 'B') {
        onTogglePureBlack?.();
        triggerToast(`True Black Glass: ${!pureBlackBg ? 'Enabled' : 'Disabled'}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mirrorMode, pureBlackBg]);

  const isMirrored = mirrorMode !== 'none';

  return (
    <aside className="hologram-mirror-hud" aria-label="Hologram Projection Controls">
      {/* Toast Notification */}
      {showToast && (
        <div className="hologram-toast-badge" role="status">
          <Sparkles size={14} className="toast-sparkle" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button 
        className={`hologram-hud-fab ${isMirrored ? 'is-active-projection' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Hologram Glass Projection & Mirror Controls (Shortcut: 'H')"
        aria-label="Hologram Glass Projection & Mirror Controls"
      >
        <Projector size={19} className="hud-projector-icon" />
        <span className="hud-fab-label">
          {mirrorMode === 'vertical' ? 'Hologram: V-Flip' : 
           mirrorMode === 'horizontal' ? 'Hologram: H-Flip' :
           mirrorMode === 'both' ? 'Hologram: Both' : 'Hologram'}
        </span>
        {isMirrored && <span className="hud-active-pulse-dot" />}
      </button>

      {/* Expanded Hologram Configuration Panel */}
      {isOpen && (
        <div className="hologram-config-card glass-panel-luxury">
          <div className="hologram-card-header">
            <div className="hologram-card-title">
              <Projector size={16} className="cyan-glow-icon" />
              <span>Hologram Projection Mirror</span>
            </div>
            <button 
              className="hologram-card-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Hologram settings"
            >
              <X size={15} />
            </button>
          </div>

          <p className="hologram-card-desc">
            Optimized for 45° Pepper's Ghost glass and pyramid holographic displays.
          </p>

          <div className="hologram-modes-grid">
            {/* Standard Mode */}
            <button 
              className={`hologram-mode-btn ${mirrorMode === 'none' ? 'active' : ''}`}
              onClick={() => handleSelectMode('none', 'Normal (Unmirrored)')}
            >
              <RotateCw size={16} />
              <div className="mode-btn-text">
                <span className="mode-main">Normal</span>
                <span className="mode-sub">Standard Screen</span>
              </div>
              {mirrorMode === 'none' && <Check size={14} className="mode-check" />}
            </button>

            {/* Vertical Flip (Primary for 45° angled glass) */}
            <button 
              className={`hologram-mode-btn ${mirrorMode === 'vertical' ? 'active' : ''}`}
              onClick={() => handleSelectMode('vertical', 'Vertical Flip (45° Glass)')}
            >
              <FlipVertical size={16} />
              <div className="mode-btn-text">
                <span className="mode-main">Flip Vertical</span>
                <span className="mode-sub">45° Angled Glass / Pyramid</span>
              </div>
              {mirrorMode === 'vertical' && <Check size={14} className="mode-check" />}
            </button>

            {/* Horizontal Flip */}
            <button 
              className={`hologram-mode-btn ${mirrorMode === 'horizontal' ? 'active' : ''}`}
              onClick={() => handleSelectMode('horizontal', 'Horizontal Flip')}
            >
              <FlipHorizontal size={16} />
              <div className="mode-btn-text">
                <span className="mode-main">Flip Horizontal</span>
                <span className="mode-sub">Rear Reflective Glass</span>
              </div>
              {mirrorMode === 'horizontal' && <Check size={14} className="mode-check" />}
            </button>

            {/* Flip Both (180° Inversion) */}
            <button 
              className={`hologram-mode-btn ${mirrorMode === 'both' ? 'active' : ''}`}
              onClick={() => handleSelectMode('both', 'Both (180° Inverted)')}
            >
              <RotateCw size={16} style={{ transform: 'scale(-1, -1)' }} />
              <div className="mode-btn-text">
                <span className="mode-main">Flip Both (180°)</span>
                <span className="mode-sub">Top-Down Dual Mirror</span>
              </div>
              {mirrorMode === 'both' && <Check size={14} className="mode-check" />}
            </button>
          </div>

          {/* Pure Black Contrast Mode */}
          <div className="hologram-extra-options">
            <button 
              className={`hologram-toggle-pill ${pureBlackBg ? 'active' : ''}`}
              onClick={() => {
                onTogglePureBlack?.();
                triggerToast(`True Black Glass: ${!pureBlackBg ? 'Enabled' : 'Disabled'}`);
              }}
            >
              <Moon size={15} />
              <span>True Black Background (Zero Glass Glare)</span>
              {pureBlackBg && <Check size={14} />}
            </button>
          </div>

          <div className="hologram-shortcut-footer">
            <span>Press <kbd>H</kbd> to cycle mirrors • <kbd>B</kbd> for True Black</span>
          </div>
        </div>
      )}
    </aside>
  );
}
