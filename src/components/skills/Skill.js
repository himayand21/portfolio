import React from "react";

const getFullWidth = (className) => {
    switch (className) {
        case 'icon-js': return 119;
        case 'icon-sass': return 91;
        case 'icon-react': return 77;
        case 'icon-mongo': case 'icon-webpack': return 80;
        case 'icon-native': return 78.8;
        default: return 70;
    }
}

export const Skill = (props) => {
    const { skill, transitionIndex } = props;
    const { className, label, rating, source } = skill;
    const fullWidth = getFullWidth(className);
    const visibleHeight = ((5 - rating) / 5) * fullWidth;
    return (
        <div
            className="skill-box"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={(transitionIndex + 1)*50}
            data-aos-easing="ease-out"
        >
            <div className="skill-image-container">
                <img
                    alt=""
                    className={`skill-image ${className}`}
                    src={source}
                />
                <img
                    className={`skill-image ${className}`}
                    src={source}
                    alt=""
                    style={{ clip: `rect(${visibleHeight}px, 120px, 120px, 0px)` }}
                />
            </div>
            <div className="skill-label">{label}</div>
            <div className="skill-rating">{rating} / 5</div>
        </div>
    );
}