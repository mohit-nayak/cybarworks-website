import React from "react";

const ArrowRightCircle = ({ className = "" }) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_993_1363)">
        <circle
          cx="38"
          cy="34"
          r="28.7"
          transform="rotate(-90 38 34)"
          stroke="url(#paint0_linear_993_1363)"
          stroke-width="1.4"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M35 44.002L44.0853 34.8754L35 25.7488"
        stroke="url(#paint1_linear_993_1363)"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_993_1363"
          x="0.600098"
          y="0.600098"
          width="74.7998"
          height="74.7998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00796679 0 0 0 0 0.0302413 0 0 0 0 0.163889 0 0 0 0.52 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_993_1363"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_993_1363"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_993_1363"
          x1="10"
          y1="34"
          x2="62.8756"
          y2="33.9868"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.165" stop-color="#0F80F8" />
          <stop offset="0.74" stop-color="#3CCBEB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_993_1363"
          x1="39.5427"
          y1="44.002"
          x2="39.534"
          y2="26.7672"
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
