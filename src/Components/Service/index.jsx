import React from "react";

const Service = ({ Icon, title, desc }) => {
  return (
    <div className="flex items-center gap-8 text-primaryText">
      {Icon && <Icon className="text-6xl" />}
      <div>
        <p className="font-semibold text-2xl">{title}</p>
        <p className="text-SecondaryText text-base">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
