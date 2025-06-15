const About = () => {
  const stats = [
    { number: 'BCA', label: '2019-2022' },
    { number: 'MCA', label: '2022-2024' },
    { number: 'Java Internship', label: '23/12/2024 - 17/01/2025' },
    { number: 'Software Developer', label: '2025 - Present' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I'm a passionate Software Developer and a recent graduate with a
                BCA and MCA. While I’m a fresher, I’ve gained over four months
                of hands-on experience working with React, Java Spring Boot, and
                MySQL, and completed a 1-month Java Backend internship
                at Features Software in Marthandam, Now, I am currently working in Althi Solution IT  Company.
              </p>
              <p>
                I love solving problems through code and constantly strive to
                improve my skills. Outside of programming, I’m a chess addict,
                Rubik’s Cube solver, Photoshop designer, and video editor —
                always exploring new ways to think creatively and logically.
              </p>
              <p>
                I'm eager to contribute to impactful projects and grow in a
                challenging, collaborative environment. Let’s connect if you're
                looking for someone who's committed, curious, and ready to
                build.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Frontend Development</h4>
                <p>Creating responsive, interactive user interfaces with modern frameworks</p>
              </div>
              
              <div className="highlight-item">
                <h4>Backend Development</h4>
                <p>Building scalable server-side applications and RESTful APIs</p>
              </div>
              
              <div className="highlight-item">
                <h4>Photoshop Design</h4>
                <p>Designing intuitive, user-friendly interfaces that inspire and engage</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;