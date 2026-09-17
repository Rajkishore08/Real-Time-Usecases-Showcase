import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function UseCaseVisual({ useCase, themeColor }) {
  if (useCase.image) {
    return (
      <div className="visual-wrapper custom-image-container">
        <img 
          src={useCase.image} 
          alt={`Theme ${useCase.themeId} Use Case ${useCase.caseNumber}`} 
          className="custom-uploaded-img" 
        />
        <div className="visual-scanline" />
      </div>
    );
  }

  // Clean, elegant placeholder waiting for user image
  return (
    <div 
      className="visual-wrapper clean-placeholder"
      style={{
        '--placeholder-accent': themeColor || '#00F2FE'
      }}
    >
      <div className="placeholder-content">
        <div className="placeholder-icon-circle">
          <ImageIcon size={28} />
        </div>
        <span className="placeholder-label">Awaiting Image / Diagram</span>
        <span className="placeholder-sub">Use Case {useCase.caseNumber}</span>
      </div>
      <div className="visual-scanline" />
    </div>
  );
}
