import React from "react";

const LocationPinIcon = ({ className = "" }) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.9"
        d="M19.0204 7C16.5207 7.00295 14.1242 7.99726 12.3566 9.76482C10.5891 11.5324 9.59475 13.9289 9.5918 16.4286C9.58953 18.4487 10.242 20.4145 11.4506 22.0317C11.4775 22.0677 11.5049 22.1037 11.5322 22.1395C11.6065 22.237 11.7589 22.4365 11.7904 22.4731L18.4034 30.2723C18.7265 30.6534 19.3143 30.6534 19.6374 30.2723L26.2538 22.4689C26.2903 22.4249 26.533 22.1074 26.5487 22.0868C26.5493 22.086 26.5497 22.0853 26.5499 22.0844C26.5502 22.0836 26.5506 22.0828 26.5512 22.0821C27.7844 20.4555 28.4509 18.4698 28.4489 16.4286C28.446 13.9289 27.4517 11.5324 25.6841 9.76482C23.9166 7.99726 21.5201 7.00295 19.0204 7ZM19.0204 19.8571C18.3423 19.8571 17.6794 19.6561 17.1156 19.2793C16.5517 18.9026 16.1123 18.3671 15.8528 17.7406C15.5933 17.1141 15.5254 16.4248 15.6577 15.7597C15.79 15.0946 16.1165 14.4837 16.596 14.0042C17.0755 13.5247 17.6864 13.1982 18.3515 13.0659C19.0166 12.9336 19.7059 13.0015 20.3324 13.261C20.9589 13.5205 21.4944 13.9599 21.8711 14.5238C22.2479 15.0876 22.4489 15.7505 22.4489 16.4286C22.4478 17.3375 22.0862 18.2089 21.4435 18.8517C20.8007 19.4944 19.9293 19.856 19.0204 19.8571Z"
        className={`fill-secondary-dark transition-all duration-100 hover:fill-tertiary-dark ${className}`}
      />
    </svg>
  );
};

export default LocationPinIcon;
