import React from "react";

const GooglePlusIcon = ({ className = "" }) => {
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
        stroke="url(#paint0_linear_1408_3409)"
      />
      <path
        d="M55.5714 36.4286H52.4286V33.2857H49.2857V36.4286H46.1429V39.5714H49.2857V42.7143H52.4286V39.5714H55.5714M32 36.4286V40.2H38.2857C37.9714 41.7714 36.4 44.9143 32 44.9143C28.2286 44.9143 25.2429 41.7714 25.2429 38C25.2429 34.2286 28.2286 31.0857 32 31.0857C34.2 31.0857 35.6143 32.0286 36.4 32.8143L39.3857 29.9857C37.5 28.1 34.9857 27 32 27C25.8714 27 21 31.8714 21 38C21 44.1286 25.8714 49 32 49C38.2857 49 42.5286 44.6 42.5286 38.3143C42.5286 37.5286 42.5286 37.0571 42.3714 36.4286H32Z"
        fill="#218FCC"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1408_3409"
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

export default GooglePlusIcon;
