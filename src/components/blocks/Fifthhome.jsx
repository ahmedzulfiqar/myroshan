import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Reviewcard from "../atoms/Reviewcard";

function Fifthhome() {
  return (
    <div
      className="row m-0 justify-content-center align-items-center pt-4 overflow-hidden "
      style={{ minHeight: "80vh" }}
    >
      <div className="col-lg-9 col-12 mt-lg-0 mt-4  px-lg-4 ">
        <div className="row m-0 justify-content-evenly">
          <div className="col-lg-6 col-12 pe-lg-5 me-lg-5">
            <div className="fs-5 mb-2 fw-bold">TESTIMONIALS</div>
            <div className="display-2 fw-bolder mb-3">
              Hear from the <span className="text-main">creators</span>
            </div>
            <p className="mb-lg-5 mb-3 ">
              We’re trusted by global creators across niches from reaction
              videos to comedy and gaming. This is what they have to say!
            </p>
            <div className="row m-0 text-lg-start text-start ">
              <div className="col-lg-3 col-md-4 col-6 px-0  text-lg-start text-start">
                <div className="fs-1 fw-bold">50+</div>
                <div className="fs-6">Creators Client</div>
              </div>
              <div className="col-lg-3 col-md-4 col-6  px-0 text-lg-start text-start ">
                <div className="fs-1 fw-bold d-inline-block text-center">
                  3M+
                </div>
                <div className="fs-6">Subscribers gained</div>
              </div>{" "}
              <div className="col-lg-3 col-md-4 col-6  px-lg-2 px-0 text-start mt-lg-0 my-3 ">
                <div className="fs-1 fw-bold">2.5B+</div>
                <div className="fs-6">Views received</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 my-lg-0 my-4 px-lg-3 px-4 col-12 align-self-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://prapermedia.com/wp-content/uploads/2023/07/channels4_profile-4.jpg",
                    name: "Maggie McLoan",
                    profession: "Photographer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://prapermedia.com/wp-content/uploads/2023/07/channels4_profile-4.jpg",
                    name: "Maggie McLoan",
                    profession: "Photographer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://prapermedia.com/wp-content/uploads/2023/07/channels4_profile-4.jpg",
                    name: "Maggie McLoan",
                    profession: "Photographer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://prapermedia.com/wp-content/uploads/2023/07/channels4_profile-4.jpg",
                    name: "Maggie McLoan",
                    profession: "Photographer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://prapermedia.com/wp-content/uploads/2023/07/channels4_profile-4.jpg",
                    name: "Maggie McLoan",
                    profession: "Photographer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>{" "}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifthhome;
