import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-700 rounded-md py-2 px-8 text-white font-semibold hover:opacity-90 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
