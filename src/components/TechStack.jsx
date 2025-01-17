import React from 'react';
import { Code2, ChevronRight } from 'lucide-react';
import { Domaindata } from '../utils/database';

const DomainofInterest = () => {

  return (
    <section id="domain-section" className="py-16 bg-gradient-to-tr from-blue-300 via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Domain of Interest</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Exploring and specializing in various technological domains that drive innovation and digital transformation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Domaindata.map(({ id, title, desc, logo, bgColor }) => (
            <div
              key={id}
              className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header with Logo */}
              <div className={`p-6 bg-gradient-to-r ${bgColor}`}>
                <img 
                  src={logo} 
                  alt={`${title} logo`} 
                  className="w-16 h-16 object-contain mb-4"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {desc}
                </p>
                
                {/* Learn More Link */}
                {/* <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 transform rotate-45 translate-x-10 -translate-y-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainofInterest;