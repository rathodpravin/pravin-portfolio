import React from 'react';
import { featuredProject, secondaryProjects } from '../data/portfolioData';
import { Github, ExternalLink, Star, CheckCircle, Code, Layers } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" class="projects-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">// PORTFOLIO SHOWCASE</span>
          <h2 class="section-title">
            Featured <span>Projects</span>
          </h2>
          <p class="section-description">
            Real enterprise and full-stack web applications engineered with security, clean architecture, and performance.
          </p>
        </div>

        {/* Featured Project Spotlight */}
        <div class="featured-project-card glass-card">
          <div class="featured-grid">
            {/* Visual Screenshot Side */}
            <div class="featured-image-wrapper">
              <span class="featured-spotlight-badge">
                <Star size={14} /> Featured Project
              </span>
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                class="featured-img"
                loading="lazy"
              />
            </div>

            {/* Project Specs Side */}
            <div class="featured-details">
              <h3 class="featured-title">{featuredProject.name}</h3>
              <p class="featured-tagline">{featuredProject.shortDescription}</p>
              <p class="featured-description">{featuredProject.fullDescription}</p>

              {/* Technologies */}
              <div class="project-tech-stack">
                {featuredProject.technologies.map((tech, idx) => (
                  <span key={idx} class="badge badge-primary">{tech}</span>
                ))}
              </div>

              {/* Key Features List */}
              <div class="key-features-container">
                <h4 class="features-title">Key Architectural Features:</h4>
                <ul class="features-list">
                  {featuredProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} class="feature-item">
                      <CheckCircle size={15} class="feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div class="project-actions">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  <Github size={18} />
                  View GitHub
                </a>

                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-secondary"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div class="projects-grid-header">
          <h3 class="secondary-grid-title">More Full-Stack &amp; Enterprise Solutions</h3>
        </div>

        <div class="secondary-projects-grid">
          {secondaryProjects.map((project) => (
            <div key={project.id} class="secondary-card glass-card">
              <div class="secondary-image-box">
                <span class="category-badge">{project.category}</span>
                <img
                  src={project.image}
                  alt={project.name}
                  class="secondary-img"
                  loading="lazy"
                />
              </div>

              <div class="secondary-content">
                <h4 class="secondary-title">{project.name}</h4>
                <p class="secondary-desc">{project.shortDescription}</p>

                {/* Tech Badges */}
                <div class="secondary-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} class="badge">{tech}</span>
                  ))}
                </div>

                {/* Features Highlights */}
                <ul class="secondary-features-list">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} class="secondary-feature-item">
                      <CheckCircle size={14} class="sec-feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div class="secondary-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-secondary btn-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline btn-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
