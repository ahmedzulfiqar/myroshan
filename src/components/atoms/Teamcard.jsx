import React from "react";

function Teamcard({ data }) {
  return (
    <div className="card shadow rounded-3 overflow-hidden border p-0">
      <div className="row m-0 justify-content-start">
        <div className="col-lg-5  d-md-block d-none col-12 p-0">
          <img src={data.img} alt="" className="img-fluid  h-100" />
        </div>
        <div className="col-lg-6 col-12 ps-4 pe-2 py-lg-4 py-2">
          <div className="fs-2 fw-bolder text-black mb-3">Pratham Jindal</div>
          <p>
            A boss on paper, but more of a mentor and friend to us all.
            Pratham’s an adept VFX artist who quit his job to try his hand at
            freelancing, and ended up creating an agency at just 21.
          </p>
          <p>
            He wears the same outfit everyday (Mark Zuckerberg much?), is the
            best leader one could ask for, and is super proud of the chill +
            results driven work culture he’s created.
          </p>
          <div className="d-flex justify-content-start text-main">
            <div className="fs-3 pe-2">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </div>
            <div className="fs-3 px-2">
              <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamcard;
