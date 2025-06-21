import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../spinner/Spinner.jsx";
import emailIcon from "../assets/images/email.png";
import phoneIcon from "../assets/images/phone.png";
import locationIcon from "../assets/images/location.png";
import linkedinIcon from "../assets/images/linkedin.png";
import instagramIcon from "../assets/images/instagram.png";
import facebookIcon from "../assets/images/facebook.png";
import chessIcon from "../assets/images/chess.png";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      console.log(apiUrl);
      const response = await axios.post(apiUrl + "/api/mail/send", formData);

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: emailIcon,
      title: "Email",
      value: "barwin15102001@gmail.com",
      link: "mailto:barwin15102001@gmail.com",
    },
    {
      icon: phoneIcon,
      title: "Phone",
      value: "+91 6379278539",
      link: "tel:+916379278539",
    },
    {
      icon: locationIcon,
      title: "Location",
      value: "Kanyakumari, India",
      link: "#",
    },
    {
      icon: linkedinIcon,
      title: "LinkedIn",
      value: "barwin raj",
      link: "https://www.linkedin.com/in/barwin-raj-375604324/",
    },
    {
      icon: instagramIcon,
      title: "Instagram",
      value: "barwin_2001",
      link: "https://www.instagram.com/barwin_2001/",
    },
    {
      icon: facebookIcon,
      title: "Facebook",
      value: "Barwin Raj",
      link: "https://www.facebook.com/barwin.raj.2025",
    },
    {
      icon: chessIcon,
      title: "Chess",
      value: "Barwin_2001",
      link: "https://www.chess.com/member/barwin_2001",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <img
                      src={info.icon}
                      alt={`${info.title} icon`}
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a
                      href={info.link}
                      className="contact-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <h3>Let’s Connect</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      {isLoading && <Spinner />}
    </section>
  );
};

export default Contact;
