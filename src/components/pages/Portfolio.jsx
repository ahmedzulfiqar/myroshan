import React, { useRef, useState } from "react";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
import Mainportfolio from "../blocks/Mainportfolio";
import Secondportfolio from "../blocks/Secondportfolio";
function About() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Mainportfolio />
        <hr className="w-75 opacity-100 mb-5 mx-auto" />
        <Secondportfolio />
        <Sixthhome />
        <Homefooter />
      </div>
    </div>
  );
}

export default About;
