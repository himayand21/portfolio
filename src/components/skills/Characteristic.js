import React from 'react';

export const Characteristic = props => {
    const {transitionIndex} = props;
    const {title, subtitle, icon} = props.characteristic;
    return (
        <div
            className="characteristic-box"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={(transitionIndex + 1)*50}
            data-aos-easing="ease-out"
        >
            <div className="characteristic-image-container">
                {icon}
            </div>
            <div className="characteristic-title">{title}</div>
            <div className="characteristic-subtitle">{subtitle}</div>
        </div>
    )
}