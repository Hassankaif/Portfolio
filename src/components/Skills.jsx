import React from 'react'
import htmlcsslogo from "/htmlcsslogo.svg"
import JsLogo from "/jslogo.svg";
import ReactLogo from "/reactlogo.svg";
import Expressjs from "/ExpressJS.svg"
import flaskLogo from "/flasklogo.svg";
import nodejsLogo from "/nodejs.svg";
import pythonLogo from "/pythonlogo.svg";
import sqldbLogo from "/sqldblogo.svg";
// import mongodbLogo from "/mongodblogo.svg";
import tensorflowLogo from "/tensorflowlogo.svg";
import tailwindcssLogo from "/tailwindlogo2.svg";
import solidityLogo from "/soliditylogo.svg";
import etherLogo from "/ethereumlogo.svg";


const techIcons = [
  { src: JsLogo, alt: "JavaScript" },
  { src: pythonLogo , alt: "python" },
  { src: solidityLogo, alt: "Solidity" },
  { src: htmlcsslogo, alt: "HTML / CSS" },

  { src: ReactLogo, alt: "React.js" },
  { src: nodejsLogo , alt: "Node JS" },
  { src: Expressjs, alt: "Express JS" },
  { src: tailwindcssLogo, alt: "Tailwind CSS" },

  { src: sqldbLogo, alt: "MySQL" },
  { src: tensorflowLogo, alt: "Tensorflow/keras" },
  { src: flaskLogo, alt: "Flask" },
  { src: etherLogo, alt: "Ganache Testnet" },

];



const Skills = () => {
  return <>
    <section id='skills-section'>
        <div className='bg-gradient-to-bl from-pink-300 via-white to-purple-500 pt-12'>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 gap-8 ">
                <h1 className="max-w-2xl text-center md:text-justify text-3xl md:text-4xl font-bold text-gray-800">
                    Tools, Frameworks and Technologies
                </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 ">
            {techIcons.map((icon, index) => (
                <div
                key={index}
                className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 border border-gray-200"
                >
                
                    <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-14 w-14 mb-3 filter group-hover:brightness-110"
                    />
                
                <span className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {icon.alt}
                </span>
                </div>
            ))}
            </div>
        </div>
    </section>
    </>
}

export default Skills