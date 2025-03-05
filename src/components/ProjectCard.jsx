import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Projectdata } from '../utils/database';
import { Card, Badge, Timeline } from 'flowbite-react';
import { Github, ExternalLink, ArrowLeft, Play, Code, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();
  const project = Projectdata.find((proj) => proj.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  // Helper function to get tech stack icon
  const getTechIcon = (techName) => {
    const icons = {
      'React': '⚛️',
      'Truffle': '⚡',
      'Node JS': '🟢',
      'MongoDB': '🍃',
      'Firebase': '🔥',
      'Ganache': '📘',
      'JavaScript': '💛',
      'Tailwind': '🎨',
      'Web3': '🌐',
      'Solidity': '🔗',
      'Blockchain':'⛓️',
      'Express JS': '🚀',
      'HTML/CSS': '🖥️',
      'CSS3': '🎨',
      'Web Development': '🌍',
      'Flask': '🌶️',
      'Ubuntu 22.4 LTS': '🦊',
      'Python': '🐍',
      'reportLab': '📑',
      'PowerShell': '🚀',
      'IPFS Storage': '🗄️',
      'Streamlit': '🚀',      // Represents web-based app deployment
      'TensorFlow': '🔶',     // Official TensorFlow logo color
      'EfficientNet': '🖼️',   // Image classification focus
      'ResNet': '📷',         // Camera symbol for image-based models
      'Transformers': '🧠',   // AI & NLP-related processing
      'PyTorch': '🔥',        // Official PyTorch fire symbol
      'Pandas': '📊' ,
      'default': '💻'
    };
    return icons[techName] || icons.default;
  };

  


  const shareProject = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-amber-50 px-4">
        <Card className="w-full max-w-lg">
          <div className="text-center">
            <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-4">
              Project Not Found
            </h5>
            <p className="font-normal text-gray-700 mb-6">
              Sorry, we couldn't find the project you're looking for.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-sky-50 via-gray-50 to-sky-300 py-6 md:py-12 px-4">  
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-1 md:mr-2" />
            Back
          </Link>
          <button
            onClick={shareProject}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
          >
            <Share2 className="w-4 h-4 mr-1 md:mr-2" />
            {copied ? 'Copied!' : 'Share'}
          </button>
        </div>
        
        <div className="grid gap-4 md:gap-6">
          <Card className="overflow-hidden">
            <div className="relative group">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-48 md:h-96 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <Badge 
                      key={tech} 
                      color="purple" 
                      className="bg-purple-100/80 text-purple-800 text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-8">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{project.desc}</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Key Features</h2>
                  <div className="grid gap-3 md:gap-4">
                    {project.features.map((feature, index) => {
                      const [emoji, text] = feature.split(':');
                      return (
                        <div
                          key={index}
                          className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300"
                        >
                          <span className="text-xl md:text-2xl flex-shrink-0">{emoji}</span>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words w-full">{text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:gap-4 mt-4 md:mt-6">
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 md:px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    View Source Code
                  </a>

                  {project.demolink && (
                    <a
                      href={project.demolink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 md:px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                    >
                      <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {project.technology.map((tech) => (
                <div key={tech} className="p-3 md:p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <div className="text-xl md:text-2xl mb-2">{getTechIcon(tech)}</div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">{tech}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;