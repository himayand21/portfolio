import React from 'react';

export const Characteristic = props => {
    const {title, subtitle, icon} = props.characteristic;
    return (
        <div
            className="characteristic-box"
        >
            <div className="characteristic-image-container">
                <img src={icon} alt=""/>
            </div>
            <div className="characteristic-title">{title}</div>
            <div className="characteristic-subtitle">{subtitle}</div>
        </div>
    )
}