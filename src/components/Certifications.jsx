import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" class="certifications-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">// VERIFIED CREDENTIALS</span>
          <h2 class="section-title">
            Professional <span>Certifications</span>
          </h2>
          <p class="section-description">
            Industry-recognized credentials validating Java programming and Spring ecosystem mastery.
          </p>
        </div>

        <div class="certifications-grid">
          {certificationsData && certificationsData.length > 0 ? (
            certificationsData.map((cert) => (
              <div key={cert.id} class="cert-card glass-card">
                <div class="cert-header">
                  <div class="cert-badge-icon">
                    <Award size={24} />
                  </div>
                  <span class="cert-issuer-badge">{cert.issuer}</span>
                </div>

                <div class="cert-body">
                  <h3 class="cert-name">{cert.name}</h3>
                  <div class="cert-meta">
                    <span class="cert-date">Issued: {cert.date}</span>
                    {cert.credentialId && (
                      <span class="cert-id">ID: {cert.credentialId}</span>
                    )}
                  </div>
                </div>

                {cert.verificationUrl && (
                  <div class="cert-footer">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-outline btn-sm cert-verify-btn"
                    >
                      <ShieldCheck size={16} />
                      Verify Credential
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div class="empty-certs glass-card">
              <p>No certifications listed yet. Update <code>src/data/portfolioData.js</code> to display your credentials.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
