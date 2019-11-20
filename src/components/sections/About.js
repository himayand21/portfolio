import React from "react";
import { Image } from "../about";
import { aboutConstants } from "../constants";

const About = () => {
  return (
    <div id="about">
      {aboutConstants.map((stage, index) => (
        <div
          className="life-stage"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="100"
          data-aos-delay={(100 * index).toString()}
          data-aos-easing="ease-out"
        >
          <div
            className={
              index % 2 === 0
                ? "life-desc life-description-left"
                : "life-desc life-description-right"
            }
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            <div className="description-container">
              {stage.description.map(desc => (
                <div className="description">
                  <span className="desc-value">{desc.value}</span>
                  <label className="desc-label">{desc.label}</label>
                </div>
              ))}
            </div>
          </div>
          <Image source={stage.image} />
        </div>
      ))}
    </div>
  );
};

export default About;
