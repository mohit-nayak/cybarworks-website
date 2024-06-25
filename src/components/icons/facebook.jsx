import React from "react";

const FacebookIcon = ({ className = "" }) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="38"
        cy="38"
        r="35.5"
        fill="#000529"
        fill-opacity="0.9"
        stroke="url(#paint0_linear_1408_3407)"
      />
      <path
        d="M39.6229 50L39.6229 39.0703L43.0981 39.0703L43.6146 34.7909L39.6229 34.7909L39.6229 32.0652C39.6229 30.8303 39.9471 29.9849 41.6175 29.9849L43.734 29.9849L43.734 26.1696C42.7042 26.0525 41.6691 25.9959 40.6334 26.0002C37.5616 26.0002 35.4526 27.9899 35.4526 31.6424L35.4526 34.7829L32 34.7829L32 39.0623L35.4601 39.0623L35.4601 50L39.6229 50Z"
        fill="#218FCC"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1408_3407"
          x1="2"
          y1="38"
          x2="74"
          y2="38.009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9852C5" />
          <stop offset="0.333333" stop-color="#8129F1" />
          <stop offset="0.666667" stop-color="#007CFF" />
          <stop offset="1" stop-color="#239EDB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
