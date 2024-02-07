import React from "react";

function Reviewcard({ data }) {
  return (
    <div class="card  bg-gradient border-0 p-2 py-lg-4 py-3  rounded-4">
      <div class="row">
        <div className="col-12 mb-md-4 mb-1">
          <div className="row m-0">
            <div className="col-2 d-md-block d-none">
              <img src={data.img} className="img-fluid rounded-circle" alt="" />
            </div>
            <div className="col-md-10 col-12 align-self-center">
              <div className="fs-3 fw-bolder text-light">{data.name}</div>
              <p className="fs-6 text-light opacity-75">29.K Suscribers</p>
            </div>
          </div>
        </div>
        <div className="col-12 px-lg-4">
          <p className="text-light d-md-block d-none">{data.text}</p>{" "}
          <p className="text-light small  d-md-none d-block">{data.text}</p>{" "}
          <p class="card-text text-start ">
            <ul class="list-unstyled d-flex justify-content-start">
              <li>
                <i class="fas fa-star fa-sm text-warning me-1"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning me-1"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning me-1"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning me-1"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviewcard;
