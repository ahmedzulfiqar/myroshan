import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import img3 from "../media/vlogs/maxresdefault (2).jpg";
import img4 from "../media/vlogs/maxresdefault (3).jpg";
import img1 from "../media/vlogs/maxresdefault.jpg";
import img5 from "../media/vlogs/maxresdefault (4).jpg";
import img2 from "../media/vlogs/maxresdefault (1).jpg";
import img6 from "../media/vlogs/maxresdefault (5).jpg";
import img7 from "../media/vlogs/maxresdefault (6).jpg";
import img8 from "../media/vlogs/maxresdefault (7).jpg";
import img9 from "../media/vlogs/maxresdefault (8).jpg";
import img10 from "../media/vlogs/maxresdefault (9).jpg";
import img11 from "../media/vlogs/maxresdefault (10).jpg";
import img12 from "../media/vlogs/maxresdefault (11).jpg";
import Previewcard from "../atoms/Previewcard";

function Fifthportfolio() {
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
    {
      imageUrl: img7,
      title: "The Guy",
      subscribers: "25.9K",
    },
    {
      imageUrl: img8,
      title: "The Reel Person",
      subscribers: "10M",
    },
    {
      imageUrl: img9,
      title: "The New Person",
      subscribers: "5.9M",
    },
    {
      imageUrl: img10,
      title: "The Guy",
      subscribers: "25.9K",
    },
  ];

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <div className="row m-0 justify-content-center align-items-center py-4 overflow-hidden ">
      <div className="col-lg-9 col-12 my-lg-0 my-4  px-lg-4 ">
        <div className="row m-0 justify-content-evenly">
          <motion.div className="col-lg-6 col-12 pe-lg-5 me-lg-5">
            <div className="fs-5 mb-2 fw-bold">PORTFOLIO</div>
            <div className="display-2 fw-bolder mb-4">
               Vlogs <span className="text-main">Videos</span>
            </div>
            <p className="mb-lg-4 mb-2 fs-5 ">
              Browse through our award-winning work for both live-action and
              animation, motion graphics, color grading and VFX, and get your
              creative juices flowing for your next video project.
            </p>
            <div
              className="btn btn-lg border-0 text-main fw-bolder ps-1 rounded-1"
              onClick={() => setshow(!show)}
            >
              {!show ? "View More" : "View Less"}
              <i class="fa fa-arrow-right ps-1" aria-hidden="true"></i>
            </div>
          </motion.div>
          <div className="col-lg-5 my-lg-0 my-4 px-lg-3 px-2 col-12 align-self-center">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper3"
              loop={true}
            >
              {jsonDataArray.map((i) => {
                return (
                  <SwiperSlide className="rounded-2">
                    <Previewcard data={i} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {show && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="col-12"
            >
              <div className="row m-0 mt-lg-5 mt-3 pt-lg-5">
                {jsonDataArray.map((i, index) => (
                  <motion.div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 py-3 px-3 rounded-pill px-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Previewcard data={i} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Fifthportfolio;
