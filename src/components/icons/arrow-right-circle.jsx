import React from "react";

const ArrowRightCircle = ({ className = "" }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="30"
        cy="30"
        r="28.7"
        transform="rotate(-90 30 30)"
        stroke="url(#paint0_linear_993_1363)"
        stroke-width="1.4"
      />
      <path
        d="M27 40.002L36.0853 30.8754L27 21.7488"
        stroke="url(#paint1_linear_993_1363)"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_993_1363"
          x1="2"
          y1="30"
          x2="54.8756"
          y2="29.9868"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.165" stop-color="#0F80F8" />
          <stop offset="0.74" stop-color="#3CCBEB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_993_1363"
          x1="31.5427"
          y1="40.002"
          x2="31.534"
          y2="22.7672"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.165" stop-color="#0F80F8" />
          <stop offset="0.74" stop-color="#3CCBEB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowRightCircle;
