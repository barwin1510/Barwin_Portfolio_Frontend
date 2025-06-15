import { useEffect, useState } from "react";
import BarwinProfilePic from "../assets/images/Barwin-Profile.jpg";
import BarwinResume from "../assets/pdf/Barwin-Resume.pdf";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className={`hero-content ${isVisible ? "animate" : ""}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Hello, I'm</span>
              <span className="title-name">Barwin Raj</span>
              <span className="title-role">Full Stack Developer</span>
            </h1>

            <p className="hero-description">
              I create beautiful, responsive web applications with modern
              technologies. Passionate about clean code, user experience, and
              innovative solutions.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToAbout}>
                More Info
              </button>
              <a className="btn btn-secondary" href={BarwinResume} download>
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img
                src={BarwinProfilePic}
                alt="Developer"
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;