import React from 'react';
import { Project } from '../project';
import { projects } from '../constants';

export const Projects = () => {
    return (
        <div id="projects">
            <h1
                className="section-header"
            >
                <span>Projects</span>
            </h1>
            <div className="projects-wrapper">
            {projects.map((each) => (
                <Project
                    {...each}
                />
            ))}
            </div>
        </div>
    )
}