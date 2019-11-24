import React from "react";
import { Intro, About, Skills } from "./sections";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    AOS.init();
    return (
      <React.Fragment>
        <Intro />
        <Skills />
        <About />
        <div id="projects">
          <h1>Section 1</h1>
          <p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
          </p>
        </div>
        <div id="contact">
          <h1>Section 3</h1>
          <p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
          </p>
          <p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
          </p>
        </div>
      </React.Fragment>
    );
  }

export default Home;
