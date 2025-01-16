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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <Card className="max-w-lg">
          <div className="text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-gray-50 to-sky-300 py-12 px-4">  
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <button
            onClick={shareProject}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Share'}
          </button>
        </div>
        
        <div className="grid gap-6">
          <Card className="overflow-hidden">
            <div className="relative group">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-96 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <Badge 
                      key={tech} 
                      color="purple" 
                      className="bg-purple-100/80 text-purple-800 text-sm font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{project.desc}</p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
                  <Timeline>
                    {project.features.map((feature, index) => {
                      const [emoji, text] = feature.split(':');
                      return (
                        <Timeline.Item key={index}>
                          <Timeline.Point />
                          <Timeline.Content>
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                              <span className="text-2xl">{emoji}</span>
                              <div>
                                <p className="text-gray-600">{text}</p>
                              </div>
                            </div>
                          </Timeline.Content>
                        </Timeline.Item>
                      );
                    })}
                  </Timeline>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a
                        href={project.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                    </a>

                    {project.demolink ? (
                        <a
                        href={project.demolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Demo
                        </a>
                    ) : (''
                    )}
                </div>

              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '⚛️', name: 'React.js', desc: 'Frontend Framework' },
                { icon: '🌐', name: 'Web3.js', desc: 'Blockchain Integration' },
                { icon: '🎨', name: 'Tailwind CSS', desc: 'Styling' },
                { icon: '🔗', name: 'Solidity', desc: 'Smart Contracts' },
              ].map((tech) => (
                <div key={tech.name} className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="font-medium text-gray-900">{tech.name}</div>
                  <div className="text-sm text-gray-600">{tech.desc}</div>
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