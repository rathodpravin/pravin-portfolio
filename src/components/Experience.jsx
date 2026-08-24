import React from 'react';
import { experienceData, experienceMeta } from '../data/portfolioData';
import { Briefcase, Calendar, ChevronRight, Award, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, TrendingUp, Sparkles, Code2, MapPin } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" class="experience-section section">
      <div class="container">
        {/* Header Branding */}
        <div class="section-header">
          <div class="section-badge-wrapper">
            <span class="section-subtitle">// WORK HISTORY</span>
            {experienceMeta?.statBadge && (
              <span class="badge badge-success stat-badge">
                <CheckCircle2 size={13} />
                {experienceMeta.statBadge}
              </span>
            )}
          </div>
          <h2 class="section-title">
            {experienceMeta?.sectionTitle || "Internship Experience"}
          </h2>
          <p class="section-description">
            {experienceMeta?.subtitle || "Hands-on experience building web interfaces and full-stack applications using modern web and Java technologies."}
          </p>
        </div>

        {/* Timeline Cards */}
        <div class="timeline-container">
          {experienceData && experienceData.length > 0 ? (
            experienceData.map((item, index) => (
              <div key={item.id || index} class={`timeline-item ${item.isFullStackSpotlight ? 'spotlight-item' : ''}`}>
                <div class="timeline-dot-wrapper">
                  <div class={`timeline-dot ${item.isFullStackSpotlight ? 'spotlight-dot' : ''}`}>
                    <Briefcase size={18} />
                  </div>
                  {index < experienceData.length - 1 && <div class="timeline-line"></div>}
                </div>

                <div class={`timeline-card glass-card ${item.isFullStackSpotlight ? 'spotlight-card' : ''}`}>
                  <div class="timeline-header">
                    <div>
                      <div class="company-role-header">
                        <h4 class="company-name">{item.company}</h4>
                        {item.spotlightBadge && (
                          <span class="spotlight-badge-chip">
                            <Sparkles size={12} />
                            {item.spotlightBadge}
                          </span>
                        )}
                        {item.status && (
                          <span class="status-chip">
                            <CheckCircle2 size={12} />
                            {item.status}
                          </span>
                        )}
                      </div>
                      <h3 class="role-title">{item.role}</h3>
                    </div>

                    <div class="meta-badges">
                      <span class="badge badge-primary">
                        <Calendar size={13} />
                        {item.duration}
                      </span>
                      {item.location && (
                        <span class="badge badge-location">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      )}
                      {item.type && <span class="badge badge-type">{item.type}</span>}
                    </div>
                  </div>

                  {/* Summary Callout */}
                  {item.shortSummary && (
                    <div class="experience-short-summary">
                      <p>"{item.shortSummary}"</p>
                    </div>
                  )}

                  {/* Full-Stack Architecture Pipeline Visual for Prodigy InfoTech */}
                  {item.architectureFlow && item.architectureFlow.length > 0 && (
                    <div class="architecture-spotlight-box">
                      <div class="architecture-header">
                        <Layers size={16} class="arch-icon" />
                        <span class="arch-title">{item.architectureCaption || "Full-Stack Application Development"}</span>
                      </div>
                      
                      {item.architectureSubcaption && (
                        <p class="arch-subcaption">{item.architectureSubcaption}</p>
                      )}

                      <div class="architecture-flow-pipeline">
                        {item.architectureFlow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span class="flow-pill">{step}</span>
                            {sIdx < item.architectureFlow.length - 1 && (
                              <ArrowRight size={14} class="flow-arrow" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Concise 3-4 High-Impact Bullet Points */}
                  <div class="responsibilities-list">
                    <h5 class="list-heading">Key Technical Outcomes:</h5>
                    <ul>
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>
                          <ChevronRight size={15} class="bullet-icon" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sleek Technology Badges */}
                  <div class="experience-footer">
                    <div class="experience-tech-stack">
                      <span class="tech-label">Technology Stack:</span>
                      <div class="tech-tags">
                        {item.technologies.map((tech, tIdx) => (
                          <span key={tIdx} class={`badge ${item.isFullStackSpotlight ? 'badge-primary' : ''}`}>{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons rendered ONLY if actual certificate or project URLs are provided */}
                    {(item.certificateUrl || item.githubUrl) && (
                      <div class="experience-actions">
                        {item.certificateUrl && (
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-outline btn-sm"
                          >
                            <Award size={15} />
                            View Certificate
                            <ExternalLink size={13} />
                          </a>
                        )}

                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-secondary btn-sm"
                          >
                            <Github size={15} />
                            View Projects
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div class="empty-experience glass-card">
              <p>Add your work experience entries in <code>src/data/portfolioData.js</code>.</p>
            </div>
          )}
        </div>

        {/* Visual Bridge Connecting Experience to Featured Projects */}
        <div class="experience-projects-bridge">
          <div class="bridge-flow">
            <span class="bridge-node">Internship Experience</span>
            <ArrowRight size={14} class="bridge-arrow" />
            <span class="bridge-node">Technical Skills</span>
            <ArrowRight size={14} class="bridge-arrow" />
            <a href="#projects" class="bridge-node bridge-highlight">Featured Projects <Code2 size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
