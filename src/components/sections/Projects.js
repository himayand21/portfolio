import React from 'react';
import { Project } from '../project';
import { projects } from '../constants';

export const Projects = () => {
    return (
        <div id="projects">
            <div
                className="section-header"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
            >
                <span>Projects</span>
            </div>
            <div className="projects-wrapper">
            {projects.map((each, index) => (
                <Project
                    {...each}
                    transitionIndex={index}
                />
            ))}
            </div>
        </div>
    )
}