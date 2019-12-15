import React from 'react';
import { Project } from '../project';
import { projects } from '../constants';

export const Projects = () => {
    return (
        <div id="projects">
            <div
                className="section-header"
            >
                <span>Projects</span>
            </div>
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