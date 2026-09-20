import React from 'react';
import { 
  Search, 
  LayoutGrid, 
  Download, 
  Globe, 
  Code2, 
  X 
} from 'lucide-react';

export default function Header({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  onExportJSON,
  onOpenEmbed,
  totalCases,
  filteredCount
}) {
  return (
    <header className="showcase-header">
      {/* Main Branding & Navigation Row */}
      <div className="header-main-row">
        <div className="brand-lockup">
          <h1 className="brand-title">
            ARCS - <span className="gradient-text">XRDT - GCC</span>
          </h1>
          <p className="brand-subtitle">
            Enterprise Digital Twin &amp; Spatial Computing Ecosystem across 10 Operational Domains
          </p>
        </div>

        {/* Global Action Bar */}
        <div className="header-actions">
          {/* Embed / Share iFrame Button */}
          {onOpenEmbed && (
            <button 
              className="view-btn embed-header-btn"
              onClick={() => onOpenEmbed(viewMode)}
              title="Embed this Showcase view in an iframe on external sites"
              aria-label="Embed Showcase in iframe"
            >
              <Code2 size={15} />
              <span>Embed iFrame</span>
            </button>
          )}

          {/* Export JSON Button */}
          <button 
            className="view-btn export-json-btn"
            onClick={onExportJSON}
            title="Export all projects and prototype requirements as JSON"
            aria-label="Export all projects as JSON"
          >
            <Download size={15} />
            <span>Export JSON</span>
          </button>

          {/* View Mode Switcher */}
          <div className="view-mode-toggle">
            <button 
              className={`view-btn ${viewMode === 'city' ? 'active' : ''}`}
              onClick={() => setViewMode('city')}
              title="Interactive 3D Digital Twin City"
            >
              <Globe size={15} />
              <span>3D City Twin</span>
            </button>
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Card Grid View"
            >
              <LayoutGrid size={15} />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Counter Row */}
      <div className="header-controls-row">
        <div className="search-box-wrapper">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search use cases, technologies, or domains..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search use cases"
          />
          {searchTerm && (
            <button 
              className="search-clear-btn" 
              onClick={() => setSearchTerm('')}
              title="Clear search query"
              aria-label="Clear search query"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="filter-count-badge">
          Showing <strong>{filteredCount}</strong> of {totalCases} Cases
        </div>
      </div>
    </header>
  );
}
