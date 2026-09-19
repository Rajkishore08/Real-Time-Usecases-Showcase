import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Upload, 
  Image as ImageIcon, 
  Save, 
  Download, 
  Check, 
  FileText, 
  Sparkles, 
  RotateCcw, 
  Heading, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContentEditorModal({
  isOpen,
  onClose,
  useCases,
  onSaveCase,
  onResetAll,
  initialCaseId
}) {
  const [selectedId, setSelectedId] = useState(initialCaseId || useCases[0]?.id || 't1-u1');
  const [formData, setFormData] = useState({
    title: '',
    statement: '',
    image: '',
    shortWriteUp: '',
    detailedWriteUp: ''
  });
  const [isDirty, setIsDirty] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const statusTimerRef = useRef(null);

  // Helper to load case data into state
  const loadCaseIntoForm = (caseId, list = useCases) => {
    const target = list.find(c => c.id === caseId) || list[0];
    if (target) {
      setFormData({
        title: target.title || '',
        statement: target.statement || '',
        image: target.image || '',
        shortWriteUp: target.shortWriteUp || '',
        detailedWriteUp: typeof target.detailedWriteUp === 'string' 
          ? target.detailedWriteUp 
          : JSON.stringify(target.detailedWriteUp || '', null, 2)
      });
      setIsDirty(false);
    }
  };

  // Sync state whenever modal opens or initialCaseId changes
  useEffect(() => {
    if (isOpen) {
      const targetId = initialCaseId || selectedId || useCases[0]?.id;
      setSelectedId(targetId);
      loadCaseIntoForm(targetId, useCases);
    }
  }, [isOpen, initialCaseId]);

  const activeCase = useCases.find(c => c.id === selectedId) || useCases[0];

  const showStatus = (msg, isError = false) => {
    if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    setStatusMessage({ text: msg, isError });
    statusTimerRef.current = setTimeout(() => {
      setStatusMessage(null);
    }, 3000);
  };

  // Execute Save
  const executeSave = (shouldClose = false) => {
    if (!activeCase) return;

    const updated = {
      ...activeCase,
      title: formData.title.trim() || activeCase.title || `Use Case ${activeCase.caseNumber}`,
      statement: formData.statement.trim() || activeCase.statement,
      image: formData.image?.trim() ? formData.image.trim() : null,
      shortWriteUp: formData.shortWriteUp || '',
      detailedWriteUp: formData.detailedWriteUp || ''
    };

    onSaveCase(updated);
    setIsDirty(false);

    try {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.85 }
      });
    } catch (e) {
      // ignore
    }

    if (shouldClose) {
      onClose();
    } else {
      showStatus(`Saved "${updated.title}" successfully!`);
    }
  };

  // Switch Case in Dropdown
  const handleSelectCase = (newId) => {
    if (newId === selectedId) return;

    // Auto-save current case if user made changes
    if (isDirty && activeCase) {
      executeSave(false);
      showStatus(`Auto-saved previous case (${activeCase.title || `Case ${activeCase.caseNumber}`})`);
    }

    setSelectedId(newId);
    loadCaseIntoForm(newId, useCases);
  };

  // Compress & Resize image to safely fit in LocalStorage without quota errors
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsCompressing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        try {
          const MAX_DIM = 1400;
          let { width, height } = img;

          if (width > height && width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          } else if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Compress to JPEG with 0.84 quality (~100KB-200KB)
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.84);
          setFormData(prev => ({
            ...prev,
            image: compressedDataUrl
          }));
          setIsDirty(true);
          showStatus("Image uploaded and optimized successfully!");
        } catch (err) {
          console.error("Image processing error", err);
          setFormData(prev => ({
            ...prev,
            image: event.target?.result
          }));
          setIsDirty(true);
        } finally {
          setIsCompressing(false);
        }
      };
      img.onerror = () => {
        setIsCompressing(false);
        showStatus("Could not process image file", true);
      };
      img.src = event.target?.result;
    };
    reader.readAsDataURL(file);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(useCases, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `showcase_use_cases.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showStatus("Exported complete showcase data as JSON!");
  };

  const handleCloseModal = () => {
    // If dirty, auto-save before closing so user never loses work!
    if (isDirty && activeCase) {
      executeSave(false);
    }
    onClose();
  };

  if (!isOpen || !activeCase) return null;

  const portalTarget = typeof document !== 'undefined' ? (document.fullscreenElement || document.body) : null;
  if (!portalTarget) return null;

  return createPortal(
    <div className="modal-backdrop editor-modal-backdrop" onClick={handleCloseModal}>
      <div 
        className="editor-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="editor-modal-header">
          <div className="editor-header-title">
            <div className="editor-badge">
              <Sparkles size={14} />
              <span>CONTENT &amp; IMAGE WORKSHOP</span>
            </div>
            <h3>Edit Use Case Content &amp; Upload Infographics</h3>
            <p>Customize titles, statement queries, high-res infographics, short write-ups, and full technical blueprints.</p>
          </div>

          <div className="editor-header-actions">
            <button 
              className="btn-editor-export"
              onClick={handleExportJSON}
              title="Download all showcase data as JSON backup"
            >
              <Download size={15} />
              <span className="btn-action-text">Export JSON</span>
            </button>
            <button 
              className="btn-editor-reset"
              onClick={onResetAll}
              title="Reset all cases to baseline blueprints"
            >
              <RotateCcw size={15} />
              <span className="btn-action-text">Reset All</span>
            </button>
            <button className="modal-close-btn" onClick={handleCloseModal} title="Close Editor">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Dropdown Selector */}
        <div className="editor-selector-bar">
          <div className="selector-title-wrap">
            <label className="selector-label">Select Use Case to Edit:</label>
            {isDirty && (
              <span className="unsaved-indicator-pill">
                ● Unsaved changes (will auto-save on switch)
              </span>
            )}
          </div>
          <select 
            value={selectedId} 
            onChange={(e) => handleSelectCase(e.target.value)}
            className="editor-select-dropdown"
          >
            {useCases.map((c) => {
              const hasReadyContent = Boolean(c.image || c.shortWriteUp);
              const labelTitle = c.title || c.statement.substring(0, 48) + '...';
              return (
                <option key={c.id} value={c.id}>
                  {hasReadyContent ? '✅ Ready' : '⏳ Empty'} • Theme {c.themeId} Case {c.caseNumber}: {labelTitle}
                </option>
              );
            })}
          </select>
        </div>

        {/* Form Body */}
        <div className="editor-modal-scroll">
          {/* Section 1: Title & Statement */}
          <div className="editor-form-card">
            <div className="form-card-title">
              <Heading size={18} className="text-accent" />
              <h4>Title &amp; Use Case Problem Statement</h4>
            </div>

            <div className="form-field-group">
              <label>Use Case Title:</label>
              <input 
                type="text"
                placeholder="e.g. Bioreactor Digital Twin"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                  setIsDirty(true);
                }}
                className="editor-text-input"
              />
            </div>

            <div className="form-field-group">
              <label>Use Case Statement / Question:</label>
              <textarea 
                rows={2}
                value={formData.statement}
                onChange={(e) => {
                  setFormData({ ...formData, statement: e.target.value });
                  setIsDirty(true);
                }}
                className="editor-textarea"
                placeholder="The exact problem statement or question..."
              />
            </div>
          </div>

          {/* Section 2: Image Upload */}
          <div className="editor-form-card">
            <div className="form-card-title">
              <ImageIcon size={18} className="text-accent" />
              <h4>Use Case Infographic / Visual Diagram</h4>
            </div>

            <div className="image-upload-row">
              <div className="image-preview-box">
                {formData.image ? (
                  <div className="preview-img-container">
                    <img src={formData.image} alt="Preview" className="uploaded-thumb-preview" />
                    <button 
                      className="btn-overlay-remove-image"
                      onClick={() => {
                        setFormData({ ...formData, image: '' });
                        setIsDirty(true);
                      }}
                      title="Remove Image"
                    >
                      <X size={14} /> Remove
                    </button>
                  </div>
                ) : (
                  <div className="image-preview-empty">
                    <ImageIcon size={32} opacity={0.3} />
                    <span>No image uploaded yet</span>
                  </div>
                )}
              </div>

              <div className="image-upload-controls">
                <label className={`btn-file-upload ${isCompressing ? 'disabled' : ''}`}>
                  {isCompressing ? <Loader2 size={16} className="spin-icon" /> : <Upload size={16} />}
                  <span>{isCompressing ? "Optimizing Image..." : "Upload Image File (PNG, JPG, WebP)"}</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    disabled={isCompressing}
                    onChange={handleImageUpload} 
                    style={{ display: 'none' }}
                  />
                </label>

                <div className="or-divider">OR ENTER IMAGE FILE PATH / URL:</div>

                <input 
                  type="text"
                  placeholder="e.g. /images/bioreactor-digital-twin.jpg or https://..."
                  value={formData.image || ''}
                  onChange={(e) => {
                    setFormData({ ...formData, image: e.target.value });
                    setIsDirty(true);
                  }}
                  className="editor-text-input"
                />

                <p className="image-tip-note">
                  💡 High-resolution images are automatically compressed to ensure instant loading and permanent persistence.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Short Write-up */}
          <div className="editor-form-card">
            <div className="form-card-title">
              <Sparkles size={18} className="text-accent" />
              <h4>Short Write-Up (Summary, Pipeline &amp; Core Architecture)</h4>
            </div>
            <div className="form-field-group">
              <textarea 
                rows={5}
                value={formData.shortWriteUp}
                onChange={(e) => {
                  setFormData({ ...formData, shortWriteUp: e.target.value });
                  setIsDirty(true);
                }}
                className="editor-textarea"
                placeholder="Paste the short summary, sensor flow (e.g. Sensors → IoT Gateway → Digital Twin → Action), and key highlights..."
              />
            </div>
          </div>

          {/* Section 4: Detailed Write-up */}
          <div className="editor-form-card">
            <div className="form-card-title">
              <FileText size={18} className="text-accent" />
              <h4>Detailed Solution Write-Up (Full Engineering Dossier)</h4>
            </div>
            <div className="form-field-group">
              <textarea 
                rows={10}
                value={formData.detailedWriteUp}
                onChange={(e) => {
                  setFormData({ ...formData, detailedWriteUp: e.target.value });
                  setIsDirty(true);
                }}
                className="editor-textarea font-mono-textarea"
                placeholder="Paste your complete in-depth blueprint: problem definition, sensors, communication protocols, digital twin engine, predictive AI models, what-if simulation, and closed-loop control outcome..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="editor-modal-footer">
          <div className="footer-status-msg">
            {statusMessage ? (
              <span className={`status-pill-message ${statusMessage.isError ? 'error' : 'success'}`}>
                {statusMessage.isError ? <AlertCircle size={15} /> : <CheckCircle2 size={15} />}
                <span>{statusMessage.text}</span>
              </span>
            ) : isDirty ? (
              <span className="unsaved-footer-text">
                ● You have unsaved edits in this use case.
              </span>
            ) : (
              <span>All changes are automatically synced and persisted.</span>
            )}
          </div>

          <div className="footer-save-btns">
            <button className="btn-cancel" onClick={handleCloseModal}>
              Close
            </button>
            <button 
              className="btn-save-case-continue" 
              onClick={() => executeSave(false)}
              title="Save changes and continue editing"
            >
              <Save size={15} />
              <span>Save &amp; Keep Editing</span>
            </button>
            <button 
              className="btn-save-case btn-primary-save" 
              onClick={() => executeSave(true)}
              title="Save changes and return to showcase"
            >
              <Check size={16} />
              <span>Save &amp; Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    portalTarget
  );
}
