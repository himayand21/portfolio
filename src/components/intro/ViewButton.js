import React from "react";
const ViewButton = () => {
  return (
    <div
      className="view-btn item"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-offset="0"
      data-aos-easing="ease-out"
    >
      <a className="view-link" href="#projects">
        View Projects
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default ViewButton;
