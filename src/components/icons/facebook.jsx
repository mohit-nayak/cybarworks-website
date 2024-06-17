import React from "react";

const FacebookIcon = ({ className = "" }) => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1080_5832)">
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
          stroke="url(#paint0_linear_1080_5832)"
          stroke-width="0.8"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M23.0819 28.6489L23.0819 21.3624L25.3987 21.3624L25.7431 18.5096L23.0819 18.5096L23.0819 16.6924C23.0819 15.8691 23.2981 15.3055 24.4117 15.3055L25.8227 15.3055L25.8227 12.762C25.1361 12.6839 24.4461 12.6462 23.7556 12.6491C21.7077 12.6491 20.3017 13.9755 20.3017 16.4106L20.3017 18.5042L18 18.5042L18 21.3571L20.3068 21.3571L20.3068 28.6489L23.0819 28.6489Z"
        fill="#218FCC"
      />
      <defs>
        <filter
          id="filter0_d_1080_5832"
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
            result="effect1_dropShadow_1080_5832"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1080_5832"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1080_5832"
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

export default FacebookIcon;
