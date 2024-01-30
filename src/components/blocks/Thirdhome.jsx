import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Swipercard from "../atoms/Swipercard";
function Thirdhome() {
  return (
    <div className="row m-0 justify-content-center bg-main text-light align-items-center  overflow-hidden ">
      <div className="col-lg-12 col-12 mt-lg-0 mt-4  px-lg-4 py-0 ">
        <div className="row m-0 justify-content-center">
          <div className="col-12 mb-4 mt-5">
            <Swiper
              slidesPerView={7}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Swipercard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdhome;
