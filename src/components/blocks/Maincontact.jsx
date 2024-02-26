import React from "react";

function Maincontact() {
  return (
    <div
      className="row m-0 justify-content-center align-items-center py-xxl-0 py-5  overflow-hidden  "
      style={{ minHeight: "100vh" }}
    >
      <div className="col-lg-9  col-12  px-lg-4 align-self-center ">
        <div className="row m-0  justify-content-start">
          <div className="col-lg-7 col-12 align-self-center d-xxl-block d-none ">
            <div className="display-2 fw-bolder text-start mb-3  text-uppercase ">
              Contact <span className="text-main">US</span>
            </div>
            <p className="ps-1 fs-5 mb-5">
              We'd love to help you out with any queries or service-related
              information at the earliest. Please drop in a line.
            </p>
            <div className="fs-4 fw-bolder text-start mb-3  text-uppercase ">
              office Address
            </div>
            <p className="ps-1 w-75 mb-5">
              Roshan Studio
              <br />
              Ground Floor, Ekkam Tower, Plot No. F379, Phase 8B, Sector 74,
              Industrial Area, Mohali - 160055
              <br />
            </p>
            <div className="fs-4 fw-bolder text-start mb-3  text-uppercase ">
              Working hours
            </div>
            <p className="ps-1 w-75 mb-5">
              10 AM to 6 PM IST
              <br />
              Mon - Sat
              <br />
            </p>
            <a href="" className="text-main fw-bolder fs-5">
              Roshanstudio@gmail.com
            </a>
            <p className="fs-4 fw-bolder">Trusted by global creators.</p>
          </div>
          <div className="col-lg-7 col-12 align-self-center d-xxl-none d-block mt-md-5 ">
            <div className="display-5 fw-bolder text-start mb-3  text-uppercase ">
              Contact <span className="text-main">US</span>
            </div>
            <p className="ps-1 fs-5 mb-4">
              We'd love to help you out with any queries or service-related
              information at the earliest. Please drop in a line.
            </p>
            <div className="fs-4 fw-bolder text-start mb-2  text-uppercase ">
              office Address
            </div>
            <p className="ps-1 w-75 mb-4">
              Roshan Studio
              <br />
              Ground Floor, Ekkam Tower, Plot No. F379, Phase 8B, Sector 74,
              Industrial Area, Mohali - 160055
              <br />
            </p>
            <div className="fs-4 fw-bolder text-start mb-2  text-uppercase ">
              Working hours
            </div>
            <p className="ps-1 w-75 mb-4">
              10 AM to 6 PM IST
              <br />
              Mon - Sat
              <br />
            </p>
            <a href="" className="text-main fw-bolder fs-5">
              Roshanstudio@gmail.com
            </a>
            <p className="fs-4 fw-bolder">Trusted by global creators.</p>
          </div>
          <div className="col-lg-5 d-lg-block d-none p-5  col-12 align-self-center overflow-hidden ">
            <img
              src={
                "https://th.bing.com/th/id/R.405380ab6bc525a7c65725d76e6b83c5?rik=aDPHizQu4YFdwg&pid=ImgRaw&r=0"
              }
              className="img-fluid rounded-4 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontact;
