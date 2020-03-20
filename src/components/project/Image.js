import React, { useState } from "react";

export const Image = ({ image }) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div className="project-image">
			<img
				data-src={image}
				alt=""
				className="lazy"
				style={{ display: "none" }}
				onLoad={() => setLoaded(true)}
			/>
			{loaded ?
				<img
					className="project-image-loaded"
					src={image}
					alt=""
				/> : null}
		</div>
	)
}
