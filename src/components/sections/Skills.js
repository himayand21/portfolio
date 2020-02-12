import React from 'react';

import { Characteristic, Skill } from '../skills'
import { characteristics, skills } from '../constants';

export const Skills = () => {
    return (
        <div id="skills">
            <h1
                className="section-header"
            >
                <span>Skills</span>
            </h1>
            <div
                className="skills-wrapper"
            >
                <div className="characteristics-container">
                    {characteristics.map((each) =>
                        <Characteristic
                            characteristic={each}
                        />
                    )}
                </div>
                <div className="skills-container">
                    {skills.map((each) =>
                        <Skill
                            skill={each}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}