import React from "react";
import { Button } from "flowbite-react";

const Card = ({ img, title, desc, githublink, demolink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>
        <div className="flex justify-between gap-4">
          {/* GitHub Button */} 
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
              </svg>
              Github Repo
            </button>
          </a>

          {/* Live Demo Button */}
          <a
            href={demolink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button type="button" className="text-white bg-[#FF0000] hover:bg-[#FF0000]/90 focus:ring-4 focus:outline-none focus:ring-[#FF0000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-red-500 dark:hover:bg-[#7F0000]/30 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186c-.273-1.05-1.077-1.872-2.087-2.143C19.458 3.5 11.998 3.5 11.998 3.5s-7.46 0-9.413.543c-1.01.271-1.814 1.093-2.087 2.143C0 8.327 0 12 0 12s0 3.673.498 5.814c.273 1.05 1.077 1.872 2.087 2.143C4.537 20.5 11.998 20.5 11.998 20.5s7.46 0 9.413-.543c1.01-.271 1.814-1.093 2.087-2.143C24 15.673 24 12 24 12s0-3.673-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
