import React, { useState, useEffect } from "react";
import resume from '../images/icons/resume.svg';
import { navList, navIds } from "./constants";

import up from '../images/icons/up.svg';
import bars from '../images/icons/bars.svg';

const goToSection = sectionID => {
  const element = document.getElementById(sectionID);
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};

export const NavBar = props => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", fireOnScroll);
    window.addEventListener("resize", fireOnScroll);
  }, []);

  const fireOnScroll = () => {
    const scrollY = window.scrollY;
    const offsetList = navIds.map(navId => {
      const element = document.getElementById(navId);
      return {
        navId,
        offset: element.offsetTop - (window.innerHeight / 3)
      };
    });
    if (offsetList.length) {
      const current = offsetList.reduce((acc, curr) => {
        if (scrollY > curr.offset) return curr.navId;
        return acc;
      }, "home");
      setCurrentSection(current);
    }
  };

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
            <img src={resume} alt="" />
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
          <div className="nav-footer">
            <div>This page is about to go through some major design upgrades in the next few weeks.</div>
            <div className="nav-footer-bold">Stay tuned.</div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
NavBar.defaultProps = {
  navShow: false
};
