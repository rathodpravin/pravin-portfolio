import React from 'react';
import { personalBrand } from '../data/portfolioData';
import { FileText, Download, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" class="resume-section section">
      <div class="container">
        <div class="resume-banner glass-card">
          <div class="resume-content-box">
            <div class="resume-icon-badge">
              <FileText size={32} />
            </div>

            <div class="resume-text">
              <span class="resume-subtitle">// CURRICULUM VITAE</span>
              <h2 class="resume-title">Resume</h2>
              <p class="resume-description">
                Download my resume to learn more about my technical skills, projects and professional background.
              </p>

              <div class="resume-highlights">
                <span class="badge"><CheckCircle size={13} /> Java &amp; Spring Security</span>
                <span class="badge"><CheckCircle size={13} /> React.js &amp; REST APIs</span>
                <span class="badge"><CheckCircle size={13} /> Relational Databases</span>
              </div>
            </div>
          </div>

          <div class="resume-action-box">
            <a
              href={personalBrand.resumeUrl}
              download="Pravin_Rathod_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
            
            <span class="security-note">
              <Shield size={14} /> Clean &amp; Security Verified Document
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
