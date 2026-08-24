import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Wrench, CheckCircle2 } from 'lucide-react';
import './Skills.css';

const iconMap = {
  Code2: <Code2 size={22} />,
  Server: <Server size={22} />,
  Layout: <Layout size={22} />,
  Database: <Database size={22} />,
  Wrench: <Wrench size={22} />
};

export default function Skills() {
  return (
    <section id="skills" class="skills-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">// TECHNICAL STACK</span>
          <h2 class="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <p class="section-description">
            Categorized technical capabilities focused on full-stack Java enterprise architecture and modern React frontends.
          </p>
        </div>

        <div class="skills-grid">
          {skillsData.map((categoryGroup, idx) => (
            <div key={idx} class="skill-category-card glass-card">
              <div class="category-header">
                <div class="category-icon">
                  {iconMap[categoryGroup.icon] || <Code2 size={22} />}
                </div>
                <h3 class="category-title">{categoryGroup.category}</h3>
              </div>

              <div class="skills-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} class="skill-item">
                    <CheckCircle2 size={16} class="skill-check-icon" />
                    <span class="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
