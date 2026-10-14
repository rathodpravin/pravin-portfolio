import React from 'react';
import { personalBrand } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowDown, Download, ArrowRight } from 'lucide-react';
import './Hero.css';

const techPills = ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'];

export default function Hero() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = personalBrand.socials.emailUrl;
    setTimeout(() => {
      window.open(personalBrand.socials.gmailUrl, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        {/* ── Left Column ── */}
        <div className="hero-content">

          {/* Availability Badge */}
          <div className="hero-availability">
            <span className="avail-dot" aria-hidden="true" />
            <span>Available for Java Developer Opportunities</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Building Reliable<br />
            <span className="hero-headline-accent">Java Applications</span><br />
            for the Modern Web.
          </h1>

          {/* Description */}
          <p className="hero-description">
            I'm <strong>Pravin Rathod</strong>, a Full-Stack Java Developer focused on building
            secure backend systems, clean REST APIs, and responsive web applications using
            Java, Spring Boot, React.js, and MySQL.
          </p>

          {/* Tech Pills */}
          <div className="hero-tech-pills" aria-label="Core technologies">
            {techPills.map((t) => (
              <span key={t} className="hero-tech-pill">{t}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={personalBrand.resumeUrl}
              download="Pravin_Rathod_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={personalBrand.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalBrand.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalBrand.socials.emailUrl}
              className="hero-social-link"
              aria-label="Send email"
              onClick={handleEmailClick}
            >
              <Mail size={18} />
            </a>
            <span className="hero-social-divider" aria-hidden="true" />
            <span className="hero-social-email">{personalBrand.socials.email}</span>
          </div>
        </div>

        {/* ── Right Column — Portrait ── */}
        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-frame">
            <div className="portrait-glow-ring" />
            <img
              src={personalBrand.profileImage}
              alt={`${personalBrand.name} — ${personalBrand.title}`}
              className="portrait-img"
              loading="eager"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="portrait-label">
              <span className="portrait-label-dot" />
              Java Developer
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
