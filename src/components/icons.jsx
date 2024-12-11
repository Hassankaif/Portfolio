import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div class='flex flex-wrap justify-center items-center gap-4 py-0 my-4'>
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/hassan_kaif_07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
      className="bg-gradient-to-b from-pink-500 to-red-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <FaInstagram size={30} />
      </a>

      {/* GitHub Icon */}
      <a href="https://github.com/Hassankaif" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
      className="bg-gradient-to-b from-gray-800 to-black text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <FaGithub size={30} />
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/hassan-kaif-a03028257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
      class='bg-gradient-to-b from-blue-600 to-blue-800 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300'>
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
