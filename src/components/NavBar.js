import React, { useState, useEffect } from "react";
import { Resume } from "./icons";
import { navList, navIds } from "./constants";

import up from '../images/icons/up.svg';
import bars from '../images/icons/bars.svg';

const goToSection = sectionID => {
  const element = document.getElementById(sectionID);
  window.scrollTo({
    top: element.offsetTop + 10
  });
};

export const NavBar = props => {
  const [currentSection, setCurrentSection] = useState("home");
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    window.addEventListener("resize", () => {
      setScrollY(window.scrollY);
    });
  }, []);
  useEffect(() => {
    const offsetList = navIds.map(navId => {
      const element = document.getElementById(navId);
      return {
        navId,
        offset: element.offsetTop - 10
      };
    });
    if (offsetList.length) {
      const current = offsetList.reduce((acc, curr) => {
        if (scrollY > curr.offset) return curr.navId;
        return acc;
      }, "home");
      setCurrentSection(current);
    }
  }, [scrollY]);

  const className = currentSection === "home" ? "arrow-hide" : "arrow-show";

  return (
    <React.Fragment>
      <span className="navbar-show">
        <i
          className={`fas fa-arrow-up ${className}`}
          onClick={() => goToSection("home")}
        >
          <img src={up} alt="" />
        </i>
        <i
          className="fas fa-bars"
          onClick={props.toggleState}
        >
          <img src={bars} alt="" />
        </i>
      </span>
      <div className={props.navShow ? "navbar-open" : "navbar-closed"}>
        <nav>
          <div className="nav-img">
            <Resume />
          </div>
          <ul className="navlist-wrapper">
            {navList.map(navItem => (
              <li
			  	key={navItem.label}
                id="nav-link"
                onClick={() => goToSection(navItem.link)}
                className={currentSection === navItem.link ? "current-nav" : ""}
              >
                {navItem.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
NavBar.defaultProps = {
  navShow: false
};
