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
  X,
  Code2
} from 'lucide-react';
export default function CityMiniControls({
  selectedDistrictId,
  onSelectDistrict,
  onResetView,
  onZoom,
  autoRotate,
  onToggleAutoRotate,
  lightingMode = "day",
  onChangeLightingMode,
  simSpeed = 1.0,
  onChangeSimSpeed,
  hologramMode = "side",
  onChangeHologramMode,
  isSettingsOpen,
  onToggleSettings,
  isFullscreen = false,
  onToggleFullscreen,
  onOpenEmbed
}) {

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
              <label className="settings-label">Simulation Speed Multiplier</label>
              <div className="settings-btn-grid">
                <button 
                  className={`settings-opt-btn ${simSpeed === 0 ? 'is-active' : ''}`}
                  onClick={() => onChangeSimSpeed && onChangeSimSpeed(0)}
                >
                  <Pause size={14} />
                  <span>Pause (0x)</span>
                </button>
                <button 
                  className={`settings-opt-btn ${simSpeed === 1.0 ? 'is-active' : ''}`}
                  onClick={() => onChangeSimSpeed && onChangeSimSpeed(1.0)}
                >
                  <Play size={14} />
                  <span>Real-Time (1x)</span>
                </button>
                <button 
                  className={`settings-opt-btn ${simSpeed === 2.5 ? 'is-active' : ''}`}
                  onClick={() => onChangeSimSpeed && onChangeSimSpeed(2.5)}
                >
                  <FastForward size={14} />
                  <span>Turbo (2.5x)</span>
                </button>
              </div>
            </div>

            {/* Holographic AR Screen Placement */}
            <div className="settings-group">
              <label className="settings-label">District Inspector Positioning</label>
              <div className="settings-btn-grid">
                <button 
                  className={`settings-opt-btn ${hologramMode === 'side' ? 'is-active' : ''}`}
                  onClick={() => onChangeHologramMode && onChangeHologramMode('side')}
                >
                  <Eye size={14} />
                  <span>Side Floating</span>
                </button>
                <button 
                  className={`settings-opt-btn ${hologramMode === 'top' ? 'is-active' : ''}`}
                  onClick={() => onChangeHologramMode && onChangeHologramMode('top')}
                >
                  <Globe size={14} />
                  <span>Top Compact</span>
                </button>
                <button 
                  className={`settings-opt-btn ${hologramMode === 'hidden' ? 'is-active' : ''}`}
                  onClick={() => onChangeHologramMode && onChangeHologramMode('hidden')}
                >
                  <EyeOff size={14} />
                  <span>Hidden</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



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

        {/* Embed iFrame Button */}
        {onOpenEmbed && (
          <button 
            className="city-cam-btn embed-btn-highlight" 
            onClick={() => onOpenEmbed('city', selectedDistrictId)}
            title="Embed this 3D Digital Twin via iFrame"
          >
            <Code2 size={18} />
            <span className="cam-tooltip">Embed iFrame</span>
          </button>
        )}

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
