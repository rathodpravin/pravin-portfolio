import React, { useState } from 'react';
import { personalBrand } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'submitting' | 'success' | 'error'
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Security input sanitizer to prevent XSS / script injection
  const sanitizeInput = (text) => {
    return text.replace(/[<>&"']/g, (char) => {
      const entities = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return entities[char] || char;
    }).trim();
  };

  const validateForm = () => {
    const errs = {};
    const cleanName = sanitizeInput(formData.name);
    const cleanEmail = sanitizeInput(formData.email);
    const cleanSubject = sanitizeInput(formData.subject);
    const cleanMessage = sanitizeInput(formData.message);

    if (!cleanName || cleanName.length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!cleanSubject || cleanSubject.length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    // Rate Limiting (prevent rapid spam submissions - max once per 15 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 15000) {
      setErrors({ form: 'Rate limit active. Please wait a few seconds before sending another message.' });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setLastSubmitTime(now);

    // XSS Sanitized data construct
    const sanitizedSubject = encodeURIComponent(sanitizeInput(formData.subject));
    const sanitizedBody = encodeURIComponent(
      `Name: ${sanitizeInput(formData.name)}\n` +
      `Email: ${sanitizeInput(formData.email)}\n\n` +
      `Message:\n${sanitizeInput(formData.message)}`
    );

    // Simulate safe processing & fallback to direct mailto client handler
    setTimeout(() => {
      setStatus('success');
      
      // Trigger default mail client securely
      window.location.href = `mailto:${personalBrand.socials.email}?subject=${sanitizedSubject}&body=${sanitizedBody}`;

      // Reset form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" class="contact-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">// GET IN TOUCH</span>
          <h2 class="section-title">
            Contact <span>Me</span>
          </h2>
          <p class="section-description">
            Available for full-time Full-Stack Java Developer roles, technical interviews, and project inquiries.
          </p>
        </div>

        <div class="contact-grid">
          {/* Direct Social / Communication Cards */}
          <div class="contact-info-column">
            <h3 class="info-column-title">Let's Connect Directly</h3>
            <p class="info-column-desc">
              Feel free to reach out via direct email, LinkedIn, or explore my open-source repositories on GitHub.
            </p>

            <div class="contact-cards-list">
              <a
                href={personalBrand.socials.emailUrl}
                class="contact-card glass-card"
              >
                <div class="contact-card-icon">
                  <Mail size={22} />
                </div>
                <div class="contact-card-text">
                  <span class="card-label">Email Me</span>
                  <span class="card-value">{personalBrand.socials.email}</span>
                </div>
              </a>

              <a
                href={personalBrand.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="contact-card glass-card"
              >
                <div class="contact-card-icon">
                  <Linkedin size={22} />
                </div>
                <div class="contact-card-text">
                  <span class="card-label">LinkedIn</span>
                  <span class="card-value">Connect on LinkedIn</span>
                </div>
              </a>

              <a
                href={personalBrand.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                class="contact-card glass-card"
              >
                <div class="contact-card-icon">
                  <Github size={22} />
                </div>
                <div class="contact-card-text">
                  <span class="card-label">GitHub</span>
                  <span class="card-value">Explore Repositories</span>
                </div>
              </a>
            </div>

            <div class="security-assurance-box glass-card">
              <ShieldCheck size={20} class="security-icon" />
              <div>
                <h4 class="assurance-title">Privacy &amp; Security Assured</h4>
                <p class="assurance-desc">
                  Inputs are sanitized client-side. No sensitive data, secrets, or API keys are stored in frontend local storage.
                </p>
              </div>
            </div>
          </div>

          {/* Secure Contact Form */}
          <div class="contact-form-column glass-card">
            <h3 class="form-title">Send a Message</h3>
            
            {status === 'success' && (
              <div class="alert alert-success">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Message Prepared!</strong> Opening your email client to complete sending.
                </div>
              </div>
            )}

            {errors.form && (
              <div class="alert alert-error">
                <AlertCircle size={20} />
                <span>{errors.form}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate class="contact-form">
              <div class="form-group">
                <label htmlFor="name" class="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  class={`form-input ${errors.name ? 'input-error' : ''}`}
                  required
                />
                {errors.name && <span class="error-msg">{errors.name}</span>}
              </div>

              <div class="form-group">
                <label htmlFor="email" class="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah.jenkins@company.com"
                  class={`form-input ${errors.email ? 'input-error' : ''}`}
                  required
                />
                {errors.email && <span class="error-msg">{errors.email}</span>}
              </div>

              <div class="form-group">
                <label htmlFor="subject" class="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Technical Discussion"
                  class={`form-input ${errors.subject ? 'input-error' : ''}`}
                  required
                />
                {errors.subject && <span class="error-msg">{errors.subject}</span>}
              </div>

              <div class="form-group">
                <label htmlFor="message" class="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the role, project, or technical topic..."
                  class={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                  required
                ></textarea>
                {errors.message && <span class="error-msg">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                class="btn btn-primary btn-submit"
              >
                <Send size={18} />
                {status === 'submitting' ? 'Processing...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
