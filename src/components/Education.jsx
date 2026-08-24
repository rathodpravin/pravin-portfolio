import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" class="education-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">// ACADEMIC BACKGROUND</span>
          <h2 class="section-title">
            Education &amp; <span>Qualifications</span>
          </h2>
          <p class="section-description">
            Formal computer science degree and specialized software engineering education.
          </p>
        </div>

        <div class="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} class="education-card glass-card">
              <div class="edu-card-header">
                <div class="edu-icon-badge">
                  <GraduationCap size={24} />
                </div>
                <span class="badge badge-primary">
                  <Calendar size={13} />
                  {edu.year}
                </span>
              </div>

              <div class="edu-details">
                <h3 class="degree-title">{edu.degree}</h3>
                <h4 class="institution-name">{edu.institution}</h4>
                
                {edu.specialization && (
                  <div class="specialization-tag">
                    <Award size={15} />
                    <span>Specialization: {edu.specialization}</span>
                  </div>
                )}

                {edu.description && (
                  <p class="edu-description">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
