import React from "react";

const AppButton = ({
  variant = "primary",
  onClick = () => {},
  className = "",
  childClassName = "",
  children = "Button",
}) => {
  let bgGradient = "";
  switch (variant) {
    case "primary":
      bgGradient = "bg-primary-gradient";
      break;

    case "secondary":
      break;

    default:
      bgGradient = "bg-secondary-gradient";
  }

  return (
    <button
      className={`rounded-full p-[1px] font-semibold ${bgGradient} ${className}`}
      onClick={onClick}
    >
      <span
        className={`flex w-full flex-col rounded-full bg-primary-dark px-12 py-3 text-lg font-light text-secondary-dark ${childClassName}`}
      >
        {children}
      </span>
    </button>
  );
};

export default AppButton;
