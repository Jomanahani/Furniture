import React from "react";

const Area = ({ img, areaName }) => {
  return (
    <div className="pt-10">
      <img alt={img} src={img} />
      <p className="text-center p-3 text-primaryText font-semibold text-2xl">{areaName}</p>
    </div>
  );
};

export default Area;
