import React from 'react';
import { featuredProjects, builtProjects } from '../data/portfolioData';
import {
  Github, ExternalLink, CheckCircle,
  Cpu, Code2, Layers, Lightbulb,
  ShoppingCart, Briefcase, Building2
} from 'lucide-react';
import './Projects.css';

const projectIcons = {
  'ai-job-portal':             <Briefcase size={22} />,
  'banking-transaction-system': <Building2 size={22} />,
  'ecommerce-order-management': <ShoppingCart size={22} />,
};

const builtCategoryIcons = {
  'Backend Enterprise API':    <Cpu size={14} />,
  'Full-Stack Web App':        <Code2 size={14} />,
  'Microservices Architecture': <Layers size={14} />,
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="section-header">
          <span className="section-subtitle">// PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-description">
            Enterprise-grade, production-ready applications showcasing full-stack development,
            secure APIs, microservices, and modern system design.
          </p>
        </div>

        {/* ── 3 New Featured Projects ── */}
        <div className="fp-list">
          {featuredProjects.map((project) => (
            <article key={project.id} className={`fp-card glass-card fp-accent-${project.accentColor}`}>

              {/* Top glow bar */}
              <div className={`fp-glow-bar fp-bar-${project.accentColor}`} />

              {/* Header row */}
              <div className="fp-header">
                <div className="fp-header-left">
                  <div className={`fp-icon-wrap fp-icon-${project.accentColor}`}>
                    {projectIcons[project.id]}
                  </div>
                  <div>
                    <div className="fp-number-row">
                      <span className="fp-number">{project.number}</span>
                      <span className={`fp-badge fp-badge-${project.accentColor}`}>{project.badge}</span>
                    </div>
                    <h3 className="fp-title">{project.name}</h3>
                    <p className="fp-short-desc">{project.shortDescription}</p>
                  </div>
                </div>

                <div className="fp-header-actions">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                    className={`btn btn-sm fp-demo-btn fp-demo-${project.accentColor}`}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="fp-tech-row">
                <span className="fp-tech-label">Tech Stack</span>
                <div className="fp-tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={`fp-tech-chip fp-chip-${project.accentColor}`}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Body: Features + Why */}
              <div className="fp-body">
                {/* Key Features */}
                <div className="fp-features-box">
                  <h4 className="fp-box-label">
                    <CheckCircle size={14} className={`fp-label-icon fp-icon-c-${project.accentColor}`} />
                    Key Features
                  </h4>
                  <ul className="fp-features-list">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="fp-feature-item">
                        <span className={`fp-feat-dot fp-dot-${project.accentColor}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose */}
                <div className={`fp-why-box fp-why-${project.accentColor}`}>
                  <div className="fp-why-header">
                    <Lightbulb size={16} className={`fp-why-icon fp-icon-c-${project.accentColor}`} />
                    <span className="fp-box-label">Why This Project?</span>
                  </div>
                  <p className="fp-why-text">{project.whyChoose}</p>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* ── Projects I Built ── */}
        <div className="built-section-header">
          <span className="section-subtitle">// MY WORK</span>
          <h3 className="built-section-title">
            Projects I <span className="gradient-text">Built</span>
          </h3>
          <p className="built-section-desc">
            Hands-on applications developed from scratch — covering enterprise backends,
            full-stack platforms, and microservices architectures.
          </p>
        </div>

        <div className="built-projects-list">
          {builtProjects.map((project, index) => (
            <div key={project.id} className={`built-card glass-card built-accent-${project.accentColor}`}>

              <div className="built-card-left">
                <div className="built-order-badge">
                  <span className="built-order-number">0{index + 1}</span>
                  <span className="built-order-line" />
                </div>
                <div className={`built-category-pill built-pill-${project.accentColor}`}>
                  {builtCategoryIcons[project.category]}
                  {project.category}
                </div>
              </div>

              <div className="built-card-center">
                <h4 className="built-project-name">{project.name}</h4>
                <p className="built-project-desc">{project.shortDescription}</p>
                <div className="built-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={`badge built-tech-badge built-tech-${project.accentColor}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="built-features-list">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="built-feature-item">
                      <CheckCircle size={14} className={`built-feat-icon built-feat-icon-${project.accentColor}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="built-card-right">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary built-btn">
                  <Github size={17} /> GitHub
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline built-btn">
                  <ExternalLink size={17} /> Demo
                </a>
              </div>

              <div className={`built-card-glow-line built-glow-${project.accentColor}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
