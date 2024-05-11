import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...rest },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {/* && decides whether to render the right side of the expression or the left side.
       If the left side is true, it returns the right side. 
       If the left side is false, it returns the left side. */}
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200
      border border-gray-200 w-full ${className}`}
        ref={ref}
        {...rest}
        id={id}
      />
    </div>
  );
});

export default Input;
