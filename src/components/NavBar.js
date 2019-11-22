import React, { useState, useEffect } from "react";
import Resume from "../images/resume.png";
import { navList, navIds } from "./constants";

const NavBar = props => {
  const [currentSection, setCurrentSection] = useState("home");
  const [offsetList, setOffsetList] = useState([]);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const goToSection = sectionID => {
    const element = document.getElementById(sectionID);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    const offsetTops = navIds.map(navId => {
      const element = document.getElementById(navId);
      return {
        navId,
        offset: element.offsetTop
      };
    });
    setOffsetList(offsetTops);
  }, []);
  useEffect(() => {
    if (offsetList.length) {
      const current = offsetList.reduce((acc, curr) => {
        if (scrollY > curr.offset) return curr.navId;
        return acc;
      }, "home");
      setCurrentSection(current);
    }
  }, [scrollY]);
  return (
    <React.Fragment>
      <span className="navbar-show" onClick={() => props.toggleState()}>
        <i className="fas fa-bars" />
      </span>
      <div className={props.navShow ? "navbar-open" : "navbar-closed"}>
        <nav className="navbar navbar-default">
          <div id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="nav-img">
                <img height={230} width={230} src={Resume} alt="resume-icon" />
              </li>
              {Object.entries(navList).map(([key, value]) =>
                key === "socialMedia" ? (
                  <li className="social-media">
                    {value.map(icon => (
                      <a href={icon.link}>
                        <i className={icon.name} />
                      </a>
                    ))}
                  </li>
                ) : (
                  <li
                    id="nav-link"
                    onClick={() => goToSection(value.link)}
                    className={
                      currentSection === value.link ? "current-nav" : ""
                    }
                  >
                    {value.label}
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
NavBar.defaultProps = {
  navShow: false
};
export default NavBar;
