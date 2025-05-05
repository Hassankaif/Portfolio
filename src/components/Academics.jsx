import React, { useState } from 'react';
import { GraduationCap, Award, Book, ArrowRight, ArrowLeft, Calendar, Medal, ExternalLink } from 'lucide-react';
import { courses } from '../utils/database';
const Academics = () => {
  const { hsc, sslc, cgpa } = {
    hsc: 91,
    sslc: 78,
    cgpa: 8.7
  };


  const [currentCourse, setCurrentCourse] = useState(0);

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gradient-to-tr from-emerald-200 via-gray-50 to-red-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Academic Profile</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Scores Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">Academic Scores</h3>
              </div>
              
              <div className="space-y-6">
              <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">SSLC [10th] </span>
                    <span className="text-blue-600 font-semibold">{sslc}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${sslc}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">HSC</span>
                    <span className="text-blue-600 font-semibold">{hsc}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${hsc}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">CGPA</span>
                    <span className="text-blue-600 font-semibold">{cgpa}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(cgpa/10)*100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Section - ENHANCED UI */}
          <div>
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 h-full border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Book className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Online Certifications</h3>
                </div>
                <div className="text-xs text-blue-600 bg-blue-50/50 px-2 py-1 rounded-full border border-blue-100/30">
                  {currentCourse + 1}/{courses.length}
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div className="p-5 backdrop-blur-md bg-white/70 rounded-lg border border-white/50 shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Left side with platform icon */}
                      {courses[currentCourse].platform === "Coursera" && (
                        <div className="bg-blue-200/80 backdrop-blur-sm p-3 rounded-full shadow-sm border border-blue-300/50">
                          <Book className="w-6 h-6 text-blue-600" />
                        </div>
                      )}
                      {courses[currentCourse].platform === "Udemy" && (
                        <div className="bg-purple-200/80 backdrop-blur-sm p-3 rounded-full shadow-sm border border-purple-300/50">
                          <Book className="w-6 h-6 text-purple-600" />
                        </div>
                      )}
                      {courses[currentCourse].platform !== "Coursera" && courses[currentCourse].platform !== "Udemy" && (
                        <div className="bg-emerald-200/80 backdrop-blur-sm p-3 rounded-full shadow-sm border border-emerald-300/50">
                          <Book className="w-6 h-6 text-emerald-600" />
                        </div>
                      )}
                      
                      {/* Middle content section */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">
                          {courses[currentCourse].title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                          <div className="flex items-center text-gray-600 text-sm">
                            <span className="bg-blue-100/50 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-md font-medium border border-blue-200/30">
                              {courses[currentCourse].platform}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                            <span>{courses[currentCourse].completion}</span>
                          </div>
                        </div>
                        
                        {courses[currentCourse].certificate && (
                          <div className="mt-4 flex items-center flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100/70 backdrop-blur-sm text-green-800 border border-green-200/50 shadow-sm">
                              <Medal className="w-3 h-3" />
                              Certificate Earned
                            </span>
                            <a 
                              href={courses[currentCourse].Link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50/50 text-sm flex items-center transition-colors px-3 py-1 rounded-md"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View Certificate
                            </a>
                          </div>
                        )}
                      </div>
                      
                      {/* Certificate thumbnail image */}
                      {courses[currentCourse].certificate && courses[currentCourse].Link && (
                        <div className="flex-shrink-0">
                          <a 
                            href={courses[currentCourse].Link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="w-20 h-20 relative rounded-md overflow-hidden border-2 border-blue-200/50 shadow-sm hover:opacity-90 transition-opacity group">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                                {/* Certificate icon/image representation */}
                                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                                  <Medal className="w-8 h-8 text-blue-500 mb-1" />
                                  <div className="text-xs text-center text-blue-700 font-semibold">Certificate</div>
                                </div>
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 flex items-center justify-center transition-all duration-200">
                                  <ExternalLink className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <button
                    onClick={prevCourse}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200"
                    aria-label="Previous course"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex gap-1">
                    {courses.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentCourse === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextCourse}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200"
                    aria-label="Next course"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;