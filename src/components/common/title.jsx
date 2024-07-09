import React, { createElement } from "react";

const Title = ({
  variant = "secondary",
  as,
  className = "",
  children = "Title",
}) => {
  let variantClassNames;

  // Assign relevant title variant style classes.
  switch (variant) {
    case "primary":
      as = as ?? "h1";
      variantClassNames =
        "max-w-xl md:max-w-2xl mx-auto text-title-primary-sm md:text-title-primary-md lg:text-title-primary-lg";
      break;

    case "secondary":
      as = as ?? "h2";
      variantClassNames =
        "max-w-xl md:max-w-xl mx-auto text-title-secondary-sm md:text-title-secondary-md lg:text-title-secondary-lg";
      break;

    default:
      as = as ?? "h2";
      variantClassNames =
        "max-w-xl md:max-w-xl mx-auto text-title-secondary-sm md:text-title-secondary-md lg:text-title-secondary-lg";
  }

  // Return a valid title HTML element.
  if (
    as === "h1" ||
    as === "h2" ||
    as === "h3" ||
    as === "h4" ||
    as === "h6" ||
    as === "h6"
  ) {
    const titleEle = createElement(as, {
      className: `bg-primary-gradient bg-clip-text text-center font-extralight text-transparent ${variantClassNames} ${className}`,
      children,
    });
    return <>{titleEle}</>;
  }

  return <>{children}</>;
};

export default Title;
