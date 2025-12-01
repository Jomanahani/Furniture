import React from "react";

const SupTitle = ({ supTitle, className = "" }) => {
  return (
    <p className={`text-SecondaryText text-xl text-center ${className}`}>
      {supTitle}
    </p>
  );
};

export default SupTitle;
