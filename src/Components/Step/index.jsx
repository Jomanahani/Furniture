import React from "react";

const Step = ({ img, areaName, number }) => {
  return (
    <div className="relative w-[30%] py-10 flex flex-col items-center gap-4">
      <img
        src={img}
        alt={areaName}
        className="rounded-xl w-full h-3/4 object-cover"
      />

      <div className="absolute left-1/2 bottom-36 -translate-x-1/2">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold">
            {number}.
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-primaryText font-semibold text-xl">
        {areaName}
      </p>

      <p className="text-center text-sm text-gray-600 px-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Step;
