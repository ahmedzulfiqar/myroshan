import React, { useRef, useState } from "react";
import Sixthhome from "../blocks/Sixthhome";
import Homefooter from "../blocks/Homefooter";
import Mainservice from "../blocks/Mainservice";
import Secondservice from "../blocks/Secondservice";
import Thirdservice from "../blocks/Thirdservice";
import Forthservice from "../blocks/Forthservice";
import Maincontact from "../blocks/Maincontact";

function Contact() {
  return (
    <div className="row m-0 ">
      <div className="col-12 p-0 ">
        <Maincontact />
        <Homefooter />
      </div>
    </div>
  );
}

export default Contact;
