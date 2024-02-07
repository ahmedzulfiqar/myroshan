import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Swipercard from "../atoms/Swipercard";

function Thirdhome() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
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
          slidesToShow: 3,
        },
      },
    ],
  };
  const jsonDataArray = [
    {
      imageUrl:
        "https://prapermedia.com/wp-content/uploads/2023/07/image-12-e1690824004703.png",
      title: "The Guy",
      subscribers: "25.9K",
    },
    {
      imageUrl:
        "https://prapermedia.com/wp-content/uploads/2023/07/image-29-e1690823982844.png",
      title: "The Reel Person",
      subscribers: "10M",
    },
    {
      imageUrl:
        "https://prapermedia.com/wp-content/uploads/2023/07/image-27-e1690824067682.png",
      title: "The New Person",
      subscribers: "5.9M",
    },
    {
      imageUrl:
        "https://prapermedia.com/wp-content/uploads/2023/07/image-18.png",
      title: "The People Person",
      subscribers: "100K",
    },
    {
      imageUrl:
        "https://prapermedia.com/wp-content/uploads/2023/07/image-26-e1690824091922.png",
      title: "I am Pewdepie",
      subscribers: "333.9K",
    },
    {
      imageUrl:
        "https://prapermedia.com/wp-content/uploads/2024/01/image-49.png",
      title: "Criminal Guy",
      subscribers: "15M",
    },
  ];
  return (
    <div className="row m-0 justify-content-center   pt-lg-2  bg-gradient text-light align-items-center  overflow-hidden ">
      <div className="col-lg-12 col-12 mt-lg-0 mt-0 px-lg-4 py-0 ">
        <div className="row m-0 justify-content-center">
          
          <div className="col-12 mb-lg-2 mt-lg-3 py-1">
            <Slider {...settings}>
              {jsonDataArray.map((data, index) => (
                <Swipercard key={index} cardData={data} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdhome;
