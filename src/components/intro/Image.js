import React, { useState } from "react";
import image from "../../images/me2.jpeg";

const Image = () => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div
			className="item"
		>
			<div className="profile-pic-wrapper">
				<img
					alt=""
					className="profile-pic-no-display"
					src={image}
					style={{ display: "none" }}
					onLoad={() => setLoaded(true)}
				/>
				{loaded ?
					<img
						alt=""
						className="profile-pic"
						src={image}
						onLoad={() => setLoaded(true)}
					/> : null}
			</div>
		</div>
	);
};

export default Image;
