import React, { useState } from 'react';
import { 
  Compass, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Navigation,
  Globe
} from 'lucide-react';
import { CITY_DISTRICTS } from './cityDistrictsData';

export default function CityMiniControls({
  selectedDistrictId,
  onSelectDistrict,
  onResetView,
  onZoom,
  onRotate,
  autoRotate,
  onToggleAutoRotate,
  activeCategory,
  onSelectCategory
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
      {/* Top Floating Helper Pill */}
      <div className="city-top-helper-pill">
        <Globe size={14} className="cyan-glow-icon" />
        <span>Interactive 3D GCC Digital Twin • Click any district or marker to inspect</span>
      </div>

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

      {/* Side Camera Control Toolbar */}
      <div className="city-camera-tools">
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
