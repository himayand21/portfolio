import React from "react";
const Description = () => {
  return (
    <div
      className="description-wrapper item"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
      data-aos-easing="ease-out"
    >
      <span className="hi">Hi there!</span>
      <br />
      <div className="my-intro-wrapper">
        <span className="my-name">
          I'm <span className="himayan">Himayan</span>.
        </span>
        <div className="my-description-wrapper">
          I'm a{" "}
          <span className="my-profession"> full-stack web developer</span>.
        </div>
      </div>
    </div>
  );
};

export default Description;