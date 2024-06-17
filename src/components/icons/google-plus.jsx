import React from "react";

const GooglePlusIcon = ({ className = "" }) => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1080_5834)">
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
          stroke="url(#paint0_linear_1080_5834)"
          stroke-width="0.8"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M32.4286 20.2204L30.5714 20.2204L30.5714 18.3632L28.7143 18.3632L28.7143 20.2204L26.8571 20.2204L26.8571 22.0775L28.7143 22.0775L28.7143 23.9346L30.5714 23.9346L30.5714 22.0775L32.4286 22.0775M18.5 20.2204L18.5 22.4489L22.2143 22.4489C22.0286 23.3775 21.1 25.2346 18.5 25.2346C16.2714 25.2346 14.5071 23.3775 14.5071 21.1489C14.5071 18.9204 16.2714 17.0632 18.5 17.0632C19.8 17.0632 20.6357 17.6204 21.1 18.0846L22.8643 16.4132C21.75 15.2989 20.2643 14.6489 18.5 14.6489C14.8786 14.6489 12 17.5275 12 21.1489C12 24.7704 14.8786 27.6489 18.5 27.6489C22.2143 27.6489 24.7214 25.0489 24.7214 21.3346C24.7214 20.8704 24.7214 20.5918 24.6286 20.2204L18.5 20.2204Z"
        fill="#218FCC"
      />
      <defs>
        <filter
          id="filter0_d_1080_5834"
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
            result="effect1_dropShadow_1080_5834"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1080_5834"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1080_5834"
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

export default GooglePlusIcon;
