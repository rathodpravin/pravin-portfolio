import React, { useState } from 'react';
import { personalBrand } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, ShieldCheck, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
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
  const [submitMessage, setSubmitMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
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

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalBrand.socials.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
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

    const cleanName = sanitizeInput(formData.name);
    const cleanEmail = sanitizeInput(formData.email);
    const cleanSubject = sanitizeInput(formData.subject);
    const cleanMessage = sanitizeInput(formData.message);

    const web3Key = import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY;

    if (web3Key) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            to_email: personalBrand.socials.email,
            name: cleanName,
            email: cleanEmail,
            subject: cleanSubject,
            message: cleanMessage,
            from_name: `${cleanName} (Portfolio Contact)`
          })
        });

        const result = await response.json();
        if (result.success) {
          setStatus('success');
          setSubmitMessage(`Thank you, ${cleanName}! Your message has been delivered to ${personalBrand.socials.email}.`);
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      } catch (err) {
        console.warn('Web3Forms submission error, triggering mailto fallback:', err);
      }
    }

    // Direct Mailto Client Fallback addressing prathod8806@gmail.com
    const sanitizedSubject = encodeURIComponent(cleanSubject);
    const sanitizedBody = encodeURIComponent(
      `Name: ${cleanName}\n` +
      `Sender Email: ${cleanEmail}\n\n` +
      `Message:\n${cleanMessage}`
    );

    setTimeout(() => {
      setStatus('success');
      setSubmitMessage(`Opening your email client to send message directly to ${personalBrand.socials.email}...`);
      window.location.href = `mailto:${personalBrand.socials.email}?subject=${sanitizedSubject}&body=${sanitizedBody}`;
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
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
              Send me an email directly at <strong class="email-highlight">{personalBrand.socials.email}</strong> or reach out via LinkedIn &amp; GitHub.
            </p>

            <div class="contact-cards-list">
              <div class="contact-card-wrapper glass-card">
                <a
                  href={personalBrand.socials.emailUrl}
                  class="contact-card-inner"
                  title="Send email via your email app"
                >
                  <div class="contact-card-icon">
                    <Mail size={22} />
                  </div>
                  <div class="contact-card-text">
                    <span class="card-label">Direct Email</span>
                    <span class="card-value">{personalBrand.socials.email}</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  class={`copy-email-btn ${copiedEmail ? 'copied' : ''}`}
                  title="Copy email address to clipboard"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

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
                <h4 class="assurance-title">Direct &amp; Secure Delivery</h4>
                <p class="assurance-desc">
                  All messages sent through this form are routed to <strong>{personalBrand.socials.email}</strong>. Client-side XSS protection is active.
                </p>
              </div>
            </div>
          </div>

          {/* Secure Contact Form */}
          <div class="contact-form-column glass-card">
            <div class="form-header-badge-row">
              <h3 class="form-title">Send a Message</h3>
              <span class="recipient-badge">
                <Mail size={13} />
                To: {personalBrand.socials.email}
              </span>
            </div>

            {status === 'success' && (
              <div class="alert alert-success">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Message Ready!</strong> {submitMessage}
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
                  placeholder="e.g. Job Opportunity / Technical Inquiry"
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
                  placeholder="Share details about the job opportunity, company, or project..."
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
                {status === 'submitting' ? 'Sending to prathod8806@gmail.com...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

