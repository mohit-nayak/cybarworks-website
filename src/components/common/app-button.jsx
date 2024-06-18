import React from "react";
import { Link } from "gatsby";

const AppButton = ({
  as = "button",
  href = "#",
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

  if (as === "link") {
    return (
      <Link
        to={href}
        className={`rounded-full p-[1px] font-semibold ${bgGradient} ${className}`}
      >
        <span
          className={`flex w-full flex-col rounded-full bg-primary-dark px-12 py-3 text-lg font-light text-secondary-dark ${childClassName}`}
        >
          {children}
        </span>
      </Link>
    );
  } else if (as === "button") {
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
  } else return null;
};

export default AppButton;
