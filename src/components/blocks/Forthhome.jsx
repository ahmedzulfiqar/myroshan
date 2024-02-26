import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Newcard from "../atoms/Newcard";
import img1 from "../media/real-estate/maxresdefault.jpg";
import img2 from "../media/real-estate/maxresdefault (1).jpg";
import img3 from "../media/real-estate/maxresdefault (2).jpg";
import img4 from "../media/real-estate/maxresdefault (3).jpg";
import img5 from "../media/real-estate/maxresdefault (4).jpg";
import img6 from "../media/real-estate/maxresdefault (5).jpg";
import { Link } from "react-router-dom";
function Forthhome() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    grabCursor: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    rtl: true, // Set this to true to make the slider move to the left
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
  return (
    <div className="row m-0 justify-content-center mb-5   text-light align-items-center  overflow-hidden ">
      <div className="col-lg-10 col-12 mt-lg-1 mt-0  px-lg-4 py-0 ">
        <div className="row m-0 justify-content-center position-relative mt-lg-5">
          <div className="col-12 text-md-center text-start pb-lg-4 pb-3  mt-lg-0 mt-5  d-xxl-flex d-none justify-content-between">
            <div className="display-4 text-dark fw-bolder text-uppercase">
              Check Out Our <span className="text-main">Work</span>
            </div>
            <Link
              className="btn btn-lg text-dark bg-light py-lg-3 px-lg-5 py-1 px-3 mt-lg-0 mt-4 border-main align-self-center"
              to="/portfolio"
            >
              Portfolio
              <i class="fa fa-arrow-right ps-3" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="col-12 text-md-center text-start pb-lg-4 pb-3  mt-xxl-0 mt-5  d-xxl-none d-flex justify-content-between">
            <div className="display-6 text-dark fw-bolder text-uppercase align-self-center">
              Check Out Our <span className="text-main">Work</span>
            </div>
            <Link
              className="btn btn-lg text-dark bg-light py-xxl-3 px-xxl-5 py-1 px-3 mt-xxl-0 mt-4 border-main align-self-center"
              to="/portfolio"
            >
              Portfolio
              <i class="fa fa-arrow-right ps-3" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="col-12 mb-lg-2 mt-0 py-4 ">
            <Slider {...settings}>
              {jsonDataArray.map((data, index) => (
                <Newcard key={index} cardData={data} />
              ))}
            </Slider>
          </div>{" "}
          <div className="col-12 mb-lg-2 mt-0 py-2 ">
            <Slider {...settings2}>
              {jsonDataArray.map((data, index) => (
                <Newcard key={index} cardData={data} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forthhome;
