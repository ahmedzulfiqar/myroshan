import React, { useRef, useState } from "react";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
import Mainservice from "../blocks/Mainservice";
import Secondservice from "../blocks/Secondservice";
import Thirdservice from "../blocks/Thirdservice";
import Forthservice from "../blocks/Forthservice";

function Services() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Mainservice />
        <Secondservice />
        <Thirdservice />
        <Forthservice />
        <Sixthhome />
        <Homefooter />
      </div>
    </div>
  );
}

export default Services;
