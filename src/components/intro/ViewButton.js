import React from "react";
const ViewButton = () => {
  const goToProjects = () => {
    const element = document.getElementById('projects');
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth"
    });
  }
  return (
    <div
      className="view-btn item"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-offset="0"
      data-aos-easing="ease-out"
    >
      <button className="view-link" onClick={goToProjects}>
        View Projects
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ViewButton;
