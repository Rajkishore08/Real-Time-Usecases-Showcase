import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import UseCaseVisual from './UseCaseVisual';
import { CardPipelineSnippet, CardTechTagsSnippet } from './SmartContentFormatter';

export default function UseCaseCard({ 
  useCase, 
  theme,
  onOpenDossier,
  onLaunchLiveDemo
}) {
  const accent = theme?.color || '#00F2FE';

  return (
    <div 
      className="use-case-card"
      onClick={() => onOpenDossier(useCase)}
      style={{
        '--card-accent': accent
      }}
    >
      {/* Top Card Bar: Clean Domain Identifier */}
      <div className="card-top-bar">
        <div className="card-theme-tag">
          <span className="domain-dot" style={{ backgroundColor: accent }} />
          <span className="domain-label">{theme?.shortTitle || theme?.domain}</span>
        </div>
        
        <div className="card-top-actions">
          {useCase.liveDemoUrl && onLaunchLiveDemo && (
            <button
              className="card-live-badge-btn"
              onClick={(e) => {
                e.stopPropagation();
                onLaunchLiveDemo({
                  url: useCase.liveDemoUrl,
                  title: useCase.liveDemoTitle || `${useCase.title} — Live Web Twin`,
                  districtId: useCase.id === 't4-u1' ? 'pigfarm' : useCase.id === 't4-u2' ? 'fishfarm' : null,
                  districtName: useCase.title,
                  accentColor: accent
                });
              }}
              title="Launch live interactive simulation with Back to 3D City navigation"
            >
              <span className="pulse-dot" style={{ backgroundColor: '#05FFA1', width: 6, height: 6 }} />
              <span>Live Twin</span>
            </button>
          )}

          <div className="card-view-indicator">
            <span className="explore-tag">Explore</span>
            <ArrowUpRight size={14} className="explore-icon" />
          </div>
        </div>
      </div>

      {/* Visual Infographic Frame */}
      <div className="card-visual-frame">
        <UseCaseVisual useCase={useCase} themeColor={accent} />
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Title */}
        {useCase.title && (
          <h3 className="card-case-title">{useCase.title}</h3>
        )}

        {/* Use Case Statement / Context */}
        <div className="card-statement-box">
          <p className="card-statement-text">"{useCase.statement}"</p>
        </div>

        {/* Short Write-up / Solution Preview */}
        {useCase.shortWriteUp && (
          <div className="card-short-solution">
            <div className="solution-mini-header">
              <Sparkles size={13} className="text-accent" />
              <span>Solution &amp; Core Architecture</span>
            </div>
            
            {/* Lead Summary sentence */}
            <p className="card-lead-summary">
              {useCase.shortWriteUp.split('\n')[0].replace(/^•\s*/, '')}
            </p>

            {/* Pipeline Preview */}
            <CardPipelineSnippet text={useCase.shortWriteUp} themeColor={accent} />

            {/* Technology Tags */}
            <CardTechTagsSnippet text={useCase.shortWriteUp} />
          </div>
        )}

        {/* Footer */}
        <div className="card-footer">
          <button 
            className="btn-deep-dive"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDossier(useCase);
            }}
          >
            <span>View Complete Architecture &amp; Solution</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
