import React, { useRef, useState } from "react";
import Fifthhome from "../blocks/Fifthhome";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
import Mainabout from "../blocks/Mainabout";
import Secondabout from "../blocks/Secondabout";
function About() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Mainabout />
        <Secondabout />
        <Sixthhome />
        <Homefooter />
      </div>
    </div>
  );
}

export default About;
