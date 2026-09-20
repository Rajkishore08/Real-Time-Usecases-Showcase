import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  X, 
  Sparkles, 
  Globe, 
  Layers,
  CheckCircle2,
  Loader2
} from 'lucide-react';

export default function LiveSimulationViewer({
  isOpen,
  url,
  title = "Live Digital Twin Simulation",
  districtId = null,
  districtName = "District Live Twin",
  accentColor = "#00F2FE",
  onClose,
  onBackToCity
}) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [url, iframeKey]);

  // Handle ESC key to exit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          setIsFullscreen(false);
        } else if (isOpen) {
          handleBack();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen]);

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleBack = () => {
    if (onBackToCity) {
      onBackToCity(districtId);
    } else if (onClose) {
      onClose();
    }
  };

  if (!isOpen || !url || !mounted) return null;

  const portalTarget = (typeof document !== 'undefined' && document.body && document.body.nodeType === 1) 
    ? document.body 
    : null;

  if (!portalTarget) return null;

  return createPortal(
    <div 
      ref={containerRef}
      className={`live-sim-viewer-modal ${isFullscreen ? 'is-fullscreen' : ''}`}
      style={{ '--sim-accent': accentColor }}
    >
      {/* Top Header Navigation Bar */}
      <header className="live-sim-header">
        <div className="live-sim-header-left">
          {/* Main Glowing Back to 3D City Button */}
          <button 
            className="btn-back-to-city-main"
            onClick={handleBack}
            title="Return to 3D Digital Twin City View (Esc)"
          >
            <ArrowLeft size={18} className="btn-back-arrow" />
            <span className="btn-back-label">← Back to 3D City</span>
          </button>

          <div className="live-sim-divider" />

          {/* Title & Live Status Indicator */}
          <div className="live-sim-title-group">
            <div className="live-sim-badge-row">
              <span className="live-pulse-badge">
                <span className="pulse-dot" />
                <span className="pulse-text">LIVE WEB TWIN ACTIVE</span>
              </span>
              {districtName && (
                <span className="sim-district-pill" style={{ borderColor: `${accentColor}44`, color: accentColor }}>
                  <Globe size={12} />
                  <span>{districtName}</span>
                </span>
              )}
            </div>
            <h2 className="live-sim-heading">{title}</h2>
          </div>
        </div>

        {/* Header Right Controls */}
        <div className="live-sim-header-right">
          {/* Target URL Pill */}
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer" 
            className="sim-url-badge"
            title="Open in external browser tab"
          >
            <span className="url-text">{url.replace(/^https?:\/\//, '')}</span>
            <ExternalLink size={13} />
          </a>

          {/* Reload Button */}
          <button 
            className="sim-action-btn"
            onClick={handleReload}
            title="Reload Simulation Frame"
          >
            <RotateCw size={16} className={isLoading ? 'sim-spinning' : ''} />
            <span className="action-label">Reload</span>
          </button>

          {/* Fullscreen Button */}
          <button 
            className="sim-action-btn"
            onClick={handleToggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span className="action-label">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
          </button>

          {/* Close & Back Button */}
          <button 
            className="sim-close-btn"
            onClick={handleBack}
            title="Close Live Simulation & Return to City"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main Viewport with Loading State & iFrame */}
      <div className="live-sim-viewport-frame">
        {isLoading && (
          <div className="live-sim-loading-curtain">
            <div className="sim-loading-box">
              <Loader2 size={36} className="sim-spinning-loader" style={{ color: accentColor }} />
              <div className="sim-loading-title">Connecting to Live Digital Twin...</div>
              <div className="sim-loading-sub">{url}</div>
              <div className="sim-loading-bar">
                <div className="sim-loading-bar-fill" style={{ backgroundColor: accentColor }} />
              </div>
            </div>
          </div>
        )}

        <iframe
          key={iframeKey}
          src={url}
          title={title}
          className="live-sim-iframe"
          allow="fullscreen; accelerometer; gyroscope; camera; microphone; xr-spatial-tracking"
          loading="eager"
          onLoad={() => setIsLoading(false)}
        />

        {/* Floating Quick Return HUD (Always visible in bottom left or top left) */}
        <div className="live-sim-floating-hud">
          <button 
            className="btn-floating-city-return"
            onClick={handleBack}
            title="Click to return directly to 3D City Twin View"
          >
            <Globe size={15} />
            <span>← Return to 3D City View</span>
          </button>
        </div>
      </div>
    </div>,
    portalTarget
  );
}
