import React, { useState, useEffect } from "react";
import { Resume } from "./icons";
import { navList, navIds, socialMedia } from "./constants";

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
        if (scrollY > curr.offset - 10) return curr.navId;
        return acc;
      }, "home");
      setCurrentSection(current);
    }
  }, [scrollY]);

  const className = currentSection === "home" ? 'arrow-hide' : 'arrow-show'

  return (
    <React.Fragment>
      <span className="navbar-show">
        <i
          className={`fas fa-arrow-up ${className}`}
          onClick={() => goToSection("home")}
        />
        <i className="fas fa-bars" onClick={() => props.toggleState()} />
      </span>
      <div className={props.navShow ? "navbar-open" : "navbar-closed"}>
        <nav>
          <div className="nav-img">
            <Resume />
          </div>
          <ul className="navlist-wrapper">
            {navList.map((navItem) => (
              <li
                id="nav-link"
                onClick={() => goToSection(navItem.link)}
                className={
                  currentSection === navItem.link ?
                  "current-nav" :
                  ""
                }
              >
                {navItem.label}
              </li>
            ))}
          </ul>
          {/* <ul className="social-media">
            {socialMedia.map(icon => (
              <li>
                <a href={icon.link} target="_tab">
                  <i className={icon.name} />
                </a>
              </li>
            ))}
          </ul> */}
        </nav>
      </div>
    </React.Fragment >
  );
};
NavBar.defaultProps = {
  navShow: false
};
export default NavBar;
