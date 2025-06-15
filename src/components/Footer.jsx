const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "🔗" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { name: "Instagram", url: "https://instagram.com", icon: "📷" },
  ];

  return (
        <footer className="footer">
          <p>&copy; {currentYear} Barwin Raj. All rights reserved.</p>
        </footer>
  );
};

export default Footer;
