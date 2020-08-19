import React from "react";

const FullStar = () => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            role="img"
            width="13"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-star fa-w-18 fa-5x"
        >
            <path
                fill="#5e354e"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                class=""
            >
            </path>
        </svg>
    )
}

const EmptyStar = () => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            role="img"
            width="13"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-star fa-w-18 fa-5x"
        >
            <path
                fill="#ADADAD"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                class=""
            >
            </path>
        </svg>
    )
}

const HalfStar = () => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="star-half"
            role="img"
            width="13"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-star-half fa-w-18 fa-5x"
        >
            <g
                class="fa-group"
            >
                <path
                    fill="#ADADAD"
                    d="M545.3 226L439.6 329l25 145.5c4.5 26.1-23 46-46.4 33.7l-130.7-68.6V0a31.62 31.62 0 0 1 28.7 17.8l65.3 132.4 146.1 21.2c26.2 3.8 36.7 36.1 17.7 54.6z"
                    class="fa-secondary"
                >
                </path>
                <path
                    fill="#5e354e"
                    d="M110.4 474.5l25-145.5L29.7 226c-19-18.5-8.5-50.8 17.7-54.6l146.1-21.2 65.3-132.4A31.62 31.62 0 0 1 287.5 0v439.6l-130.7 68.6c-23.4 12.3-50.9-7.6-46.4-33.7z"
                    class="fa-primary"
                >
                </path>
            </g>
        </svg>
    )
}

export const Skill = (props) => {
    const { skill } = props;
    const { className, label, rating, source } = skill;
    const emptyRatings = [0, 0, 0, 0, 0];
    const starRatings = emptyRatings.map((each, index) => {
        if (rating >= (index + 1)) return <FullStar key={index} />;
        if (rating  === (index + 0.5)) return <HalfStar key={index} />;
        return <EmptyStar key={index} />;
    });
    return (
        <div
            className="skill-box"
        >
            <div className="skill-image-container">
                <img
                    className={`skill-image ${className}`}
                    src={source}
                    alt=""
                />
            </div>
            <div className="skill-label">{label}</div>
            <div className="ratings-wrapper">
            {starRatings.map((starRating) => starRating)}
            </div>
        </div>
    );
}