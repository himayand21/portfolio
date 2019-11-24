import React from "react";

export const Image = props => {
  return (
    <div className="life-icons">
      <img
        alt=""
        className="icon-img"
        height={150}
        width={150}
        src={props.source}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-easing="ease-out"
      />
    </div>
  );
};

