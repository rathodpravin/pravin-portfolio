import React from 'react';
import { personalBrand } from '../data/portfolioData';
import { ShieldCheck, Cpu, Database, Layout, Terminal, Code } from 'lucide-react';
import './About.css';

const highlights = [
  {
    icon: <Cpu size={24} />,
    title: "Backend Architecture",
    description: "Designing RESTful APIs and enterprise microservices using Java, Spring Boot, Spring Security, and JPA/Hibernate."
  },
  {
    icon: <Layout size={24} />,
    title: "Modern React Frontends",
    description: "Building responsive, modern, user-centric web interfaces using React.js, modern JavaScript (ES6+), and clean CSS."
  },
  {
    icon: <Database size={24} />,
    title: "Database Engineering",
    description: "Developing relational database schemas, indexing strategies, and optimized SQL queries across MySQL and PostgreSQL."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security & Clean Code",
    description: "Enforcing OWASP guidelines, JWT authentication, input sanitization, and SOLID software design patterns."
  }
];

export default function About() {
  return (
    <section id="about" class="about-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">// GET TO KNOW ME</span>
          <h2 class="section-title">
            {personalBrand.aboutHeading || "About Me"}
          </h2>
          <p class="section-description">
            Full-stack engineering focused on performance, security, and continuous innovation.
          </p>
        </div>

        <div class="about-grid">
          {/* Text Content */}
          <div class="about-text-card glass-card">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="terminal-title">developer_profile.java</span>
            </div>

            <div class="about-body">
              {personalBrand.aboutParagraphs.map((para, idx) => (
                <p key={idx} class="about-paragraph">{para}</p>
              ))}

              <div class="about-key-stack">
                <span class="stack-label">Core Focus:</span>
                <div class="stack-tags">
                  <span class="badge badge-primary">Java</span>
                  <span class="badge badge-primary">Spring Boot</span>
                  <span class="badge badge-primary">React.js</span>
                  <span class="badge badge-primary">REST APIs</span>
                  <span class="badge badge-primary">Spring Security</span>
                  <span class="badge badge-primary">MySQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies Grid */}
          <div class="competencies-grid">
            {highlights.map((item, index) => (
              <div key={index} class="competency-card glass-card">
                <div class="competency-icon">{item.icon}</div>
                <h3 class="competency-title">{item.title}</h3>
                <p class="competency-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
