import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Projectdata } from '../utils/database';
import { Badge } from 'flowbite-react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href={project.demolink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5 text-gray-700" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {project.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index} 
                color="purple" 
                className="bg-purple-100 text-purple-800 text-xs"
              >
                {feature.split(':')[0]}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center text-purple-600 font-medium group/link">
          View Project Details
          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  
  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects-section" className="bg-gradient-to-bl from-purple-500 via-white to-green-500 pt-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Explore my latest works showcasing expertise in web development, blockchain, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projectdata.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleCardClick(project.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;