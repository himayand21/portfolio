import React from "react";
import {Email} from '../contact'
import {socialMedia} from '../constants';
import Resume from '../../images/resume.pdf';

export const Contact = () => {
    return (
        <div id="contact">
            <div className="section-header">
                <span>
                    Contact
                </span>
            </div>
            <div className="skills-wrapper contacts-wrapper">
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
                            <li>
                                <a href={each.link} target="_tab">
                                    {each.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact-details">
                    <a download href={Resume}>Download Resume</a>
                </div>
            </div>
            <div className="copyright">
                HIMAYAN DEBNATH <span>© 2019</span>
            </div>
        </div>
    )
}