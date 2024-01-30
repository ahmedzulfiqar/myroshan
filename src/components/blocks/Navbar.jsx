import React, { useState } from "react";
import List from "../atoms/List";
import Mobilelist from "../atoms/Mobilelist";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="col-12 bg-light  px-2 p-0 shadow-sm   der fixed-top">
        <div className="mx-auto  widths ">
          <div className="row m-0  py-xl-4 py-3  px-md-5  justify-content-center ">
            <div className="col-xl-2  col-9 text-start  p-0  align-self-center">
              <Link
                className="fs-3  d-xl-block d-none text-main fw-bold text-uppercase align-self-center"
                to="/home"
              >
                <span className="text-main ">Roshan</span> Studio
              </Link>
              <Link
                className="fs-5  ps-0 d-xl-none d-block text-main fw-bold text-uppercase align-self-center"
                to="/home"
              >
                <span className="text-main ">Roshan</span> Studio
              </Link>
            </div>
            <List open={open} setopen={setopen} />
            <div className="col-3 d-lg-block d-none text-center">
              <div className="btn border-main mx-auto">
                Contact Us{" "}
                <i class="fa fa-arrow-right ps-2" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobilelist open={open} setopen={setopen} />
    </>
  );
}

export default Navbar;
