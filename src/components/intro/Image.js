import React from "react";
import image from "../../images/me.jpg";

const Image = () => {
  return (
    <div
      className="item"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-out"
    >
      <img
        alt="awesome-me"
        className="profile-pic"
        src={image}
      />
    </div>
  );
};

export default Image;
