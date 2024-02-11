import React, { useRef, useState } from "react";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
import Mainportfolio from "../blocks/Mainportfolio";
import Secondportfolio from "../blocks/Secondportfolio";
import Thirdportfolio from "../blocks/Thirdportfolio";
import Forthportfolio from "../blocks/Forthportfolio";
import Fifthportfolio from "../blocks/Fifthportfolio";
import Sizthportfolio from "../blocks/Sizthportfolio";
import Sevetnhportfolio from "../blocks/Sevetnhportfolio";
import Eigthportfolio from "../blocks/Eigthportfolio";
function About() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Mainportfolio />
        <hr className="w-75 my-5 mx-auto" />
        <Secondportfolio />
        <hr className="w-75  my-5 mx-auto" />
        <Thirdportfolio />
        <hr className="w-75  my-5 mx-auto" />
        <Forthportfolio />
        <hr className="w-75  my-5 mx-auto" />
        <Fifthportfolio />
        <hr className="w-75  my-5 mx-auto" />
        <Sizthportfolio />
        <hr className="w-75  my-5 mx-auto" />
        <Sevetnhportfolio />
        <hr className="w-75  my-5 mx-auto" />
        <Eigthportfolio />
        <Sixthhome />
        <Homefooter />
      </div>
    </div>
  );
}

export default About;
