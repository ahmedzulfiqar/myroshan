import React from "react";
import image from "../media/R Logo.png";
import Cardse from "../atoms/Cardse";

function Secondhome() {
  return (
    <div
      className="row m-0 justify-content-center align-items-center  overflow-hidden "
      style={{ minHeight: "99vh" }}
    >
      <div className="col-lg-9 col-12 mt-lg-0 mt-4  px-lg-4 ">
        <div className="row m-0 justify-content-center">
          <div className="col-lg-12 col-12 align-self-center ">
            <div className="display-3 mb-4 fw-bolder text-uppercase text-main">
              Our <span className="text-dark">Services </span>
            </div>
            <p className="fs-4 ps-1">
              Taking content creation to the next level with our post production
              and growth strategy services.
            </p>
          </div>
          <div className="col-12">
            <div className="row m-0 mt-lg-5 mt-3">
              <Cardse
                data={{
                  name: "Promotional Videos",
                  para: "Captivate your audience with  promotional videos, boosting brand engagement and  conversions.",
                  icon: "fa fa-film",
                }}
              />

              <Cardse
                data={{
                  name: "YouTube Videos",
                  para: "Elevate your YouTube content with engaging videos, fostering longer views and increased subscriptions.",
                  icon: "fa-brands fa-youtube",
                }}
              />

              <Cardse
                data={{
                  name: "Music Videos",
                  para: "Transform your music into visual masterpieces, crafting videos that resonate and captivate your audience.",
                  icon: "fa fa-music",
                }}
              />

              <Cardse
                data={{
                  name: "Social Media Videos",
                  para: "Ignite your social presence with dynamic videos, driving engagement and expanding your online influence.",
                  icon: "fa fa-share-alt",
                }}
              />

              <Cardse
                data={{
                  name: "Wedding Videos",
                  para: "Cherish every moment with beautifully crafted wedding videos, preserving memories to last a lifetime.",
                  icon: "fa fa-ring",
                }}
              />

              <Cardse
                data={{
                  name: "Software/App Videos",
                  para: "Showcase your software through captivating videos, highlighting features for  user understanding.",
                  icon: "fa fa-laptop-code",
                }}
              />

              <Cardse
                data={{
                  name: "Thumbnail Design",
                  para: "Capture attention instantly with thumbnail designs, boosting click-through rates and content visibility.",
                  icon: "fa fa-image",
                }}
              />
              <Cardse
                data={{
                  name: "Educational Videos",
                  para: "Create informative videos to educate and engage your audience, making learning enjoyable and accessible.",
                  icon: "fa fa-graduation-cap",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondhome;
