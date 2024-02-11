import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCoverflow, EffectCreative, Pagination } from "swiper/modules";
import img1 from "../media/reel/maxresdefault.jpg";
import img2 from "../media/reel/maxresdefault (1).jpg";
import img3 from "../media/reel/maxresdefault (2).jpg";
import img4 from "../media/reel/maxresdefault (3).jpg";
import img5 from "../media/reel/maxresdefault (4).jpg";
import img6 from "../media/reel/maxresdefault (5).jpg";
import Previewcard from "../atoms/Previewcard";

function Thirdservice() {
  const [show, setshow] = useState(false);
  const jsonDataArray = [
    {
      imageUrl: img1,
      title: "The Guy",
      subscribers: "25.9K",
    },
    {
      imageUrl: img2,
      title: "The Reel Person",
      subscribers: "10M",
    },
    {
      imageUrl: img3,
      title: "The New Person",
      subscribers: "5.9M",
    },
    {
      imageUrl: img4,
      title: "The Guy",
      subscribers: "25.9K",
    },
    {
      imageUrl: img5,
      title: "The Reel Person",
      subscribers: "10M",
    },
    {
      imageUrl: img6,
      title: "The New Person",
      subscribers: "5.9M",
    },
  ];

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <div className="row m-0 justify-content-center bg-lessmainer align-items-center my-lg-5 my-3 py-lg-4 mx-lg-3 py-2 overflow-hidden ">
      <div className="col-lg-9 col-12 my-lg-4 py-lg-3 p-0 px-lg-4 ">
        <div className="row m-0 justify-content-evenly">
          <div className="col-lg-5 p-3 col-12 align-self-center">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"1"}
              coverflowEffect={{
                rotate: 80,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              speed={1000}
              modules={[EffectCoverflow]}
              className="mySwiper"
            >
              {jsonDataArray.map((i) => {
                return (
                  <SwiperSlide className="rounded-2">
                    <Previewcard data={i} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>{" "}
          <motion.div className="col-lg-6 col-12 pe-lg-5 mt-lg-0 mt-4  align-self-center">
            <div className=" mb-lg-3 mb-2 fw-bold bg- btn  btn-sm bg-new">
              SERVICES
            </div>
            <div className="display-5 fw-bolder mb-4 ">
              Short-Form Vertical Video Editing
            </div>
            <p className="mb-lg-3 mb-3 fs-5 d-md-block d-none">
              TikTok, Reels and YouTube Shorts have taken the world by storm,
              and can grow your reach faster than ever.
            </p>{" "}
            <p className="mb-lg-3 mb-3 fs-5  d-md-block d-none">
              We identify high virality potential moments from your long-form
              content, and edit them into short-form clips to boost your growth.
            </p>
            <p className="mb-lg-3 mb-3 fs-6 d-md-none d-block">
              TikTok, Reels and YouTube Shorts have taken the world by storm,
              and can grow your reach faster than ever.
            </p>{" "}
            <p className="mb-lg-3 mb-3 fs-6  d-md-none d-block">
              We identify high virality potential moments from your long-form
              content, and edit them into short-form clips to boost your growth.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Thirdservice;
