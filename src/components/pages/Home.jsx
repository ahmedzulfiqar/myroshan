import React, { useRef, useState } from "react";
import Mainhome from "../blocks/Mainhome";
import Secondhome from "../blocks/Secondhome";
import Thirdhome from "../blocks/Thirdhome";
function Home() {
  return (
    <div className="row m-0">
      <div className="col-12 p-0 ">
        <Mainhome />
        <Secondhome />
        <Thirdhome />
      </div>
    </div>
  );
}

export default Home;
