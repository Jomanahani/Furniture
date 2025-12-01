import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-primary text-white rounded-full w-56 h-16 text-base flex justify-center items-center uppercase">
      {title}
    </button>
  );
};

export default Button;
