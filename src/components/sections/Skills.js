import React from 'react';

import { Characteristic } from '../skills'
import { characteristics } from '../constants';

export const Skills = () => {
    return (
        <div id="skills">
            <div
                className="skills-wrapper"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-easing="ease-out"
            >
                <div className="characteristics-container">
                    {characteristics.map((each, index) =>
                        <Characteristic
                            transitionIndex={index}
                            characteristic={each}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}