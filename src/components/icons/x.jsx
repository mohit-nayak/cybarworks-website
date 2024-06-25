import React from "react";

const XIcon = ({ className = "" }) => {
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
        stroke="url(#paint0_linear_1408_3408)"
      />
      <path
        d="M40.4388 36.3159L48.218 27H46.3744L39.6182 35.0883L34.2238 27H28L36.1598 39.232L28 49H29.8436L36.9782 40.4585L42.6762 49H48.9L40.4388 36.3159ZM37.9132 39.3387L37.086 38.121L30.508 28.43H33.3405L38.6491 36.251L39.4752 37.4687L46.3755 47.6349H43.5441L37.9132 39.3387Z"
        fill="#218FCC"
        stroke="#218FCC"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1408_3408"
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

export default XIcon;
