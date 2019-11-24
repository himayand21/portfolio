import React from "react";
import { Image } from "../about";
import { aboutConstants } from "../constants";

export const About = () => {
  return (
    <div id="about">
      {aboutConstants.map((stage, index) => (
        <div
          key={'stage' + index}
          className="life-stage"
        >
          <div
            className={
              index % 2 === 0
                ? "life-desc life-description-left"
                : "life-desc life-description-right"
            }
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-out"
          >
            <div className="description-container">
              {stage.description.map(desc => (
                <div className="description" key={desc.value}>
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
