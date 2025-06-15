import { useState } from 'react';
import axios from "axios";

const Contact = () => {

  const [status, setStatus] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:8080/api/mail/send", formData);
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'barwin15102001@gmail.com',
      link: 'mailto:barwin15102001@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 6379278539',
      link: 'tel:+916379278539'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kanyakumari, India',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'barwin raj',
      link: 'https://www.linkedin.com/in/barwin-raj-375604324/'
    },
    {
      icon: '📸',
      title: 'Instagram',
      value: 'barwin_2001',
      link: 'https://www.instagram.com/barwin_2001/'
    },
    {
      icon: '📘',
      title: 'Facebook',
      value: 'Barwin Raj',
      link: 'https://www.facebook.com/barwin.raj.2025'
    },
    {
      icon: '♟️',
      title: 'Chess',
      value: 'Barwin_2001',
      link: 'https://www.chess.com/member/barwin_2001'
    }
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
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} className="contact-link">
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
            
            <button type="submit" className="btn btn-primary form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;