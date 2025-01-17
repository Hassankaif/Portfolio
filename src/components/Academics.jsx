import React, { useState } from 'react';
import { GraduationCap, Award, Book, ArrowRight, ArrowLeft } from 'lucide-react';
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
    <section className="py-16 bg-gradient-to-tr from-emerald-300 via-gray-50 to-red-200">
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

          {/* Courses Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4 flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">Online Certifications</h3>
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {courses[currentCourse].title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Platform: {courses[currentCourse].platform}
                    </p>
                    <p className="text-gray-600">
                      Completed: {courses[currentCourse].completion}
                    </p>
                    {courses[currentCourse].certificate && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                        Certificate Earned
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <button
                    onClick={prevCourse}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Previous course"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex gap-1">
                    {courses.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          currentCourse === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextCourse}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
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