import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Teamcard from "../atoms/Teamcard";
function Secondabout() {
  return (
    <div
      className="row m-0 justify-content-center   align-items-end pt-lg-5 px-lg-5   overflow-hidden "
      style={{ minHeight: "80vh" }}
    >
      <div className="col-lg-9  col-12 mt-lg-0 mt-0   ">
        <div className="row m-0 justify-content-center ">
          <div className="col-lg-11 col-12 text-lg-center align-self-center ">
            <div className="display-3 mb-lg-5 mb-3 fw-bolder text-uppercase text-dark">
              Meet the <span className="text-main">Team </span>
            </div>
            <p className="fs-5 ps-1 p-0 m-0">
              Praper Media was born in our founder Pratham’s home, as a one-man
              agency.
            </p>
            <p className="fs-5 ps-1 p-0 m-0 d-md-block d-none">
              From there, we’ve grown to become a team of 40 top creatives,
              fuelled by helping some of the world’s biggest creators grow.
            </p>
          </div>
          <div className="col-12 mt-lg-5 py-lg-5 py-4">
            <Swiper
              slidesPerView={1}
              draggable={true}
              spaceBetween={30}
              className="mySwiper"
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <Teamcard
                  data={{
                    img: "https://tse1.mm.bing.net/th/id/OIP.qKieWdVFqX85HZX5zFfiPQHaLG?rs=1&pid=ImgDetMain",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard
                  data={{
                    img: "https://i.pinimg.com/originals/db/2c/0e/db2c0e6a86e05819748213dff464b423.jpg",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard
                  data={{
                    img: "https://tse1.mm.bing.net/th/id/OIP.qKieWdVFqX85HZX5zFfiPQHaLG?rs=1&pid=ImgDetMain",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard
                  data={{
                    img: "https://i.pinimg.com/originals/db/2c/0e/db2c0e6a86e05819748213dff464b423.jpg",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondabout;
