import React from "react";
import { Intro, About, Skills, Projects, Contact } from "./sections";

export const Home = () => {
  return (
    <React.Fragment>
      <Intro />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </React.Fragment>
  );
}
