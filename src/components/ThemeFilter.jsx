import React from 'react';
import { 
  Dna, 
  Activity, 
  Building2, 
  Sprout, 
  Zap, 
  Cpu, 
  Satellite, 
  Compass, 
  Layers, 
  Boxes,
  Grid
} from 'lucide-react';
import { THEMES } from '../data/useCases';

const ICON_MAP = {
  Dna,
  Activity,
  Building2,
  Sprout,
  Zap,
  Cpu,
  Satellite,
  Compass,
  Layers,
  Boxes
};

export default function ThemeFilter({ selectedThemeId, onSelectTheme, useCases }) {
  return (
    <nav className="theme-filter-container" aria-label="Domain Filters">
      <div className="theme-pills-track">
        {/* All Domains Pill */}
        <button
          className={`theme-pill all-pill ${selectedThemeId === null ? 'active' : ''}`}
          onClick={() => onSelectTheme(null)}
        >
          <div className="pill-icon-box">
            <Grid size={15} />
          </div>
          <span className="pill-name">All Domains</span>
          <span className="pill-counter">{useCases.length}</span>
        </button>

        {/* Domain Filter Pills */}
        {THEMES.map((theme) => {
          const IconComponent = ICON_MAP[theme.iconName] || Layers;
          const isSelected = selectedThemeId === theme.id;
          const themeCasesCount = useCases.filter(c => c.themeId === theme.id).length;

          return (
            <button
              key={theme.id}
              className={`theme-pill ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectTheme(theme.id)}
              style={{
                '--theme-accent': theme.color
              }}
            >
              <div 
                className="pill-icon-box"
                style={{ 
                  color: isSelected ? '#fff' : theme.color,
                  backgroundColor: isSelected ? theme.color : 'rgba(255,255,255,0.06)'
                }}
              >
                <IconComponent size={15} />
              </div>
              <span className="pill-name">{theme.shortTitle}</span>
              <span className="pill-counter">{themeCasesCount}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
