import React from "react";
import Accordianitem from "../atoms/Accordianitem";

function Aboutfaq() {
  return (
    <div
      className="row m-0 justify-content-center   align-items-center pt-lg-5 mt-5 px-lg-5   overflow-hidden "
      style={{ minHeight: "80vh" }}
    >
      <div className="col-lg-9  col-12 mt-lg-0 mt-0">
        <div className="row m-0 justify-content-center ">
          <div className="col-xxl-11 col-12 text-lg-center align-self-center ">
            <div className="display-6 mb-lg-5 mb-3  fw-bolder text-uppercase text-dark">
              Frequently Asked
              <span className="text-main"> Questions. </span>
            </div>
            <div class="accordion" id="accordionExample">
              <Accordianitem
                data={{
                  no: "1",
                  quieston: "What is the turnaround time for videos?",
                  answer:
                    "We’re committed to providing the best results in the quickest time.This usually ranges between 2-4 days, depending on the length and typeof videos.",
                }}
              />
              <Accordianitem
                data={{
                  no: "6",
                  quieston: "What is the turnaround time for videos?",
                  answer:
                    "We’re committed to providing the best results in the quickest time.This usually ranges between 2-4 days, depending on the length and typeof videos.",
                }}
              />
              <Accordianitem
                data={{
                  no: "2",
                  quieston:
                    "Is your editing process standardized or adapted to each client’s content?",
                  answer:
                    "We know every creator is different. Which is why we’re open to complete customisation according to your voice and requirements. Our team will even give you suggestions to improve your content.",
                }}
              />
              <Accordianitem
                data={{
                  no: "3",
                  quieston: "What are the commercials? ",
                  answer:
                    "Our pricing is flexible, depending on the duration and genre of the content. We offer monthly and per-project models.You can get in touch for more detailed estimates.",
                }}
              />
              <Accordianitem
                data={{
                  no: "4",
                  quieston: "What is the turnaround time for videos?",
                  answer:
                    "We’re committed to providing the best results in the quickest time.This usually ranges between 2-4 days, depending on the length and typeof videos.",
                }}
              />
              <Accordianitem
                data={{
                  no: "5",
                  quieston: "What is the turnaround time for videos?",
                  answer:
                    "We’re committed to providing the best results in the quickest time.This usually ranges between 2-4 days, depending on the length and typeof videos.",
                }}
              />{" "}
              <Accordianitem
                data={{
                  no: "7",
                  quieston:
                    "Where is Roshan Studio located, and what are the working hours?",
                  answer:
                    "Our office is located in Islamabad, and working hours are 10 AM - 6 PM IST (Mon - Sat).",
                }}
              />
              <Accordianitem
                data={{
                  no: "8",
                  quieston: "What is the turnaround time for videos?",
                  answer:
                    "We’re committed to providing the best results in the quickest time.This usually ranges between 2-4 days, depending on the length and typeof videos.",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutfaq;
