import React from 'react';
import { personalBrand } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowDown, Download, ChevronRight, Zap, Code2, GraduationCap } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" class="hero-section section">
      <div class="container hero-container">
        {/* Left Side Content */}
        <div class="hero-content">
          <div class="hero-greeting-wrapper">
            <span class="greeting-badge">
              <span class="pulse-dot"></span>
              {personalBrand.heroGreeting}
            </span>
          </div>

          <h1 class="hero-name">
            {personalBrand.name}
          </h1>

          <h2 class="hero-title">
            <span class="gradient-text">{personalBrand.title}</span>
          </h2>

          <p class="hero-description">
            {personalBrand.heroDescription}
          </p>

          {/* Recruiter Scan Chips */}
          <div class="hero-highlights">
            <span class="highlight-chip">
              <Zap size={14} class="chip-icon" />
              Spring Boot &amp; REST APIs
            </span>
            <span class="highlight-chip">
              <Code2 size={14} class="chip-icon" />
              React.js &amp; MySQL
            </span>
            <span class="highlight-chip">
              <GraduationCap size={14} class="chip-icon" />
              M.Sc Computer Science
            </span>
          </div>

          {/* Action Buttons */}
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">
              View My Projects
              <ChevronRight size={18} />
            </a>
            
            <a 
              href={personalBrand.resumeUrl} 
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a href="#contact" class="btn btn-outline">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div class="hero-socials">
            <span class="socials-label">Connect with me:</span>
            <div class="social-icons">
              <a
                href={personalBrand.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a
                href={personalBrand.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href={personalBrand.socials.emailUrl}
                class="social-link"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Visual Portrait */}
        <div class="hero-visual">
          <div class="portrait-wrapper">
            <div class="portrait-glow"></div>
            <div class="portrait-card">
              <img
                src={personalBrand.profileImage}
                alt={`${personalBrand.name} - ${personalBrand.title}`}
                class="profile-img"
                loading="eager"
              />
            </div>
            
            {/* Open to Opportunities Badge */}
            {personalBrand.status && (
              <div class="status-badge glass-card">
                <span class="status-indicator">
                  <span class="status-ping"></span>
                  <span class="status-dot"></span>
                </span>
                <span class="status-text">{personalBrand.status}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" class="scroll-indicator" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
