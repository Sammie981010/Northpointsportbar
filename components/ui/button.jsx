import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};