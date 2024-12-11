import React from "react";
import Card from './Card';
import { Projectdata } from '../utils/database'; // Ensure the correct path

const Projects = () => {


    return (
        <section id="projects-section">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-gradient-to-tr from-amber-400 via-white to-purple-500">
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