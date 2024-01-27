import React from "react";
import img1 from "../media/Team Building - 2250x1650.png";

function Home() {
  return (
    <div
      className="row m-0 justify-content-center align-items-center"
      style={{ height: "60vh" }}
    >
      <div className="col-lg-9 col-12 mt-lg-0 mt-4  px-lg-4 ">
        <div className="row m-0">
          <div className="col-lg-6 col-12 align-self-center ">
            <div className="display-3 mb-4 fw-bolder text-uppercase">
              Helping the <span className="text-main">world's greatest </span>
              creators create.
            </div>
            <p className="fs-4 ps-1">
              Taking content creation to the next level with our post production
              and growth strategy services.
            </p>
          </div>
          <div className="col-lg-6 col-12 align-self-center">
            <img src={img1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
