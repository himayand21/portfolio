import React, { useState, useEffect } from "react";
import { Resume } from "./icons";
import { navList, navIds } from "./constants";

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
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-up"
            role="img"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            />
          </svg>
        </i>
        <i className="fas fa-bars" onClick={() => props.toggleState()}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              class=""
            />
          </svg>
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
