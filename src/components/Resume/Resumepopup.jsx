import React from "react";
import "./Resumepopup.css"; 

const ResumePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-popup-overlay">
      <div className="resume-popup">
        <button className="close-btn" onClick={onClose}>
          
        </button>
        <iframe
          src="/resume.html"
          title="Resume"
          className="resume-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePopup;
