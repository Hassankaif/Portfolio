import React from "react";
import Card from './Card';
import { Projectdata } from '../utils/database'; 

const Projects = () => {


    return (
        <section id="projects-section" className="bg-gradient-to-tr from-amber-400 via-white to-purple-500">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 gap-8"> 
                    <h1 className="max-w-xl text-center md:text-justify text-3xl md:text-4xl font-bold text-gray-800">Projects</h1>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 ">
            {Projectdata.map((project) => (
                <Card
                key={project.id}
                img={project.img}
                title={project.title}
                desc={project.desc}
                githublink={project.githublink}
                demolink={project.demolink}
                />
            ))}
            </div>
        </section>
);
    };


export default Projects;