import React from "react";

const Input = ({
  type = "text",
  id = "",
  name = "",
  className = "",
  defaultValue = "",
  autoFocus = false,
  placeholder = "",
  value = undefined,
  childClassName = "",
  required = false,
  onChange = () => {},
  rows,
}) => {
  const inputProps = {
    id,
    type,
    name,
    defaultValue,
    autoFocus,
    placeholder,
    required,
    onChange,
  };

  if (value) inputProps.value = value;

  if (type === "textarea") {
    inputProps.rows = rows ?? 6;

    return (
      <div className={`rounded-xl bg-secondary-gradient p-[1px] ${className}`}>
        <textarea
          {...inputProps}
          className={`-mb-1.5 w-full rounded-xl bg-primary-semi-dark px-5 py-2.5 text-base font-light text-secondary-dark outline-none placeholder:text-secondary-light ${childClassName}`}
        ></textarea>
      </div>
    );
  }

  return (
    <div className={`rounded-xl bg-secondary-gradient p-[1px] ${className}`}>
      <input
        {...inputProps}
        className={`w-full rounded-xl bg-primary-semi-dark px-5 py-2.5 text-base font-light text-secondary-dark outline-none placeholder:text-secondary-light ${childClassName}`}
      />
    </div>
  );
};

export default Input;
