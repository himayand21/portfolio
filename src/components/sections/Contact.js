import React from "react";
import { Email } from '../contact'
import { socialMedia } from '../constants';

export const Contact = () => {
	return (
		<div id="contact">
			<h1 className="section-header">
				<span>
					Contact
                </span>
			</h1>
			<div className="skills-wrapper">
				<div className="contacts-wrapper">
					<div className="contact-icon-wrapper">
						<Email />
					</div>
					<div className="contact-title">
						Stay in touch !
                	</div>
					<div className="contact-subtitle">
						Reach out to me if you have any exciting project in mind.
                	</div>
					<div className="contact-details">
						<div className="contact-label">email</div>
						<div className="contact-desc">himayand21@gmail.com</div>
					</div>
					<div className="contact-details">
						<div className="contact-label">phone</div>
						<div className="contact-desc">+91 9874 55 2467</div>
					</div>
					<div className="contact-details">
						<div className="contact-desc">Join me on Social Media</div>
						<ul className="social-media">
							{socialMedia.map(each => (
								<li key={each.link}>
									<a href={each.link} target="_tab">
										{each.icon}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="contact-details">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={"https://docs.google.com/document/d/15doDXeKcrqgC8pVHZSiPSwlYTiWBIBKlXVPMvaiT0bI/preview#"}
						>
							View Resume
					</a>
					</div>
				</div>
			</div>
			<div className="copyright">
				HIMAYAN DEBNATH <span>© 2020</span>
			</div>
		</div>
	)
}