import React from "react";
import Button from "../Button";

const NewColl = () => {
  return (
    <div className="w-2/5 h-3/5 bg-[#DFE9F4] text-black rounded-xl p-9 space-y-7 ">
      <p className="text-base">New Arrival</p>
      <h2 className="text-primary font-bold text-5xl">
        Discover Our <br />
        New Collection
      </h2>
      <p className="text-lg pb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <Button title={"Buy Now"} />
    </div>
  );
};

export default NewColl;
