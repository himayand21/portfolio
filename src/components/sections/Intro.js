import React from "react";
import { Image, ViewButton, Description } from '../intro';

export const Intro = () => {
  return (
    <div className="intro" id="home">
        <Image />
        <Description />
        <ViewButton />
    </div>
  );
};
