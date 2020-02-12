import React from "react";
import { aboutConstants } from "../constants";

export const About = () => {
  return (
    <section id="about">
      <h1
        className="section-header"
      >
        <span>About</span>
      </h1>
      <div className="life-stage-wrapper">
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
            >
              {stage.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
