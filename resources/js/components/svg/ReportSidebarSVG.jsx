import React from "react";

const ReportSidebarSVG = ({ width = 100, height = 100 }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-graph-up-arrow icon icon-xs me-2"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
};

export default ReportSidebarSVG;
