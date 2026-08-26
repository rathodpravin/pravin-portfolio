import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { personalBrand } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, ShieldCheck, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm("mjyvbvnl");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalBrand.socials.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// GET IN TOUCH</span>
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <p className="section-description">
            Available for full-time Full-Stack Java Developer roles, technical interviews, and project inquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Social / Communication Cards */}
          <div className="contact-info-column">
            <h3 className="info-column-title">Let's Connect Directly</h3>
            <p className="info-column-desc">
              Send me an email directly at <strong className="email-highlight">{personalBrand.socials.email}</strong> or reach out via LinkedIn &amp; GitHub.
            </p>

            <div className="contact-cards-list">
              <div className="contact-card-wrapper glass-card">
                <a
                  href={personalBrand.socials.emailUrl}
                  className="contact-card-inner"
                  title="Send email via your email app"
                >
                  <div className="contact-card-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-card-text">
                    <span className="card-label">Direct Email</span>
                    <span className="card-value">{personalBrand.socials.email}</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`copy-email-btn ${copiedEmail ? 'copied' : ''}`}
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
                className="contact-card glass-card"
              >
                <div className="contact-card-icon">
                  <Linkedin size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">LinkedIn</span>
                  <span className="card-value">Connect on LinkedIn</span>
                </div>
              </a>

              <a
                href={personalBrand.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card glass-card"
              >
                <div className="contact-card-icon">
                  <Github size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">GitHub</span>
                  <span className="card-value">Explore Repositories</span>
                </div>
              </a>
            </div>

            <div className="security-assurance-box glass-card">
              <ShieldCheck size={20} className="security-icon" />
              <div>
                <h4 className="assurance-title">Direct &amp; Secure Delivery</h4>
                <p className="assurance-desc">
                  All messages sent through this form are routed via Formspree to <strong>{personalBrand.socials.email}</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Formspree Contact Form */}
          <div className="contact-form-column glass-card">
            <div className="form-header-badge-row">
              <h3 className="form-title">Send a Message</h3>
              <span className="recipient-badge">
                <Mail size={13} />
                To: {personalBrand.socials.email}
              </span>
            </div>

            {state.succeeded ? (
              <div className="alert alert-success success-card">
                <CheckCircle2 size={28} className="success-icon" />
                <div className="success-content">
                  <h4 className="success-title">Thank you! Your message has been sent successfully.</h4>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    required
                  />
                  <ValidationError 
                    prefix="Full Name" 
                    field="name"
                    errors={state.errors}
                    className="error-msg"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. sarah.jenkins@company.com"
                    className="form-input"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="error-msg"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +1 (555) 000-0000"
                    className="form-input"
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                    className="error-msg"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Job Opportunity / Technical Inquiry"
                    className="form-input"
                    required
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="error-msg"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Share details about the job opportunity, company, or project..."
                    className="form-input form-textarea"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="error-msg"
                  />
                </div>

                {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                  <div className="alert alert-error">
                    <AlertCircle size={20} />
                    <span>Please fix the errors in the form before submitting.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary btn-submit"
                >
                  <Send size={18} />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



