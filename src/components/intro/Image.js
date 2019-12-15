import React from "react";
import image from "../../images/me.jpg";

const Image = () => {
  return (
    <div
      className="item"
    >
      <img
        alt=""
        className="profile-pic"
        src={image}
      />
    </div>
  );
};

export default Image;
