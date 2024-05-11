import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...rest
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
