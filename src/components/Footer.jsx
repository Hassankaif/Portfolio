import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Name and Social Links */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Hassan Kaif</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Hassankaif" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://youtube.com/@hassankaif-l3t?si=5mIBnJpA62_a7xKe" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hassan-kaif-a03028257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/hassan_kaif_07?igsh=MXR5b2Voa2s0OWE2Zg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home-section" className="text-lg hover:text-blue-500">Home</a></li>
            <li><a href="#domain-section" className="text-lg hover:text-blue-500">Interest</a></li>
            <li><a href="#skill-section" className="text-lg hover:text-blue-500">Skill</a></li>
            <li><a href="#about-me-section" className="text-lg hover:text-blue-500">About Me</a></li>
            <li><a href="#project-section" className="text-lg hover:text-blue-500">Project</a></li>
            <li><a href="#academic-section" className="text-lg hover:text-blue-500">Academic</a></li>
          </ul>
        </div>

        {/* Column 3: Email Us */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <a 
            href="mailto:hassan.kaif.jobs@gmail.com?subject=Hello Hassan"
            className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg text-center hover:bg-blue-600"
          >
            Email Us
          </a>
          <div className="mt-4 mb-4 leading-loose" >
            <p >Location : Chennai,Tamil Nadu, India.</p>
            <p >Email ID: hassan.kaif.jobs@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
