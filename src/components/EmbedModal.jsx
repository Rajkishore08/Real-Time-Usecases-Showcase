import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Code2, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe, 
  LayoutGrid, 
  FileText, 
  Sliders, 
  Eye, 
  Share2, 
  Sparkles,
  Terminal,
  Maximize2
} from 'lucide-react';
import { CITY_DISTRICTS } from './city/cityDistrictsData';
import { THEMES } from '../data/useCases';

export default function EmbedModal({
  isOpen,
  onClose,
  useCases = [],
  initialTarget = 'city', // 'city', 'grid', 'case'
  initialDistrictId = null,
  initialCaseId = null
}) {
  const [embedTarget, setEmbedTarget] = useState(initialTarget === 'presentation' ? 'city' : initialTarget);
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrictId || 'overview');
  const [selectedCaseId, setSelectedCaseId] = useState(initialCaseId || (useCases[0]?.id || 't1-u1'));
  const [selectedThemeId, setSelectedThemeId] = useState('all');

  // Customization Options
  const [cleanEmbed, setCleanEmbed] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hideControls, setHideControls] = useState(false);
  const [embedWidth, setEmbedWidth] = useState('100%');
  const [embedHeight, setEmbedHeight] = useState('720px');
  const [borderRadius, setBorderRadius] = useState('12px');
  const [codeFormat, setCodeFormat] = useState('html'); // 'html', 'url', 'react', 'postmessage'
  const [copied, setCopied] = useState(false);
  const [previewTab, setPreviewTab] = useState('preview'); // 'preview', 'code'

  // Sync initial props when opened
  useEffect(() => {
    if (initialTarget) setEmbedTarget(initialTarget === 'presentation' ? 'city' : initialTarget);
    if (initialDistrictId) setSelectedDistrict(initialDistrictId);
    if (initialCaseId) setSelectedCaseId(initialCaseId);
  }, [initialTarget, initialDistrictId, initialCaseId, isOpen]);

  // Compute Base URL
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://real-time-showcase.web.app';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Construct Embed URL Query String
  const embedUrl = useMemo(() => {
    const params = new URLSearchParams();

    if (cleanEmbed) params.set('embed', 'true');

    if (embedTarget === 'city') {
      params.set('view', 'city');
      if (selectedDistrict && selectedDistrict !== 'overview') {
        params.set('district', selectedDistrict);
      }
      if (!autoRotate) params.set('autoRotate', 'false');
      if (hideControls) params.set('hideControls', 'true');
    } else if (embedTarget === 'grid') {
      params.set('view', 'grid');
      if (selectedThemeId && selectedThemeId !== 'all') {
        params.set('theme', selectedThemeId);
      }
    } else if (embedTarget === 'case') {
      params.set('useCase', selectedCaseId);
      params.set('view', 'grid');
    }

    const qs = params.toString();
    return `${origin}${pathname}${qs ? '?' + qs : ''}`;
  }, [origin, pathname, cleanEmbed, embedTarget, selectedDistrict, autoRotate, hideControls, selectedThemeId, selectedCaseId]);

  // Generate Code Snippets
  const codeSnippet = useMemo(() => {
    switch (codeFormat) {
      case 'url':
        return embedUrl;

      case 'react':
        return `<iframe
  src="${embedUrl}"
  width="${embedWidth}"
  height="${embedHeight}"
  style={{
    border: 'none',
    borderRadius: '${borderRadius}',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
    width: '${embedWidth}',
    height: '${embedHeight}'
  }}
  allow="fullscreen; accelerometer; gyroscope"
  loading="lazy"
  title="ARCS - XRDT - GCC — Enterprise Digital Twin &amp; Spatial Computing Showcase"
/>`;

      case 'postmessage':
        return `<!-- 1. Embed iframe -->
<iframe id="showcaseFrame" src="${embedUrl}" width="${embedWidth}" height="${embedHeight}" style="border:none; border-radius:${borderRadius};" title="ARCS - XRDT - GCC"></iframe>

<!-- 2. Communicate via postMessage API -->
<script>
  const iframe = document.getElementById('showcaseFrame');

  // Change 3D district dynamically
  function focusDistrict(districtId) {
    iframe.contentWindow.postMessage({ type: 'SHOWCASE_SELECT_DISTRICT', districtId: districtId }, '*');
  }

  // Open specific use case dossier
  function openUseCase(caseId) {
    iframe.contentWindow.postMessage({ type: 'SHOWCASE_OPEN_CASE', caseId: caseId }, '*');
  }

  // Listen to events from the showcase
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'SHOWCASE_DISTRICT_CLICKED') {
      console.log('User clicked district:', event.data.districtId);
    }
  });
</script>`;

      case 'html':
      default:
        return `<iframe 
  src="${embedUrl}" 
  width="${embedWidth}" 
  height="${embedHeight}" 
  style="border: none; border-radius: ${borderRadius}; box-shadow: 0 20px 40px rgba(0,0,0,0.6); width: ${embedWidth}; height: ${embedHeight};" 
  allow="fullscreen; accelerometer; gyroscope" 
  loading="lazy"
  title="ARCS - XRDT - GCC — Enterprise Digital Twin &amp; Spatial Computing Showcase">
</iframe>`;
    }
  }, [codeFormat, embedUrl, embedWidth, embedHeight, borderRadius]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen || !mounted) return null;

  const portalTarget = (typeof document !== 'undefined' && document.body && document.body.nodeType === 1)
    ? ((document.fullscreenElement && document.fullscreenElement.nodeType === 1) ? document.fullscreenElement : document.body)
    : null;

  if (!portalTarget) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="embed-modal-window glass-panel-luxury"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="embed-modal-header">
          <div className="embed-modal-title">
            <div className="embed-icon-badge">
              <Code2 size={20} className="cyan-glow-icon" />
            </div>
            <div>
              <h3>Embed &amp; Share iFrame</h3>
              <p>Generate responsive HTML `&lt;iframe&gt;` snippets or URLs for external portals &amp; dashboards</p>
            </div>
          </div>
          <button className="btn-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="embed-modal-body">
          {/* Left Column: Embed Configurator */}
          <div className="embed-config-panel">
            {/* 1. Target Selector */}
            <div className="embed-section">
              <label className="embed-section-title">
                <Sparkles size={14} />
                <span>1. Select Content to Embed</span>
              </label>
              <div className="embed-target-grid">
                <button 
                  className={`embed-target-btn ${embedTarget === 'city' ? 'is-active' : ''}`}
                  onClick={() => setEmbedTarget('city')}
                >
                  <Globe size={16} />
                  <span>3D Digital Twin City</span>
                </button>
                <button 
                  className={`embed-target-btn ${embedTarget === 'case' ? 'is-active' : ''}`}
                  onClick={() => setEmbedTarget('case')}
                >
                  <FileText size={16} />
                  <span>Single Use Case</span>
                </button>
                <button 
                  className={`embed-target-btn ${embedTarget === 'grid' ? 'is-active' : ''}`}
                  onClick={() => setEmbedTarget('grid')}
                >
                  <LayoutGrid size={16} />
                  <span>All Use Cases Grid</span>
                </button>
              </div>
            </div>

            {/* 2. Target Specific Options */}
            {embedTarget === 'city' && (
              <div className="embed-section">
                <label className="embed-section-title">
                  <span>Initial District Focus</span>
                </label>
                <select 
                  className="embed-select-input"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  <option value="overview">🌐 Full City Aerial Overview</option>
                  {CITY_DISTRICTS.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.category})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {embedTarget === 'case' && (
              <div className="embed-section">
                <label className="embed-section-title">
                  <span>Select Specific Use Case</span>
                </label>
                <select 
                  className="embed-select-input"
                  value={selectedCaseId}
                  onChange={(e) => setSelectedCaseId(e.target.value)}
                >
                  {useCases.map((uc, i) => (
                    <option key={uc.id} value={uc.id}>
                      #{i + 1} • {uc.title} ({uc.themeTitle?.split(':')[0]})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {embedTarget === 'grid' && (
              <div className="embed-section">
                <label className="embed-section-title">
                  <span>Filter by Theme Domain</span>
                </label>
                <select 
                  className="embed-select-input"
                  value={selectedThemeId}
                  onChange={(e) => setSelectedThemeId(e.target.value)}
                >
                  <option value="all">All 10 Domains (20 Use Cases)</option>
                  {THEMES.map(t => (
                    <option key={t.id} value={t.id}>
                      Theme {t.id}: {t.domain}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* 3. Embed Display Parameters */}
            <div className="embed-section">
              <label className="embed-section-title">
                <Sliders size={14} />
                <span>2. Display &amp; Frame Settings</span>
              </label>
              
              <div className="embed-toggles-list">
                <label className="embed-checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={cleanEmbed} 
                    onChange={(e) => setCleanEmbed(e.target.checked)} 
                  />
                  <span><strong>Clean Embed Mode</strong> (Hide main site header &amp; footer)</span>
                </label>

                {embedTarget === 'city' && (
                  <>
                    <label className="embed-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={autoRotate} 
                        onChange={(e) => setAutoRotate(e.target.checked)} 
                      />
                      <span>Auto-Rotate 3D City View</span>
                    </label>

                    <label className="embed-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={hideControls} 
                        onChange={(e) => setHideControls(e.target.checked)} 
                      />
                      <span>Hide Bottom Navigation Mini-Bar</span>
                    </label>
                  </>
                )}
              </div>

              {/* Dimensions Presets */}
              <div className="embed-dimension-row">
                <div className="embed-dim-field">
                  <label>Width</label>
                  <input 
                    type="text" 
                    value={embedWidth} 
                    onChange={(e) => setEmbedWidth(e.target.value)}
                    className="embed-dim-input"
                    placeholder="100%"
                  />
                </div>
                <div className="embed-dim-field">
                  <label>Height</label>
                  <input 
                    type="text" 
                    value={embedHeight} 
                    onChange={(e) => setEmbedHeight(e.target.value)}
                    className="embed-dim-input"
                    placeholder="720px"
                  />
                </div>
                <div className="embed-dim-field">
                  <label>Corner Radius</label>
                  <input 
                    type="text" 
                    value={borderRadius} 
                    onChange={(e) => setBorderRadius(e.target.value)}
                    className="embed-dim-input"
                    placeholder="12px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Preview & Code Generator */}
          <div className="embed-preview-panel">
            {/* Tabs for Preview vs Code */}
            <div className="embed-panel-tabs">
              <div className="embed-tab-group">
                <button 
                  className={`embed-panel-tab ${previewTab === 'preview' ? 'is-active' : ''}`}
                  onClick={() => setPreviewTab('preview')}
                >
                  <Eye size={14} />
                  <span>Live iFrame Preview</span>
                </button>
                <button 
                  className={`embed-panel-tab ${previewTab === 'code' ? 'is-active' : ''}`}
                  onClick={() => setPreviewTab('code')}
                >
                  <Terminal size={14} />
                  <span>Export Code</span>
                </button>
              </div>

              <a 
                href={embedUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="embed-open-link"
                title="Test in new browser window"
              >
                <span>Open in Tab</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Live Interactive iframe Container */}
            {previewTab === 'preview' ? (
              <div className="embed-live-frame-container">
                <div className="embed-frame-header-bar">
                  <span className="embed-dot dot-red" />
                  <span className="embed-dot dot-yellow" />
                  <span className="embed-dot dot-green" />
                  <span className="embed-url-display">{embedUrl}</span>
                </div>
                <div className="embed-iframe-viewport">
                  <iframe 
                    key={embedUrl}
                    src={embedUrl}
                    title="Live Showcase Embed Preview"
                    className="embed-preview-iframe"
                    allow="fullscreen; accelerometer; gyroscope"
                  />
                </div>
              </div>
            ) : (
              /* Code Generator Box */
              <div className="embed-code-box-container">
                <div className="embed-format-pills">
                  <button 
                    className={`format-pill ${codeFormat === 'html' ? 'active' : ''}`}
                    onClick={() => setCodeFormat('html')}
                  >
                    HTML &lt;iframe&gt;
                  </button>
                  <button 
                    className={`format-pill ${codeFormat === 'url' ? 'active' : ''}`}
                    onClick={() => setCodeFormat('url')}
                  >
                    Direct URL
                  </button>
                  <button 
                    className={`format-pill ${codeFormat === 'react' ? 'active' : ''}`}
                    onClick={() => setCodeFormat('react')}
                  >
                    React JSX
                  </button>
                  <button 
                    className={`format-pill ${codeFormat === 'postmessage' ? 'active' : ''}`}
                    onClick={() => setCodeFormat('postmessage')}
                  >
                    PostMessage API
                  </button>
                </div>

                <div className="embed-code-snippet-box">
                  <pre><code>{codeSnippet}</code></pre>
                </div>
              </div>
            )}

            {/* Quick Action Footer */}
            <div className="embed-actions-row">
              <div className="embed-share-tip">
                <span>💡 Host apps can embed with zero-configuration across Webflow, WordPress, React, or custom portals.</span>
              </div>
              <div className="embed-btn-group">
                <button 
                  className="btn-copy-embed"
                  onClick={handleCopy}
                  title="Copy code snippet to clipboard"
                >
                  {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  <span>{copied ? "Copied to Clipboard!" : "Copy iFrame Code"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
