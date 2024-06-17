import React from "react";

const XIcon = ({ className = "" }) => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1080_5833)">
        <circle
          cx="22"
          cy="20.6489"
          r="19"
          fill="#000529"
          fill-opacity="0.9"
          shape-rendering="crispEdges"
        />
        <circle
          cx="22"
          cy="20.6489"
          r="19.4"
          stroke="url(#paint0_linear_1080_5833)"
          stroke-width="0.8"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M22.9156 19.5772L27.866 13.6489L26.6928 13.6489L22.3934 18.796L18.9606 13.6489L15 13.6489L20.1926 21.4329L15 27.6489L16.1732 27.6489L20.7134 22.2134L24.3394 27.6489L28.3 27.6489L22.9156 19.5772ZM21.3084 21.5008L20.782 20.7259L16.596 14.5589L18.3985 14.5589L21.7767 19.5359L22.3024 20.3108L26.6935 26.7802L24.8917 26.7802L21.3084 21.5008Z"
        fill="#218FCC"
        stroke="#218FCC"
        stroke-width="0.236045"
      />
      <defs>
        <filter
          id="filter0_d_1080_5833"
          x="0.262024"
          y="0.849121"
          width="43.476"
          height="43.476"
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
          <feOffset dy="1.93817" />
          <feGaussianBlur stdDeviation="0.969086" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0516031 0 0 0 0 0.018202 0 0 0 0 0.198568 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1080_5833"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1080_5833"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1080_5833"
          x1="3"
          y1="20.6489"
          x2="41"
          y2="20.6537"
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
