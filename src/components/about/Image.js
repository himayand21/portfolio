import React from "react";

const Image = props => {
  return (
    <div className="life-icons">
      <img
        alt="life-icons"
        className="icon-img"
        height={150}
        width={150}
        src={require("../../images/about/" + [props.source] + ".png")}
      />
    </div>
  );
};

export default Image;
