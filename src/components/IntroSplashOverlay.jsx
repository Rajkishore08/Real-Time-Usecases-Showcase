import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Briefcase, 
  Flame,
  Globe2
} from 'lucide-react';

export default function IntroSplashOverlay({ onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const [slidePos, setSlidePos] = useState(0); // 0 to 100%
  const [isDragging, setIsDragging] = useState(false);
  const sliderTrackRef = useRef(null);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    sessionStorage.setItem('ARCS_XRDT_SPLASH_SEEN', 'true');
    setTimeout(() => {
      onComplete?.();
    }, 850);
  };

  // Drag & Slide handlers for smooth Slide to Open
  const handleStartDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMove = (e) => {
    if (!isDragging || !sliderTrackRef.current) return;
    const rect = sliderTrackRef.current.getBoundingClientRect();
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const rawProgress = ((clientX - rect.left) / rect.width) * 100;
    const progress = Math.max(0, Math.min(100, rawProgress));
    setSlidePos(progress);

    if (progress >= 75) {
      setIsDragging(false);
      handleOpen();
    }
  };

  const handleEndDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (slidePos < 75) {
      setSlidePos(0);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (slidePos < 75) {
          setSlidePos(0);
        }
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging, slidePos]);

  return (
    <div 
      className={`arcs-opening-screen ${isOpening ? 'is-slide-opening' : ''}`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Dynamic Portal Light Burst on Reveal */}
      <div className="opening-portal-light-burst" />

      {/* Earth Orbit Backdrop */}
      <div className="arcs-earth-backdrop" />
      <div className="arcs-earth-vignette-overlay" />

      {/* Main UI Layout Container */}
      <div className="arcs-opening-content-wrapper">
        {/* Top Navigation Bar */}
        <header className="arcs-opening-nav">
          <div className="arcs-nav-brand">
            <img 
              src="/arcs_logo.png" 
              alt="ARCS Logo" 
              className="arcs-brand-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="arcs-nav-title-block">
              <span className="arcs-brand-main-name">ARCS</span>
              <span className="arcs-brand-subtitle-tag">GLOBAL CAPABILITY CENTER</span>
            </div>
          </div>

          <div className="arcs-nav-links">
            <span className="nav-item">Innovate</span>
            <span className="nav-item">Explore</span>
            <span className="nav-item">Impact</span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="arcs-opening-hero-body">
          <div className="arcs-hero-left-column">
            {/* Eyebrow Tagline */}
            <div className="arcs-hero-eyebrow">
              PHYSICAL WORLDS <span className="eyebrow-x">×</span> DIGITAL INTELLIGENCE <span className="eyebrow-x">×</span> REAL IMPACT
            </div>

            {/* Main Headline */}
            <h1 className="arcs-hero-title">
              Experience<br />
              the World of <span className="arcs-hero-xrdt">XRDT</span>
            </h1>

            {/* Subtitle */}
            <p className="arcs-hero-statement">
              Real Industries. Real Data. A Smarter Tomorrow.
            </p>

            {/* 3 Metric Pill Cards */}
            <div className="arcs-metric-pills-row">
              <div className="arcs-metric-pill">
                <div className="pill-icon-box">
                  <Layers size={20} className="pill-svg" />
                </div>
                <div className="pill-text-block">
                  <span className="pill-number">10</span>
                  <span className="pill-label">Industries</span>
                </div>
              </div>

              <div className="arcs-metric-pill">
                <div className="pill-icon-box">
                  <Briefcase size={20} className="pill-svg" />
                </div>
                <div className="pill-text-block">
                  <span className="pill-number">25</span>
                  <span className="pill-label">Live Use Cases</span>
                </div>
              </div>

              <div className="arcs-metric-pill">
                <div className="pill-icon-box">
                  <Flame size={20} className="pill-svg" />
                </div>
                <div className="pill-text-block">
                  <span className="pill-number">1</span>
                  <span className="pill-label">Connected Future</span>
                </div>
              </div>
            </div>

            {/* Interactive Slide to Open */}
            <div className="arcs-hero-cta-group">
              {/* Modern Slide to Open Bar */}
              <div className="arcs-slide-track-wrapper">
                <div 
                  ref={sliderTrackRef}
                  className="arcs-slide-track"
                  onClick={handleOpen}
                >
                  <div 
                    className="arcs-slide-fill"
                    style={{ width: `${Math.max(slidePos, 14)}%` }}
                  />
                  
                  <div 
                    className="arcs-slide-thumb"
                    style={{ left: `calc(${slidePos}% - ${slidePos * 0.52}px)` }}
                    onMouseDown={handleStartDrag}
                    onTouchStart={handleStartDrag}
                  >
                    <ChevronRight size={24} className="slide-thumb-chevron" />
                  </div>

                  <span className="arcs-slide-prompt-text">
                    SLIDE TO OPEN 3D DIGITAL TWIN &gt;&gt;&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Vertical Pillar */}
          <aside className="arcs-right-vertical-stack">
            <span>EXPLORE</span>
            <span>LEARN</span>
            <span>INTERACT</span>
            <span>BUILD</span>
            <span>IMPACT</span>
          </aside>
        </main>
      </div>
    </div>
  );
}
