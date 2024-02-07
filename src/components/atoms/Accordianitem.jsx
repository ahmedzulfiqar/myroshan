import React from "react";

function AccordionItem({ data }) {
  return (
    <div className="accordion-item py-lg-2 my-2 border-0 shadow-sm">
      <h2 className="accordion-header">
        <button
          className="accordion-button fs-4 d-md-flex d-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${data.no}`}
          aria-expanded="false"
          aria-controls={`collapse${data.no}`}
        >
          {data.quieston}
        </button>
        <button
          className="accordion-button fs-6 small d-md-none d-flex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${data.no}`}
          aria-expanded="false"
          aria-controls={`collapse${data.no}`}
        >
          {data.quieston}
        </button>
      </h2>
      <div
        id={`collapse${data.no}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body text-start">{data.answer}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
