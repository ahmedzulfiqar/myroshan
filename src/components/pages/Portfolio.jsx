import React, { useRef, useState } from "react";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
import Mainabout from "../blocks/Mainabout";
import Secondabout from "../blocks/Secondabout";
import Mainportfolio from "../blocks/Mainportfolio";
function About() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Mainportfolio/>
        <Sixthhome />
        <Homefooter />
      </div>
    </div>
  );
}

export default About;
