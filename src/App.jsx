import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { INITIAL_USE_CASES, THEMES } from './data/useCases';
import Header from './components/Header';
import ThemeFilter from './components/ThemeFilter';
import UseCaseCard from './components/UseCaseCard';
import DossierModal from './components/DossierModal';
import ContentEditorModal from './components/ContentEditorModal';
import EmbedModal from './components/EmbedModal';
import LiveSimulationViewer from './components/LiveSimulationViewer';
import City3DCanvas from './components/city/City3DCanvas';
import IntroSplashOverlay from './components/IntroSplashOverlay';
import { Layers } from 'lucide-react';

const STORAGE_KEY = 'REALTIME_SHOWCASE_CONTENT_V10';

export default function App() {
  // Clean up legacy keys
  useEffect(() => {
    localStorage.removeItem('REALTIME_SHOWCASE_CONTENT_V9');
    localStorage.removeItem('REALTIME_SHOWCASE_CONTENT_V8');
    localStorage.removeItem('REALTIME_SHOWCASE_CONTENT_V7');
    localStorage.removeItem('REALTIME_SHOWCASE_CONTENT_V6');
    localStorage.removeItem('REALTIME_SHOWCASE_CONTENT_V5');
    localStorage.removeItem('REALTIME_SHOWCASE_CONTENT_V4');
    localStorage.removeItem('REALTIME_SHOWCASE_USE_CASES_V1');
    localStorage.removeItem('REALTIME_SHOWCASE_CLEAN_V2');
  }, []);

  const [useCases, setUseCases] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return INITIAL_USE_CASES.map(initCase => {
            const match = parsed.find(p => p.id === initCase.id);
            if (match) {
              const hasCustomShort = typeof match.shortWriteUp === 'string' && match.shortWriteUp.trim().length > 0;
              const hasCustomDetailed = typeof match.detailedWriteUp === 'string' && match.detailedWriteUp.trim().length > 0;
              const hasCustomTitle = typeof match.title === 'string' && match.title.trim().length > 0;
              const hasCustomImage = typeof match.image === 'string' && match.image.trim().length > 0;
              const hasCustomStatement = typeof match.statement === 'string' && match.statement.trim().length > 0;

              return {
                ...initCase,
                title: hasCustomTitle ? match.title : initCase.title,
                statement: hasCustomStatement ? match.statement : initCase.statement,
                image: hasCustomImage ? match.image : initCase.image,
                shortWriteUp: hasCustomShort ? match.shortWriteUp : initCase.shortWriteUp,
                detailedWriteUp: hasCustomDetailed ? match.detailedWriteUp : initCase.detailedWriteUp,
              };
            }
            return initCase;
          });
        }
      }
    } catch (e) {
      console.warn("Failed to read from localStorage", e);
    }
    return INITIAL_USE_CASES;
  });

  // URL Query Parameters Parsing
  const queryParams = useMemo(() => {
    if (typeof window === 'undefined') return new URLSearchParams();
    return new URLSearchParams(window.location.search);
  }, []);

  const isEmbedFromUrl = queryParams.get('embed') === 'true' || queryParams.get('embed') === '1';
  const initialViewFromUrl = ['city', 'grid'].includes(queryParams.get('view')) ? queryParams.get('view') : 'city';
  const initialDistrictFromUrl = queryParams.get('district') || null;
  const initialCaseFromUrl = queryParams.get('useCase') || queryParams.get('case') || null;
  const initialThemeFromUrl = queryParams.get('theme') ? Number(queryParams.get('theme')) : null;
  const initialSearchFromUrl = queryParams.get('search') || '';
  const hideHeaderFromUrl = queryParams.get('hideHeader') === 'true';
  const hideFooterFromUrl = queryParams.get('hideFooter') === 'true';
  const hideControlsFromUrl = queryParams.get('hideControls') === 'true';
  const initialAutoRotate = queryParams.get('autoRotate') !== 'false';

  const [isEmbedMode, setIsEmbedMode] = useState(isEmbedFromUrl);
  const [selectedThemeId, setSelectedThemeId] = useState(initialThemeFromUrl);
  const [searchTerm, setSearchTerm] = useState(initialSearchFromUrl);
  const [viewMode, setViewMode] = useState(initialViewFromUrl); // 'city' or 'grid'
  const [activeDistrictId, setActiveDistrictId] = useState(initialDistrictFromUrl);

  // Modals state
  const [activeDossierCase, setActiveDossierCase] = useState(() => {
    if (initialCaseFromUrl) {
      return INITIAL_USE_CASES.find(c => c.id === initialCaseFromUrl) || null;
    }
    return null;
  });
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorCaseId, setEditorCaseId] = useState(null);

  // Embed Modal State
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);
  const [embedModalTarget, setEmbedModalTarget] = useState('city');
  const [embedModalDistrictId, setEmbedModalDistrictId] = useState(null);
  const [embedModalCaseId, setEmbedModalCaseId] = useState(null);

  // Live Simulation Viewer State
  const [activeLiveDemo, setActiveLiveDemo] = useState(null);
  const [showSplash, setShowSplash] = useState(() => !isEmbedFromUrl);

  const handleLaunchLiveDemo = useCallback((demoConfig) => {
    if (!demoConfig || !demoConfig.url) return;
    setActiveLiveDemo(demoConfig);
  }, []);

  const handleBackToCityFromLiveDemo = useCallback((districtId) => {
    setActiveLiveDemo(null);
    setActiveDossierCase(null);
    setViewMode('city');
    if (districtId) {
      setActiveDistrictId(districtId);
    }
  }, []);

  const handleOpenEmbed = useCallback((target = 'city', districtId = null, caseId = null) => {
    setEmbedModalTarget(target === 'presentation' ? 'city' : target);
    setEmbedModalDistrictId(districtId);
    setEmbedModalCaseId(caseId);
    setIsEmbedModalOpen(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(useCases));
    } catch (e) {
      console.warn("Failed to write to localStorage", e);
    }
  }, [useCases]);

  // Handle URL deep-linking on initial load if useCases load later
  useEffect(() => {
    if (initialCaseFromUrl && useCases.length > 0) {
      const match = useCases.find(c => c.id === initialCaseFromUrl);
      if (match) setActiveDossierCase(match);
    }
  }, [initialCaseFromUrl, useCases]);

  // Cross-Window postMessage Listener (For parent host communication when embedded in iframe)
  useEffect(() => {
    const handlePostMessage = (e) => {
      if (!e.data || typeof e.data !== 'object') return;

      switch (e.data.type) {
        case 'SHOWCASE_SET_VIEW':
          if (['city', 'grid'].includes(e.data.view)) {
            setViewMode(e.data.view);
          }
          break;

        case 'SHOWCASE_OPEN_CASE':
          if (e.data.caseId) {
            const found = useCases.find(c => c.id === e.data.caseId);
            if (found) setActiveDossierCase(found);
          } else {
            setActiveDossierCase(null);
          }
          break;

        case 'SHOWCASE_SELECT_DISTRICT':
          if (e.data.districtId) {
            setActiveDistrictId(e.data.districtId);
            setViewMode('city');
          }
          break;

        case 'SHOWCASE_FILTER_THEME':
          setSelectedThemeId(e.data.themeId ?? null);
          break;

        case 'SHOWCASE_SET_SEARCH':
          setSearchTerm(e.data.search || '');
          break;

        default:
          break;
      }
    };

    window.addEventListener('message', handlePostMessage);

    // Announce ready state to parent window if inside an iframe
    if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
      try {
        window.parent.postMessage({ type: 'SHOWCASE_READY', totalCases: useCases.length }, '*');
      } catch (err) {
        // Ignore cross-origin error
      }
    }

    return () => window.removeEventListener('message', handlePostMessage);
  }, [useCases]);

  // Filtered use cases
  const filteredUseCases = useMemo(() => {
    return useCases.filter(c => {
      // Theme filter
      if (selectedThemeId !== null && c.themeId !== selectedThemeId) {
        return false;
      }

      // Search filter
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesTitle = c.title?.toLowerCase().includes(q);
        const matchesStatement = c.statement.toLowerCase().includes(q);
        const matchesTheme = c.themeTitle.toLowerCase().includes(q);
        const matchesShort = c.shortWriteUp?.toLowerCase().includes(q);
        const matchesDetailed = typeof c.detailedWriteUp === 'string' 
          ? c.detailedWriteUp.toLowerCase().includes(q) 
          : JSON.stringify(c.detailedWriteUp).toLowerCase().includes(q);

        if (!matchesTitle && !matchesStatement && !matchesTheme && !matchesShort && !matchesDetailed) {
          return false;
        }
      }

      return true;
    });
  }, [useCases, selectedThemeId, searchTerm]);

  // Save single use case update
  const handleSaveCase = (updatedCase) => {
    setUseCases(prev => {
      const updatedList = prev.map(c => c.id === updatedCase.id ? updatedCase : c);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      } catch (e) {
        console.warn("Failed to write to localStorage", e);
      }
      return updatedList;
    });

    // Automatically synchronize the active dossier if open
    setActiveDossierCase(prev => {
      if (!prev) return null;
      if (prev.id === updatedCase.id) return updatedCase;
      return prev;
    });
  };

  // Reset to empty prompts
  const handleResetAll = () => {
    if (window.confirm("Reset all 20 use cases to their clean blueprint state?")) {
      setUseCases(INITIAL_USE_CASES);
      localStorage.removeItem(STORAGE_KEY);
      setActiveDossierCase(prev => {
        if (!prev) return null;
        return INITIAL_USE_CASES.find(c => c.id === prev.id) || null;
      });
    }
  };

  // Open editor for a specific case
  const handleEditCase = (c) => {
    setEditorCaseId(c.id);
    setIsEditorOpen(true);
  };

  // Dossier navigation
  const currentDossierIndex = useMemo(() => {
    if (!activeDossierCase) return -1;
    return filteredUseCases.findIndex(c => c.id === activeDossierCase.id);
  }, [activeDossierCase, filteredUseCases]);

  const handlePrevDossier = () => {
    if (filteredUseCases.length === 0) return;
    const prevIdx = (currentDossierIndex - 1 + filteredUseCases.length) % filteredUseCases.length;
    setActiveDossierCase(filteredUseCases[prevIdx]);
  };

  const handleNextDossier = () => {
    if (filteredUseCases.length === 0) return;
    const nextIdx = (currentDossierIndex + 1) % filteredUseCases.length;
    setActiveDossierCase(filteredUseCases[nextIdx]);
  };

  // Export all projects as structured JSON file
  const handleExportJSON = () => {
    const exportData = {
      metadata: {
        title: "ARCS - XRDT - GCC — Enterprise Digital Twin & Spatial Computing Blueprint Repository",
        exportedAt: new Date().toISOString(),
        totalProjects: useCases.length,
        totalDomains: THEMES.length,
        description: "Structured project requirements, short write-ups, architecture breakdowns, and prototype demonstration blueprints for all 20 ARCS - XRDT - GCC real-time use cases."
      },
      domains: THEMES.map(t => ({
        id: t.id,
        title: t.title,
        shortTitle: t.shortTitle,
        domain: t.domain,
        color: t.color
      })),
      projects: useCases.map((uc, idx) => {
        const theme = THEMES.find(t => t.id === uc.themeId);
        const lines = (uc.shortWriteUp || "").split("\n");
        const summary = lines[0] ? lines[0].replace(/^•\s*/, "").trim() : "";
        const techStackMatch = (uc.shortWriteUp || "").match(/Technology Stack?:?\s*([^]+?)(?=\n\n|\n[A-Z]|$)/i);
        const outcomeMatch = (uc.shortWriteUp || "").match(/Outcome:?\s*([^]+?)(?=\n\n|\n[A-Z]|$)/i);
        const howItWorksMatch = (uc.shortWriteUp || "").match(/How It Works:?\s*([^\n]+)/i);

        return {
          projectNumber: idx + 1,
          id: uc.id,
          themeId: uc.themeId,
          domain: theme?.domain || "General",
          themeTitle: uc.themeTitle,
          title: uc.title,
          problemStatement: uc.statement,
          summary: summary,
          workflowPipeline: howItWorksMatch ? howItWorksMatch[1].trim() : "",
          technologies: techStackMatch ? techStackMatch[1].replace(/\n/g, " ").trim() : "",
          expectedOutcome: outcomeMatch ? outcomeMatch[1].replace(/\n/g, " ").trim() : "",
          imageAsset: uc.image || "",
          shortWriteUp: uc.shortWriteUp || "",
          detailedTechnicalBlueprint: uc.detailedWriteUp || ""
        };
      })
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "arcs_xrdt_gcc_digital_twin_blueprints.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const shouldHideHeader = isEmbedMode || hideHeaderFromUrl;
  const shouldHideFooter = isEmbedMode || hideFooterFromUrl;

  return (
    <div className={`showcase-app-root ${isEmbedMode ? 'is-embed-mode' : ''}`}>
      <div className="ambient-background-glow glow-top-left" />
      <div className="ambient-background-glow glow-bottom-right" />
      <div className="ambient-grid-overlay" />

      {/* Cinematic Intro Splash Entrance */}
      {showSplash && (
        <IntroSplashOverlay onComplete={() => setShowSplash(false)} />
      )}

      {/* Header (Hidden in Clean Embed Mode) */}
      {!shouldHideHeader && (
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onExportJSON={handleExportJSON}
          onOpenEmbed={handleOpenEmbed}
          totalCases={useCases.length}
          filteredCount={filteredUseCases.length}
        />
      )}

      {/* Theme Filters Row (Grid mode only) */}
      {viewMode === 'grid' && (
        <ThemeFilter
          selectedThemeId={selectedThemeId}
          onSelectTheme={setSelectedThemeId}
          useCases={useCases}
        />
      )}

      {/* Main Content */}
      <main className={`showcase-main-content ${viewMode === 'city' ? 'is-city-mode' : ''} ${isEmbedMode ? 'is-embedded' : ''}`}>
        {viewMode === 'city' ? (
          <City3DCanvas
            allUseCases={useCases}
            onOpenDossier={setActiveDossierCase}
            onLaunchLiveDemo={handleLaunchLiveDemo}
            initialDistrictId={activeDistrictId}
            initialAutoRotate={initialAutoRotate}
            hideControls={hideControlsFromUrl}
            onOpenEmbed={handleOpenEmbed}
          />
        ) : (
          <>
            {filteredUseCases.length === 0 ? (
              <div className="empty-results-box">
                <Layers size={48} className="empty-icon" />
                <h3>No Matching Use Cases</h3>
                <p>Try clearing your search query or selecting "All Domains".</p>
                <button 
                  className="btn-clear-filters"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedThemeId(null);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="use-case-cards-grid">
                {filteredUseCases.map((useCase) => {
                  const theme = THEMES.find(t => t.id === useCase.themeId);
                  return (
                    <UseCaseCard
                      key={useCase.id}
                      useCase={useCase}
                      theme={theme}
                      onOpenDossier={setActiveDossierCase}
                      onLaunchLiveDemo={handleLaunchLiveDemo}
                      onEditCase={handleEditCase}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer (Hidden in Clean Embed Mode) */}
      {!shouldHideFooter && (
        <footer className="showcase-footer">
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-status-bullet" />
              <span>ARCS - XRDT - GCC • 10 DOMAINS • 20 DIGITAL TWIN BLUEPRINTS</span>
            </div>
            <div className="footer-right">
              <span>ENTERPRISE SPATIAL COMPUTING &amp; REAL-TIME REPLICA PLATFORM</span>
            </div>
          </div>
        </footer>
      )}

      {/* Modal: Details Dossier */}
      {activeDossierCase && (
        <DossierModal
          useCase={activeDossierCase}
          onClose={() => setActiveDossierCase(null)}
          onPrev={handlePrevDossier}
          onNext={handleNextDossier}
          onEditCase={handleEditCase}
          onOpenEmbed={handleOpenEmbed}
          onLaunchLiveDemo={handleLaunchLiveDemo}
          currentIndex={currentDossierIndex}
          totalCases={filteredUseCases.length}
        />
      )}

      {/* Modal: Content & Image Uploader */}
      <ContentEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        useCases={useCases}
        onSaveCase={handleSaveCase}
        onResetAll={handleResetAll}
        initialCaseId={editorCaseId}
      />

      {/* Modal: Embed & Share iFrame Generator */}
      <EmbedModal
        isOpen={isEmbedModalOpen}
        onClose={() => setIsEmbedModalOpen(false)}
        useCases={useCases}
        initialTarget={embedModalTarget}
        initialDistrictId={embedModalDistrictId}
        initialCaseId={embedModalCaseId}
      />

      {/* Modal: Live Simulation Viewer with Back to 3D City */}
      {activeLiveDemo && (
        <LiveSimulationViewer
          isOpen={!!activeLiveDemo}
          url={activeLiveDemo.url}
          title={activeLiveDemo.title}
          districtId={activeLiveDemo.districtId}
          districtName={activeLiveDemo.districtName}
          accentColor={activeLiveDemo.accentColor}
          onClose={() => setActiveLiveDemo(null)}
          onBackToCity={handleBackToCityFromLiveDemo}
        />
      )}
    </div>
  );
}
