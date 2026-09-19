import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Sparkles,
  Compass,
  ArrowRight,
  Maximize2,
  Activity,
  CheckCircle2
} from 'lucide-react';
import UseCaseVisual from '../UseCaseVisual';

export default function CityContextCard({
  district,
  allUseCases = [],
  onOpenDossier,
  onClose,
  onResetCamera
}) {
  if (!district) return null;

  // Find linked use cases
  const matchedUseCases = allUseCases.filter(uc => 
    district.useCaseIds?.includes(uc.id) || 
    (district.primaryCaseId && uc.id === district.primaryCaseId)
  );

  const defaultUC = matchedUseCases[0] || allUseCases.find(uc => uc.id === district.primaryCaseId);
  const [activeCaseId, setActiveCaseId] = useState(defaultUC?.id || null);

  const activeUseCase = matchedUseCases.find(uc => uc.id === activeCaseId) || defaultUC;
  const IconComponent = district.icon;

  return (
    <div className="city-context-card-wrapper">
      <div 
        className="city-context-card glass-panel-luxury"
        style={{
          borderLeft: `4px solid ${district.accentColor || '#00F2FE'}`
        }}
      >
        {/* Card Header */}
        <div className="context-card-header">
          <div className="context-card-badge-row">
            <div className="category-pill" style={{ borderColor: `${district.accentColor || '#00F2FE'}44` }}>
              <span className="category-dot" style={{ backgroundColor: district.accentColor || '#00F2FE' }} />
              <span className="category-text">{district.category || "GCC District"}</span>
            </div>

            {/* Live Digital Twin Simulation Status */}
            <div className="simulation-live-badge">
              <span className="live-pulse-dot" />
              <span className="simulation-text">{district.simulationStatus || "Digital Twin Live"}</span>
            </div>

            <button 
              className="context-card-close-btn"
              onClick={onClose}
              title="Close Panel"
            >
              <X size={16} />
            </button>
          </div>

          {/* District Title & Icon */}
          <div className="context-card-title-group">
            <div 
              className="context-district-icon"
              style={{
                background: `linear-gradient(135deg, ${district.accentColor || '#00F2FE'}33, rgba(0,0,0,0.4))`,
                borderColor: district.accentColor || '#00F2FE'
              }}
            >
              {IconComponent && <IconComponent size={22} color={district.accentColor || '#00F2FE'} />}
            </div>
            <div>
              <h2 className="context-district-name">{district.name}</h2>
              <div className="context-simulation-sub">{district.simulationType}</div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="context-card-body">
          {/* Active Use Case Technical Blueprint Visualizer */}
          {activeUseCase && (
            <div className="context-blueprint-box">
              <div 
                className="context-hero-visual-box"
                onClick={() => onOpenDossier(activeUseCase)}
                title="Click to view full architectural blueprint"
              >
                <UseCaseVisual 
                  useCase={activeUseCase} 
                  themeColor={district.accentColor || '#00F2FE'} 
                />
                <div className="context-visual-overlay">
                  <span className="context-visual-badge">
                    <Sparkles size={12} /> {activeUseCase.title}
                  </span>
                  <button 
                    className="context-zoom-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDossier(activeUseCase);
                    }}
                    title="Expand Blueprint"
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          )}

          <p className="context-district-tagline">
            {district.tagline}
          </p>

          {/* Tech Stack Pills */}
          {district.technologies && district.technologies.length > 0 && (
            <div className="context-tech-section">
              <div className="context-section-label">
                <Cpu size={13} className="inline-icon" /> Core Technology Stack
              </div>
              <div className="context-tech-tags">
                {district.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge-mini">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Connected Enterprise Use Cases */}
          <div className="context-usecases-section">
            <div className="context-section-label">
              <Layers size={13} className="inline-icon" /> Connected Capabilities ({matchedUseCases.length})
            </div>

            <div className="context-usecases-list">
              {matchedUseCases.map((uc) => {
                const isActive = uc.id === activeUseCase?.id;

                return (
                  <div 
                    key={uc.id} 
                    className={`context-usecase-item ${isActive ? 'is-active-case' : ''}`}
                    onClick={() => setActiveCaseId(uc.id)}
                  >
                    <div className="context-usecase-thumb-wrap">
                      {uc.image ? (
                        <img 
                          src={uc.image} 
                          alt={uc.title} 
                          className="context-usecase-img"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="context-usecase-placeholder">
                          <Sparkles size={16} color="#00F2FE" />
                        </div>
                      )}
                    </div>
                    
                    <div className="context-usecase-info">
                      <div className="context-usecase-title">{uc.title}</div>
                      <div className="context-usecase-desc">
                        {uc.statement || uc.problem || "Explore complete architectural blueprint & live metrics"}
                      </div>
                    </div>

                    <button 
                      className="context-dossier-arrow-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDossier(uc);
                      }}
                      title="Open Technical Dossier"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="context-card-footer">
          {activeUseCase && (
            <button 
              className="btn-primary-glow btn-full-width"
              onClick={() => onOpenDossier(activeUseCase)}
            >
              <span>Explore Technical Blueprint</span>
              <ExternalLink size={15} />
            </button>
          )}

          <button 
            className="btn-secondary-ghost"
            onClick={onResetCamera}
          >
            <Compass size={14} />
            <span>Reset City Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
