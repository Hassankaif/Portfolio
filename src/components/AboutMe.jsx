import React from 'react';
import profileimg from '../assets/icons/profile.png'
import { Aboutdata } from '../utils/database';

const AboutMe = () => {
    const data=Aboutdata;
  return (
  <section id='about-me-section'>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 gap-8 bg-gradient-to-br from-blue-300 via-gray-50 to-red-200">
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
          Pre-Final Year Engineering UnderGraduate 
        </h2>
        <p className="text-gray-600 mt-4">
            {data.desc}  
        </p>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
