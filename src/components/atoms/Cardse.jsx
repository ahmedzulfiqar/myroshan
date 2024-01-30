import React from "react";

function Cardse({ data }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-12 py-lg-3 py-2 px-2 p-0 Cardse">
      <div className="card px-4 py-4 border-secondary border-opacity-50 rounded-3">
        <i class={`${data.icon} display-5 text-main`} aria-hidden="true"></i>
        <div className="fs-4 mt-3 fw-bolder datanma ">{data.name}</div>
        <p className="mt-2">{data.para}</p>
      </div>
    </div>
  );
}

export default Cardse;
