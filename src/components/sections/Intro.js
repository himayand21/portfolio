import React from "react";
import { Image, ViewButton, Description } from '../intro';

const Intro = () => {
  return (
    <div className="intro" id="home">
        <Image />
        <Description />
        <ViewButton />
    </div>
  );
};

export default Intro;
