import React from "react";
import { SwiperSlide } from "swiper/react";

function Swipercard({ cardData }) {
  const { imageUrl, title, subscribers } = cardData;

  return (
    <div className="card p-0 m-0 border-0 px-lg-5 px-3 py-2 bg-transparent text-light text-center">
      <img src={imageUrl} alt="" className="img-fluid px-lg-3 mx-auto" />
      <div className="fs-5 fw-bolder py-3 pb-1 text-uppercase d-md-block d-none">
        {title}
      </div>{" "}
      <div className="fs-6 fw-light py-0 text- d-md-block d-none">
        {subscribers} Subscribers
      </div>
    </div>
  );
}

export default Swipercard;
