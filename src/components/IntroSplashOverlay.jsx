import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Activity, 
  Layers, 
  Globe2, 
  Cpu, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function IntroSplashOverlay({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState("Initializing Global Digital Twin Engine...");

  useEffect(() => {
    // Check if user already saw splash in current session
    const hasSeen = sessionStorage.getItem('ARCS_XRDT_SPLASH_SEEN');
    if (hasSeen === 'true') {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 14 + 10);
        if (next >= 100) {
          clearInterval(interval);
          setStatusText("Digital Twin Ecosystem Ready • Entering GCC Space");
          setTimeout(() => {
            handleEnter();
          }, 450);
          return 100;
        }

        if (next > 70) {
          setStatusText("Calibrating 10 Industrial Domains & 20 Digital Blueprints...");
        } else if (next > 40) {
          setStatusText("Synchronizing Celestial Sky & 3D Spatial Telemetry...");
        } else {
          setStatusText("Initializing Global Digital Twin Engine...");
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsFadingOut(true);
    sessionStorage.setItem('ARCS_XRDT_SPLASH_SEEN', 'true');
    setTimeout(() => {
      onComplete?.();
    }, 850);
  };

  return (
    <div className={`intro-splash-backdrop ${isFadingOut ? 'splash-fade-out' : ''}`}>
      <div className="splash-ambient-glow glow-1" />
      <div className="splash-ambient-glow glow-2" />
      <div className="splash-grid-lines" />

      <div className="splash-content-container glass-panel-luxury">
        {/* Top Live Status Indicator */}
        <div className="splash-status-badge">
          <span className="splash-pulse-dot" />
          <span className="splash-status-tag">ARCS SYSTEM LIVE • SPATIAL COMMAND</span>
        </div>

        {/* Main Branding Lockup */}
        <div className="splash-brand-hero">
          <div className="splash-icon-cluster">
            <div className="splash-primary-icon">
              <Globe2 size={38} className="cyan-icon" />
            </div>
            <div className="splash-sub-icon left">
              <Cpu size={16} />
            </div>
            <div className="splash-sub-icon right">
              <ShieldCheck size={16} />
            </div>
          </div>

          <h1 className="splash-title">
            ARCS - <span className="gradient-text">XRDT - GCC</span>
          </h1>
          <p className="splash-tagline">
            Enterprise Digital Twin &amp; Extended Reality Ecosystem across 10 Operational Domains
          </p>
        </div>

        {/* Key Feature Telemetry Badges */}
        <div className="splash-metrics-grid">
          <div className="splash-metric-card">
            <Layers size={18} className="metric-icon" />
            <div className="metric-info">
              <span className="metric-val">10 Domains</span>
              <span className="metric-label">Smart Cities &amp; Industry</span>
            </div>
          </div>

          <div className="splash-metric-card">
            <Activity size={18} className="metric-icon" />
            <div className="metric-info">
              <span className="metric-val">20 Blueprints</span>
              <span className="metric-label">Interactive Replicas</span>
            </div>
          </div>

          <div className="splash-metric-card">
            <Sparkles size={18} className="metric-icon" />
            <div className="metric-info">
              <span className="metric-val">Real-Time</span>
              <span className="metric-label">3D Physics &amp; Celestial Sky</span>
            </div>
          </div>
        </div>

        {/* Progress Loading Bar */}
        <div className="splash-loader-area">
          <div className="splash-progress-track">
            <div 
              className="splash-progress-fill" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <div className="splash-status-row">
            <span className="splash-status-text">{statusText}</span>
            <span className="splash-percentage-text">{progress}%</span>
          </div>
        </div>

        {/* Instant Skip / Enter Action */}
        <button 
          className="splash-enter-btn"
          onClick={handleEnter}
          aria-label="Enter 3D Digital Twin City"
        >
          <span>ENTER DIGITAL TWIN</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
