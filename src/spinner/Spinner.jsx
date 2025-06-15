import React from "react";
import "../styles/Spinner.css"

const Spinner = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Sending...</p>
    </div>
  );
};

export default Spinner;
