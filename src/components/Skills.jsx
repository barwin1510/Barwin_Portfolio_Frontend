import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 87 },
        { name: 'JavaScript', level: 88 },
        { name: 'CSS', level: 89 },
        { name: 'HTML', level: 92 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Hibernate', level: 92 },
        { name: 'MySQL', level: 91 },
      ]
    },
    {
      title: 'Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Photoshop', level: 93 },
        { name: 'Canva', level: 90 },
        { name: 'Chess', level: 97 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with to bring your ideas to life
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className="skill-progress animate-progress"
                        style={{ 
                          '--progress-width': `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;