import React, { forwardRef } from 'react';
import { CITY_DISTRICTS } from './cityDistrictsData';

/**
 * Floating 2D HTML markers rendered once and positioned directly via hardware-accelerated 3D transforms.
 * This guarantees 60-120 FPS with zero React re-render lag or flickering.
 */
const CityFloatingMarkers = forwardRef(function CityFloatingMarkers({
  selectedDistrictId,
  hoveredDistrictId,
  onSelectDistrict,
  onHoverDistrict
}, ref) {
  return (
    <div 
      className="city-floating-markers-container" 
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      {CITY_DISTRICTS.map((district) => {
        const isSelected = selectedDistrictId === district.id;
        const isHovered = hoveredDistrictId === district.id;
        const IconComponent = district.icon;

        return (
          <div
            key={district.id}
            ref={(el) => {
              if (ref && ref.current) {
                ref.current[district.id] = el;
              }
            }}
            id={`marker-${district.id}`}
            className={`city-floating-marker ${isSelected ? 'is-selected' : ''} ${isHovered ? 'is-hovered' : ''}`}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              display: 'none', // Shown dynamically on first projection
              pointerEvents: 'auto',
              cursor: 'pointer',
              transformOrigin: 'bottom center',
              willChange: 'transform'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectDistrict(district.id);
            }}
            onMouseEnter={() => onHoverDistrict(district.id)}
            onMouseLeave={() => onHoverDistrict(null)}
          >
            {/* Pulsing anchor point on ground */}
            <div className="marker-ground-stem">
              <div 
                className="marker-ground-dot" 
                style={{ 
                  backgroundColor: district.accentColor || '#00F2FE',
                  boxShadow: `0 0 10px ${district.accentColor || '#00F2FE'}`
                }} 
              />
            </div>

            {/* Pill Container */}
            <div 
              className="marker-pill-body"
              style={{
                borderColor: isSelected 
                  ? (district.accentColor || '#00F2FE') 
                  : isHovered 
                    ? 'rgba(0, 242, 254, 0.7)' 
                    : 'rgba(255, 255, 255, 0.16)',
                boxShadow: isSelected 
                  ? `0 0 25px ${district.accentColor || '#00F2FE'}66, 0 12px 30px rgba(0, 0, 0, 0.6)` 
                  : isHovered
                    ? '0 8px 24px rgba(0, 242, 254, 0.35), 0 4px 12px rgba(0,0,0,0.5)'
                    : '0 6px 20px rgba(0, 0, 0, 0.45)'
              }}
            >
              {/* Circular Icon Badge */}
              <div 
                className="marker-icon-badge"
                style={{
                  background: isSelected 
                    ? `linear-gradient(135deg, ${district.accentColor || '#00F2FE'}, #0066FF)` 
                    : 'linear-gradient(135deg, #0284c7, #0369a1)',
                  boxShadow: isSelected ? `0 0 12px ${district.accentColor || '#00F2FE'}` : 'none'
                }}
              >
                {IconComponent && <IconComponent size={13} color="#FFFFFF" strokeWidth={2.4} />}
              </div>

              {/* Label */}
              <span className="marker-title">
                {district.shortLabel || district.name}
              </span>

              {/* Active Indicator Pulse */}
              {isSelected && (
                <span className="marker-active-dot" style={{ backgroundColor: district.accentColor || '#00F2FE' }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CityFloatingMarkers;
