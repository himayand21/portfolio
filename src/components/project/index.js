import React from "react";

export const Project = (props) => {
    const {
        transitionIndex,
        title,
        image,
        links,
        subtitle,
        skills
    } = props;
    return (
        <div
            className="project-box"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={(transitionIndex + 1) * 50}
            data-aos-easing="ease-out"
        >
            <img className="project-image" src={image} alt="" />
            <div className="project-content">
                <div className="project-header">
                    <div className="project-title">{title}</div>
                    <div className="project-subtitle">{subtitle}</div>
                </div>
                <div>
                    <div className="link-wrapper">
                        <a target="_tab" href={links.value} className="project-link">
                            {links.label}
                        </a>
                    </div>
                    <div className="project-skills-wrapper">
                        {skills.map((each) => (
                            <div className="project-skill">
                                <img
                                    alt=""
                                    src={each.source}
                                    className={`project-skill-image project-skill-${each.label}`}
                                />
                                <div className="project-skill-label">
                                    {each.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}