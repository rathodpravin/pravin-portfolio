import React from 'react';
import { personalBrand } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer class="footer-section">
      <div class="container footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-logo">
              <Code2 size={20} />
              <span>{personalBrand.name}</span>
            </div>
            <p class="footer-tagline">{personalBrand.title}</p>
          </div>

          <div class="footer-links">
            <a
              href={personalBrand.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={personalBrand.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalBrand.socials.emailUrl}
              className="footer-social-link"
              aria-label="Send me an email"
              title="Email Me"
              onClick={(e) => {
                window.location.href = personalBrand.socials.emailUrl;
                setTimeout(() => {
                  window.open(personalBrand.socials.gmailUrl, '_blank', 'noopener,noreferrer');
                }, 300);
                e.preventDefault();
              }}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            class="scroll-top-btn"
            aria-label="Scroll to top of page"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div class="footer-bottom">
          <p class="copyright-text">
            &copy; {currentYear} {personalBrand.name}. All rights reserved.
          </p>
          <p class="built-tech">
            Engineered with React.js &amp; Java Spring Philosophy
          </p>
        </div>
      </div>
    </footer>
  );
}
