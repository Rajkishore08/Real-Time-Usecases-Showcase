import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Copy, 
  Cpu, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Radio, 
  Code2, 
  Sliders, 
  Brain, 
  Network, 
  Zap,
  Info,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

/**
 * Visual Interactive Pipeline for text with "→" or "->" arrows
 */
export function PipelineVisualizer({ flowText, themeColor = '#00F2FE', compact = false }) {
  if (!flowText) return null;

  // Clean and split by arrow symbols
  const steps = flowText
    .replace(/^(•\s*)?(How It Works:?\s*|Closed-Loop Outcome:?\s*|Pipeline:?\s*)?/i, '')
    .split(/\s*(?:→|->)\s*/)
    .map(s => s.trim())
    .filter(Boolean);

  if (steps.length < 2) {
    return <span className="pipeline-plain-text">{flowText}</span>;
  }

  return (
    <div className={`pipeline-visual-track ${compact ? 'compact' : ''}`} style={{ '--flow-accent': themeColor }}>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div className="pipeline-step-node">
            <span className="step-number-badge">0{idx + 1}</span>
            <span className="step-label-text">{step}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className="pipeline-connector-arrow">
              <ArrowRight size={compact ? 12 : 15} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * Vertical Architecture Flowchart (for ASCII diagrams with ↓ or ├── )
 */
export function VerticalArchitectureTree({ lines, themeColor = '#00F2FE' }) {
  const [copied, setCopied] = useState(false);

  const cleanLines = lines.map(l => l.trim()).filter(Boolean);

  const handleCopy = () => {
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="vertical-arch-container" style={{ '--arch-accent': themeColor }}>
      <div className="arch-top-bar">
        <div className="arch-badge">
          <Network size={14} />
          <span>SYSTEM DATA-FLOW ARCHITECTURE</span>
        </div>
        <button className="btn-copy-code" onClick={handleCopy} title="Copy Architecture Diagram">
          {copied ? <Check size={13} className="text-success" /> : <Copy size={13} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <div className="arch-nodes-sequence">
        {cleanLines.map((line, idx) => {
          const isArrow = line === '↓' || line.startsWith('├──') || line.startsWith('└──');
          
          if (isArrow) {
            return (
              <div key={idx} className="arch-arrow-divider">
                <div className="arrow-line" />
                <ChevronDown size={14} className="arrow-down-icon" />
              </div>
            );
          }

          // Node content
          return (
            <div key={idx} className="arch-stage-node">
              <div className="stage-node-indicator" />
              <div className="stage-node-content">
                <span className="stage-node-title">{line}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Interactive Code / JSON Viewer with copy functionality
 */
export function JsonPayloadViewer({ jsonString, themeColor = '#00F2FE' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-viewer-container">
      <div className="code-header-bar">
        <div className="code-tag">
          <Code2 size={14} />
          <span>IoT JSON TELEMETRY PAYLOAD</span>
        </div>
        <button className="btn-copy-code" onClick={handleCopy}>
          {copied ? <Check size={13} className="text-success" /> : <Copy size={13} />}
          <span>{copied ? 'Copied' : 'Copy JSON'}</span>
        </button>
      </div>
      <pre className="code-body-pre">
        <code>{jsonString}</code>
      </pre>
    </div>
  );
}

/**
 * What-If Simulation Scenario Card with Risk Pills
 */
export function WhatIfScenarioCard({ line, themeColor = '#00F2FE' }) {
  const isHighRisk = line.toLowerCase().includes('high risk');
  const isMedRisk = line.toLowerCase().includes('medium risk') || line.toLowerCase().includes('med risk');
  const isLowRisk = line.toLowerCase().includes('low risk') || line.toLowerCase().includes('no risk');

  let riskVariant = 'default';
  if (isHighRisk) riskVariant = 'danger';
  else if (isMedRisk) riskVariant = 'warning';
  else if (isLowRisk) riskVariant = 'success';

  return (
    <div className={`scenario-tile-card ${riskVariant}`}>
      <div className="scenario-info-col">
        <span className="scenario-text">{line.replace(/^•\s*/, '')}</span>
      </div>
      <div className="scenario-badge-col">
        {riskVariant === 'danger' && <span className="risk-pill high">HIGH RISK</span>}
        {riskVariant === 'warning' && <span className="risk-pill med">MED RISK</span>}
        {riskVariant === 'success' && <span className="risk-pill low">OPTIMAL / LOW RISK</span>}
      </div>
    </div>
  );
}

/**
 * Formatted Short Write-Up Renderer
 */
export function FormattedShortWriteUp({ text, themeColor = '#00F2FE' }) {
  if (!text) return null;

  // Split into paragraphs / sections
  const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

  return (
    <div className="formatted-short-writeup-root" style={{ '--accent-theme': themeColor }}>
      {paragraphs.map((para, idx) => {
        // Case 1: Pipeline row (e.g. How It Works: A → B → C)
        if (para.includes('→') && (para.toLowerCase().includes('how it works') || para.toLowerCase().includes('pipeline') || para.toLowerCase().includes('sensors →'))) {
          const lines = para.split('\n');
          const flowLine = lines.find(l => l.includes('→')) || lines[0];
          const otherLines = lines.filter(l => l !== flowLine);

          return (
            <div key={idx} className="short-section-box flow-box">
              <div className="short-section-title">
                <Zap size={14} className="text-accent" />
                <span>HOW IT WORKS (LIVE DATAFLOW)</span>
              </div>
              <PipelineVisualizer flowText={flowLine} themeColor={themeColor} />
              {otherLines.length > 0 && (
                <div className="short-sub-bullets">
                  {otherLines.map((l, lIdx) => (
                    <div key={lIdx} className="bullet-row">
                      <span className="bullet-dot" />
                      <span className="bullet-text">{l.replace(/^•\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        }

        // Case 2: Technology Stack
        if (para.toLowerCase().startsWith('technology stack:') || para.toLowerCase().startsWith('technology:')) {
          const content = para.replace(/^technology(\s+stack)?:?\s*/i, '');
          const tags = content.split(/•|,|\s{2,}/).map(t => t.trim()).filter(Boolean);

          return (
            <div key={idx} className="short-section-box tech-stack-box">
              <div className="short-section-title">
                <Cpu size={14} className="text-accent" />
                <span>CORE TECHNOLOGY STACK</span>
              </div>
              <div className="tech-tags-cloud">
                {tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-badge-pill">
                    <span className="tech-pill-dot" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        }

        // Case 3: Outcome / Results
        if (para.toLowerCase().startsWith('outcome:') || para.toLowerCase().startsWith('outcomes:')) {
          const content = para.replace(/^outcomes?:?\s*/i, '');
          const items = content.includes('→') 
            ? content.split(/\s*→\s*/).filter(Boolean)
            : content.split(/•|\n/).map(i => i.trim()).filter(Boolean);

          return (
            <div key={idx} className="short-section-box outcome-box">
              <div className="short-section-title">
                <CheckCircle2 size={14} className="text-accent" />
                <span>MEASURABLE CLOSED-LOOP OUTCOMES</span>
              </div>
              <div className="outcome-items-grid">
                {items.map((item, iIdx) => (
                  <div key={iIdx} className="outcome-card-item">
                    <Check size={14} className="outcome-check-icon" />
                    <span>{item.replace(/^•\s*/, '')}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // Case 4: Simple Example / Case Study
        if (para.toLowerCase().startsWith('simple example:') || para.toLowerCase().startsWith('example:')) {
          const content = para.replace(/^(simple\s+)?example:?\s*/i, '');
          return (
            <div key={idx} className="short-section-box example-box">
              <div className="short-section-title">
                <Info size={14} className="text-accent" />
                <span>REAL-TIME SCENARIO WALKTHROUGH</span>
              </div>
              <p className="example-text">{content}</p>
            </div>
          );
        }

        // Case 5: Standard Lead / Paragraph / Bullets
        if (para.includes('•')) {
          const bulletLines = para.split('\n').filter(Boolean);
          return (
            <div key={idx} className="short-bullets-list">
              {bulletLines.map((line, bIdx) => (
                <div key={bIdx} className="bullet-row">
                  <span className="bullet-dot" />
                  <span className="bullet-text">{line.replace(/^•\s*/, '')}</span>
                </div>
              ))}
            </div>
          );
        }

        // Default: Executive Summary Lead
        return (
          <p key={idx} className="short-lead-paragraph">
            {para}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Formatted Detailed Write-Up Renderer
 */
export function FormattedDetailedWriteUp({ text, themeColor = '#00F2FE' }) {
  if (!text) return null;

  // Split text into major numbered sections (e.g. 1. The Problem, 2. Overall Architecture)
  const sectionPattern = /(?:^|\n)(?=\d+\.\s+[A-Z])/;
  const rawSections = text.split(sectionPattern);

  const getSectionIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('problem')) return <AlertTriangle size={17} className="text-pink" />;
    if (t.includes('architecture') || t.includes('pipeline')) return <Network size={17} className="text-cyan" />;
    if (t.includes('sensor') || t.includes('physical') || t.includes('camera') || t.includes('data acquisition')) return <Activity size={17} className="text-amber" />;
    if (t.includes('ai') || t.includes('model') || t.includes('ml')) return <Brain size={17} className="text-purple" />;
    if (t.includes('simulation') || t.includes('what-if') || t.includes('scenario')) return <Sliders size={17} className="text-cyan" />;
    if (t.includes('nvidia') || t.includes('omniverse') || t.includes('openusd')) return <Cpu size={17} className="text-green" />;
    if (t.includes('outcome') || t.includes('control') || t.includes('intervention')) return <CheckCircle2 size={17} className="text-green" />;
    if (t.includes('technology') || t.includes('stack')) return <Layers size={17} className="text-cyan" />;
    return <Sparkles size={17} className="text-cyan" />;
  };

  return (
    <div className="formatted-detailed-root" style={{ '--theme-accent': themeColor }}>
      {rawSections.map((sec, secIdx) => {
        const trimmed = sec.trim();
        if (!trimmed) return null;

        // Check if this section starts with "N. Title"
        const headerMatch = trimmed.match(/^(\d+)\.\s+([^\n]+)/);

        if (headerMatch) {
          const secNum = headerMatch[1];
          const secTitle = headerMatch[2];
          const secBody = trimmed.substring(headerMatch[0].length).trim();

          // Sub-parse the body
          const bodyBlocks = secBody.split(/\n\s*\n/).filter(Boolean);

          return (
            <div key={secIdx} className="detailed-section-card">
              <div className="detailed-card-header">
                <div className="header-left-cluster">
                  <span className="section-number-pill">SECTION 0{secNum}</span>
                  <div className="section-icon-wrap">
                    {getSectionIcon(secTitle)}
                  </div>
                  <h3 className="section-title-text">{secTitle}</h3>
                </div>
              </div>

              <div className="detailed-card-body">
                {bodyBlocks.map((block, bIdx) => {
                  const bTrim = block.trim();

                  // 1. JSON Payload Block
                  if (bTrim.startsWith('{') && bTrim.endsWith('}')) {
                    return <JsonPayloadViewer key={bIdx} jsonString={bTrim} themeColor={themeColor} />;
                  }

                  // 2. Vertical ASCII tree / flowchart (lines with ↓ or ├── or └──)
                  if (bTrim.includes('↓') || bTrim.includes('├──') || bTrim.includes('└──')) {
                    const lines = bTrim.split('\n');
                    return <VerticalArchitectureTree key={bIdx} lines={lines} themeColor={themeColor} />;
                  }

                  // 3. Horizontal arrow pipeline (like Sensors → IoT → Twin → Action)
                  if (bTrim.includes('→') && !bTrim.includes('\n•')) {
                    return (
                      <div key={bIdx} className="section-inline-pipeline">
                        <PipelineVisualizer flowText={bTrim} themeColor={themeColor} />
                      </div>
                    );
                  }

                  // 4. What-if scenarios with risk tags
                  if (bTrim.toLowerCase().includes('scenario a') || bTrim.toLowerCase().includes('risk)')) {
                    const lines = bTrim.split('\n');
                    return (
                      <div key={bIdx} className="scenarios-grid-container">
                        {lines.map((line, lIdx) => (
                          <WhatIfScenarioCard key={lIdx} line={line} themeColor={themeColor} />
                        ))}
                      </div>
                    );
                  }

                  // 5. Bullet points
                  if (bTrim.includes('•')) {
                    const lines = bTrim.split('\n');
                    return (
                      <div key={bIdx} className="detailed-bullets-list">
                        {lines.map((line, lIdx) => {
                          const l = line.trim();
                          if (!l) return null;
                          const colonMatch = l.match(/^(?:•\s*)?([^:]+):\s*(.*)$/);
                          
                          if (colonMatch) {
                            return (
                              <div key={lIdx} className="detailed-bullet-item">
                                <div className="bullet-key-tag">
                                  <span className="dot" />
                                  <strong>{colonMatch[1]}</strong>
                                </div>
                                <span className="bullet-val-desc">{colonMatch[2]}</span>
                              </div>
                            );
                          }

                          return (
                            <div key={lIdx} className="detailed-bullet-item standard">
                              <span className="dot" />
                              <span>{l.replace(/^•\s*/, '')}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }

                  // 6. Regular prose
                  return (
                    <p key={bIdx} className="detailed-prose-para">
                      {bTrim}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        }

        // Introductory / Non-numbered header block (e.g. title and One-line concept)
        return (
          <div key={secIdx} className="detailed-intro-banner">
            <div className="intro-badge">
              <Sparkles size={14} />
              <span>SYSTEM SPECIFICATION &amp; TECHNICAL BLUEPRINT</span>
            </div>
            <div className="intro-content-text">
              {trimmed.split('\n').map((line, lIdx) => {
                if (line.toLowerCase().startsWith('one-line concept:')) {
                  return (
                    <div key={lIdx} className="one-line-concept-callout">
                      <Zap size={15} className="text-accent" />
                      <div>
                        <strong>CORE CONCEPT: </strong>
                        <span>{line.replace(/^one-line concept:?\s*/i, '')}</span>
                      </div>
                    </div>
                  );
                }
                return <p key={lIdx}>{line}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Compact Pipeline Snippet for UseCaseCard
 */
export function CardPipelineSnippet({ text, maxSteps = 4, themeColor = '#00F2FE' }) {
  if (!text || !text.includes('→')) return null;

  const match = text.match(/(?:How It Works:?\s*|Sensors\s*→[^\n]+)/i);
  const flowLine = match ? match[0] : text.split('\n').find(l => l.includes('→'));
  if (!flowLine) return null;

  const steps = flowLine
    .replace(/^(•\s*)?(How It Works:?\s*)?/i, '')
    .split(/\s*→\s*/)
    .map(s => s.trim())
    .filter(Boolean);

  if (steps.length < 2) return null;

  const displaySteps = steps.slice(0, maxSteps);

  return (
    <div className="card-pipeline-preview" style={{ '--card-flow-accent': themeColor }}>
      {displaySteps.map((step, idx) => (
        <React.Fragment key={idx}>
          <span className="card-pipeline-node">{step}</span>
          {idx < displaySteps.length - 1 && <span className="card-pipeline-arrow">→</span>}
        </React.Fragment>
      ))}
      {steps.length > maxSteps && <span className="card-pipeline-more">+{steps.length - maxSteps}</span>}
    </div>
  );
}

/**
 * Compact Tech Tags Snippet for UseCaseCard
 */
export function CardTechTagsSnippet({ text, maxTags = 3 }) {
  if (!text) return null;
  const match = text.match(/Technology\s*(Stack)?:?\s*([^\n]+)/i);
  if (!match) return null;

  const tags = match[2]
    .split(/•|,/)
    .map(t => t.trim())
    .filter(Boolean)
    .slice(0, maxTags);

  if (tags.length === 0) return null;

  return (
    <div className="card-tech-chips">
      {tags.map((t, idx) => (
        <span key={idx} className="card-tech-chip">
          {t}
        </span>
      ))}
    </div>
  );
}
