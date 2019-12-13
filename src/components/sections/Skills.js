import React from 'react';

import { Characteristic, Skill } from '../skills'
import { characteristics, skills } from '../constants';

export const Skills = () => {
    return (
        <div id="skills">
            <div
                className="section-header"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
            >
                <span>Skills</span>
            </div>
            <div
                className="skills-wrapper"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
            >
                <div className="characteristics-container">
                    {characteristics.map((each, index) =>
                        <Characteristic
                            transitionIndex={index}
                            characteristic={each}
                        />
                    )}
                </div>
                <div className="skills-container">
                    {skills.map((each, index) =>
                        <Skill
                            skill={each}
                            transitionIndex={index}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}