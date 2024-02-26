import React, { useRef, useState } from "react";
import Mainhome from "../blocks/Mainhome";
import Secondhome from "../blocks/Secondhome";
import Thirdhome from "../blocks/Thirdhome";
import Forthhome from "../blocks/Forthhome";
import Fifthhome from "../blocks/Fifthhome";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
function Home() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Mainhome />
        <Secondhome />
        <div className="col-12 text-center my-lg-5 mb-4 d-xxl-block d-none">
          <div className="display-4 text-dark fw-bolder text-uppercase">
            Our <span className="text-main">Clients</span>
          </div>
        </div>
        <div className="col-12 text-center my-lg-5 mb-4 d-xxl-none d-block">
          <div className="display-5 text-dark fw-bolder text-uppercase">
            Our <span className="text-main">Clients</span>
          </div>
        </div>
        <Thirdhome />
        <Fifthhome />
        <Forthhome />
        <Sixthhome />
        <Homefooter />
      </div>
    </div>
  );
}

export default Home;
