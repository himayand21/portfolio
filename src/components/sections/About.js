import React from "react";
import { aboutConstants } from "../constants";

export const About = () => {
  return (
    <section className="about-wrapper">
      <div
        className="section-header"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        <span>About</span>
      </div>
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
            <div
              className="life-icons"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-easing="ease-out"
            >
              {stage.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
