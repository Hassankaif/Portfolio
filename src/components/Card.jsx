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
            <Button gradientMonochrome="success" className="w-full">
              GitHub
            </Button>
          </a>

          {/* Live Demo Button */}
          <a
            href={demolink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button gradientMonochrome="info" className="w-full">
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
