import React from 'react';
import { 
  Compass, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Sliders,
  Sun,
  Moon,
  Sunset,
  Play,
  Pause,
  FastForward,
  Eye,
  EyeOff,
  Globe,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import { CITY_DISTRICTS } from './cityDistrictsData';

export default function CityMiniControls({
  selectedDistrictId,
  onSelectDistrict,
  onResetView,
  onZoom,
  autoRotate,
  onToggleAutoRotate,
  activeCategory,
  onSelectCategory,
  lightingMode = "day",
  onChangeLightingMode,
  simSpeed = 1.0,
  onChangeSimSpeed,
  hologramMode = "side",
  onChangeHologramMode,
  isSettingsOpen,
  onToggleSettings,
  isFullscreen = false,
  onToggleFullscreen
}) {
  const categories = ["All", "Industrial", "Infrastructure", "Healthcare", "Logistics", "Autonomous"];

  const filteredDistricts = activeCategory === "All"
    ? CITY_DISTRICTS
    : CITY_DISTRICTS.filter(d => {
        if (activeCategory === "Industrial") return d.category?.includes("Industrial") || d.category?.includes("Energy");
        if (activeCategory === "Infrastructure") return d.category?.includes("Infrastructure") || d.category?.includes("Logistics");
        if (activeCategory === "Healthcare") return d.category?.includes("Healthcare") || d.category?.includes("Biotechnology");
        if (activeCategory === "Logistics") return d.category?.includes("Supply Chain") || d.category?.includes("Transportation");
        if (activeCategory === "Autonomous") return d.category?.includes("Aerospace") || d.category?.includes("Advanced");
        return true;
      });

  return (
    <div className="city-navigation-hub">
      {/* Advanced Settings Drawer Modal */}
      {isSettingsOpen && (
        <div className="city-settings-drawer glass-panel-luxury">
          <div className="city-settings-header">
            <div className="city-settings-title">
              <Sliders size={16} className="cyan-glow-icon" />
              <span>3D Digital Twin Settings</span>
            </div>
            <button className="settings-close-btn" onClick={onToggleSettings}>
              <X size={16} />
            </button>
          </div>

          <div className="city-settings-body">
            {/* Lighting / Atmosphere Mode */}
            <div className="settings-group">
              <label className="settings-label">Atmosphere & Lighting</label>
              <div className="settings-btn-grid">
                <button 
                  className={`settings-opt-btn ${lightingMode === 'day' ? 'is-active' : ''}`}
                  onClick={() => onChangeLightingMode && onChangeLightingMode('day')}
                >
                  <Sun size={14} />
                  <span>Daylight</span>
                </button>
                <button 
                  className={`settings-opt-btn ${lightingMode === 'sunset' ? 'is-active' : ''}`}
                  onClick={() => onChangeLightingMode && onChangeLightingMode('sunset')}
                >
                  <Sunset size={14} />
                  <span>Sunset</span>
                </button>
                <button 
                  className={`settings-opt-btn ${lightingMode === 'night' ? 'is-active' : ''}`}
                  onClick={() => onChangeLightingMode && onChangeLightingMode('night')}
                >
                  <Moon size={14} />
                  <span>Cyber Night</span>
                </button>
              </div>
            </div>

            {/* Simulation Speed */}
            <div className="settings-group">
              <label className="settings-label">Traffic & Fleet Simulation Speed</label>
              <div className="settings-btn-grid">
                <button 
                  className={`settings-opt-btn ${simSpeed === 0 ? 'is-active' : ''}`}
                  onClick={() => onChangeSimSpeed && onChangeSimSpeed(0)}
                >
                  <Pause size={14} />
                  <span>Pause</span>
                </button>
                <button 
                  className={`settings-opt-btn ${simSpeed === 1.0 ? 'is-active' : ''}`}
                  onClick={() => onChangeSimSpeed && onChangeSimSpeed(1.0)}
                >
                  <Play size={14} />
                  <span>1.0x Realtime</span>
                </button>
                <button 
                  className={`settings-opt-btn ${simSpeed === 2.0 ? 'is-active' : ''}`}
                  onClick={() => onChangeSimSpeed && onChangeSimSpeed(2.0)}
                >
                  <FastForward size={14} />
                  <span>2.0x Turbo</span>
                </button>
              </div>
            </div>

            {/* Holographic AR Screen Placement */}
            <div className="settings-group">
              <label className="settings-label">3D Blueprint Hologram Placement</label>
              <div className="settings-btn-grid">
                <button 
                  className={`settings-opt-btn ${hologramMode === 'side' ? 'is-active' : ''}`}
                  onClick={() => onChangeHologramMode && onChangeHologramMode('side')}
                >
                  <Eye size={14} />
                  <span>Side Float (Offset)</span>
                </button>
                <button 
                  className={`settings-opt-btn ${hologramMode === 'top' ? 'is-active' : ''}`}
                  onClick={() => onChangeHologramMode && onChangeHologramMode('top')}
                >
                  <Sliders size={14} />
                  <span>Top Billboard</span>
                </button>
                <button 
                  className={`settings-opt-btn ${hologramMode === 'hidden' ? 'is-active' : ''}`}
                  onClick={() => onChangeHologramMode && onChangeHologramMode('hidden')}
                >
                  <EyeOff size={14} />
                  <span>Card Only</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Floating District Dock */}
      <div className="city-bottom-dock">
        {/* Category Filters */}
        <div className="city-dock-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`city-category-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* District Fast-Selector Ribbon */}
        <div className="city-districts-ribbon">
          {filteredDistricts.map((d) => {
            const Icon = d.icon;
            const isSelected = selectedDistrictId === d.id;

            return (
              <button
                key={d.id}
                className={`city-district-dock-item ${isSelected ? 'is-selected' : ''}`}
                onClick={() => onSelectDistrict(d.id)}
                title={d.name}
              >
                <div 
                  className="dock-item-icon" 
                  style={{ 
                    borderColor: isSelected ? (d.accentColor || '#00F2FE') : 'rgba(255,255,255,0.15)',
                    backgroundColor: isSelected ? `${d.accentColor || '#00F2FE'}25` : 'rgba(0,0,0,0.4)'
                  }}
                >
                  {Icon && <Icon size={14} color={isSelected ? (d.accentColor || '#00F2FE') : '#94a3b8'} />}
                </div>
                <span className="dock-item-label">{d.shortLabel || d.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side Camera & Settings Toolbar */}
      <div className="city-camera-tools">
        {/* Fullscreen Button */}
        <button 
          className={`city-cam-btn ${isFullscreen ? 'is-active' : ''}`} 
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          <span className="cam-tooltip">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
        </button>

        <button 
          className={`city-cam-btn ${isSettingsOpen ? 'is-active' : ''}`} 
          onClick={onToggleSettings}
          title="3D City & Simulation Settings"
        >
          <Sliders size={18} />
          <span className="cam-tooltip">Settings</span>
        </button>

        <button 
          className="city-cam-btn" 
          onClick={onResetView}
          title="Reset Camera to Global Overview"
        >
          <Compass size={18} />
          <span className="cam-tooltip">Reset View</span>
        </button>

        <button 
          className={`city-cam-btn ${autoRotate ? 'is-active' : ''}`} 
          onClick={onToggleAutoRotate}
          title="Toggle Orbit Auto-Rotation"
        >
          <RotateCw size={18} className={autoRotate ? 'spin-slow' : ''} />
          <span className="cam-tooltip">Auto Orbit</span>
        </button>

        <button 
          className="city-cam-btn" 
          onClick={() => onZoom(-1)}
          title="Zoom In"
        >
          <ZoomIn size={18} />
          <span className="cam-tooltip">Zoom In</span>
        </button>

        <button 
          className="city-cam-btn" 
          onClick={() => onZoom(1)}
          title="Zoom Out"
        >
          <ZoomOut size={18} />
          <span className="cam-tooltip">Zoom Out</span>
        </button>
      </div>
    </div>
  );
}
