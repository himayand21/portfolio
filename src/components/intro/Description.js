import React from "react";
const Description = () => {
  return (
    <div
      className="description-wrapper item"
    >
      <span className="hi">Hi there!</span>
      <br />
      <div className="my-intro-wrapper">
        <div className="my-name">
          I'm <span className="himayan">Himayan</span>.
        </div>
        <div className="my-description-wrapper">
          I'm a{" "}
          <span className="my-profession"> front-end web developer</span>.
        </div>
      </div>
    </div>
  );
};

export default Description;
