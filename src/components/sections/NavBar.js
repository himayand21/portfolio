import React from "react";
import Resume from "../../images/resume.png";
import { navList } from "../constants";

const NavBar = props => {
  console.log(navList);
  return (
    <React.Fragment>
      <span className="navbar-show" onClick={() => props.toggleState()}>
        <i class="fas fa-bars" />
      </span>
      <div className={props.navShow ? "navbar-open" : "navbar-closed"}>
        <nav class="navbar navbar-default" data-spy="affix">
          <div id="myNavbar">
            <ul class="nav navbar-nav">
              <li className="nav-img">
                <img height={230} width={230} src={Resume} alt="resume-icon" />
              </li>
              {Object.entries(navList).map(([key, value]) => key === "socialMedia" ? (
                  <li className="social-media">
                    {value.map(icon => (
                      <a href={icon.link}>
                        <i className={icon.name} />
                      </a>
                    ))}
                  </li>
                ) : (
                  <li>
                    <a id="nav-link" href={value.link}>
                      {value.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
