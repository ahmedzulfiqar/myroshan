import React from "react";

function Previewcard2({ data }) {
  return (
    <div className="card">
      <img src={data.imageUrl} className="img-fluid rounded-3" alt="" />
   
    </div>
  );
}

export default Previewcard2