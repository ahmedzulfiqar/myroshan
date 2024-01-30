import React from "react";
import { SwiperSlide } from "swiper/react";

function Swipercard() {
  return (
    <div className="card p-0 m-0 border-0 px-4 bg-transparent text-light text-center">
      <img
        src="https://prapermedia.com/wp-content/uploads/2023/07/image-12-e1690824004703.png"
        alt=""
        className="img-fluid"
      />
      <div className="fs-5 fw-bolder py-3 pb-1 text-uppercase">The Guy</div>{" "}
      <div className="fs-6 fw-light py-0 text-">25.9K Subscribers</div>
    </div>
  );
}

export default Swipercard;
