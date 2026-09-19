import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_USE_CASES, THEMES } from './data/useCases';
import Header from './components/Header';
import ThemeFilter from './components/ThemeFilter';
import UseCaseCard from './components/UseCaseCard';
import DossierModal from './components/DossierModal';
import PresentationView from './components/PresentationView';
import ContentEditorModal from './components/ContentEditorModal';
import City3DCanvas from './components/city/City3DCanvas';
import { Layers } from 'lucide-react';

const STORAGE_KEY = 'REALTIME_SHOWCASE_CONTENT_V8';

export default function App() {
  // Clean up legacy keys
  useEffect(() => {
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

  const [selectedThemeId, setSelectedThemeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('city'); // 'city', 'grid' or 'presentation'

  // Modals state
  const [activeDossierCase, setActiveDossierCase] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorCaseId, setEditorCaseId] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(useCases));
    } catch (e) {
      console.warn("Failed to write to localStorage", e);
    }
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
        title: "Real-Time Digital Twin & AR Showcase — Prototype Requirements & Blueprints",
        exportedAt: new Date().toISOString(),
        totalProjects: useCases.length,
        totalDomains: THEMES.length,
        description: "Structured project requirements, short write-ups, architecture breakdowns, and prototype demonstration blueprints for all 20 real-time use cases."
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
    downloadAnchor.setAttribute("download", "realtime_showcase_prototype_requirements.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="showcase-app-root">
      <div className="ambient-background-glow glow-top-left" />
      <div className="ambient-background-glow glow-bottom-right" />
      <div className="ambient-grid-overlay" />

      {/* Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onExportJSON={handleExportJSON}
        onOpenEditor={() => {
          const targetId = activeDossierCase?.id || filteredUseCases[0]?.id || useCases[0]?.id;
          setEditorCaseId(targetId);
          setIsEditorOpen(true);
        }}
        totalCases={useCases.length}
        filteredCount={filteredUseCases.length}
      />

      {/* Theme Filters Row (Grid mode only) */}
      {viewMode === 'grid' && (
        <ThemeFilter
          selectedThemeId={selectedThemeId}
          onSelectTheme={setSelectedThemeId}
          useCases={useCases}
        />
      )}

      {/* Main Content */}
      <main className={`showcase-main-content ${viewMode === 'city' ? 'is-city-mode' : ''}`}>
        {viewMode === 'city' ? (
          <City3DCanvas
            allUseCases={useCases}
            onOpenDossier={setActiveDossierCase}
          />
        ) : viewMode === 'grid' ? (
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
                      onEditCase={handleEditCase}
                    />
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <PresentationView
            useCases={filteredUseCases.length > 0 ? filteredUseCases : useCases}
            onOpenDossier={setActiveDossierCase}
            onEditCase={handleEditCase}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="showcase-footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-status-bullet" />
            <span>REAL-TIME SHOWCASE • 10 THEMES • 20 USE CASES</span>
          </div>
          <div className="footer-right">
            <span>SHOWCASING LIVE SOLUTIONS &amp; ARCHITECTURE INFOGRAPHICS</span>
          </div>
        </div>
      </footer>

      {/* Modal: Details Dossier */}
      {activeDossierCase && (
        <DossierModal
          useCase={activeDossierCase}
          onClose={() => setActiveDossierCase(null)}
          onPrev={handlePrevDossier}
          onNext={handleNextDossier}
          onEditCase={handleEditCase}
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
    </div>
  );
}
