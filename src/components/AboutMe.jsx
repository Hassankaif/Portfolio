import React from 'react';
import profileimg from '/profile.png';
import { Aboutdata } from '../utils/database';
import ResumePopup from './Resume/Resumepopup';
import { useState } from 'react';

const AboutMe = () => {
  const data = Aboutdata;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <section id="about-me-section" className="bg-gradient-to-br from-blue-300 via-gray-50 to-red-200 pt-28">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-6 pb-12 gap-8">
        {/* Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src={profileimg}
            alt="profile image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text */}
        <div className="max-w-xl text-center md:text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Me
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-500 mt-2">
            Final Year Engineering UnderGraduate
          </h2>
          <p className="text-gray-900 mt-4 sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left text-justify">{data.desc}</p>
          </div>
      </div>

      {/* Resume Button centered */}
      <div className="flex justify-center ">
        <button
          onClick={handleOpenResume}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See Resume
          </span>
        </button>
      </div>

      <ResumePopup isOpen={isResumeOpen} onClose={handleCloseResume} />
    </section>
  );
};

export default AboutMe;
