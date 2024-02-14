import React from "react";
import logo from "../media/R Logo.png";
function Homefooter() {
  return (
    <div className="row m-0 justify-content-center mt-5  px-lg-5  text-dark align-items-center  overflow-hidden ">
      <div className="col-lg-10 col-12 mt-lg-0 mt-0   py-0 ">
        <div className="row m-0 justify-content-evenly rounded-4 py-5 position-relative mt-lg-5 ">
          <div className="col-12 border-bottom pb-lg-4 pb-2 d-lg-flex d-block justify-content-between ">
            <div className="display-6 fw-bolder text-main text-uppercase ">
              Roshan Studio
            </div>
            <div className="d-flex mt-lg-0 mt-3   align-self-center">
              <div className="fs-6 pe-3">About</div>
              <div className="fs-6 px-3">Portfolio</div>
              <div className="fs-6 px-3">Services</div>
            </div>
          </div>
          <div className="col-12 py-3 row px-0 pt-lg-4 justify-content-between ">
            <div className="fs-6 small  col-lg-6 col-12 text-dark">
              Roshan studio is a digital marketing agency based in Islamabad.
              Our vision is to provide our clients with the best solutions
              within the services we provide and a huge impact on the sales of
              their products and services.
            </div>
            <div className="d-flex col-lg-4 mt-lg-0 mt-3 col-12 align-self-center justify-content-lg-end justify-content-start ">
              <a className="fs-2 pe-3 text-dark" href="https://www.instagram.com/roshanstudio_101/">
                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="fs-2 px-3 text-dark">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a className="fs-2 px-3 text-dark" >
                <i class="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homefooter;
