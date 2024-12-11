import React from 'react'

import HtmlLogo from "../assets/icons/htmllogo.svg";
import CssLogo from "../assets/icons/csslogo.svg";
import JsLogo from "../assets/icons/jslogo.svg";
import ReactLogo from "../assets/icons/reactlogo.svg";
import flaskLogo from "../assets/icons/flasklogo.svg";
import javaLogo from "../assets/icons/javalogo.svg";
import pythonLogo from "../assets/icons/pythonlogo.svg";
import sqldbLogo from "../assets/icons/sqldblogo.svg";
import mongodbLogo from "../assets/icons/mongodblogo.svg";
import tensorflowLogo from "../assets/icons/tensorflowlogo.svg";
import tailwindcssLogo from "../assets/icons/tailwindlogo2.svg";
import solidityLogo from "../assets/icons/soliditylogo.svg";
import etherLogo from "../assets/icons/ethereumlogo.svg";

const techIcons = [
  { src: HtmlLogo, alt: "HTML" },
  { src: CssLogo, alt: "CSS" },
  { src: JsLogo, alt: "JavaScript" },
  { src: ReactLogo, alt: "React.js" },
  { src: javaLogo , alt: "java" },
  { src: pythonLogo , alt: "python" },
  { src: tailwindcssLogo, alt: "Tailwind CSS" },
  { src: sqldbLogo, alt: "MySQL" },
  { src: tensorflowLogo, alt: "Tensorflow/keras" },
  { src: flaskLogo, alt: "Flask" },
  { src: etherLogo, alt: "Ganache Testnet" },
  { src: solidityLogo, alt: "Solidity" }
];



const Skills = () => {
  return <>
    <div className='bg-gradient-to-br from-emerald-300 via-white to-purple-500 pt-12'>
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

    </>
}

export default Skills