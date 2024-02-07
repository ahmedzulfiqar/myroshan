import React from "react";

function Previewcard({ data }) {
  return (
    <div className="card">
      <img src={data.imageUrl} className="img-fluid rounded-3" alt="" />
      <button
        className="buttoner"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="26px"
        >
          <path
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Previewcard;
