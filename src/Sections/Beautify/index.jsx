import React from "react";
import SecTitle from "../../Components/SecTitle";
import SupTitle from "../../Components/SupTitle";
import Button from "../../Components/Button";
import Beautifyimg from "../../Assets/Beautify.png";
import Layout from "../../Components/Layout";

const Beautify = () => {
  return (
    <Layout className="h-screen flex bg-Secondary justify-between relative overflow-hidden py-14 px-36">
      <div className="flex flex-col items-start gap-6 justify-center w-1/2 h-full">
        <SecTitle title={"Beautify Your Space"} />
        <SupTitle
        className="text-justify w-3/4"
          supTitle={
            "Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          }
        />
        <Button title={"Learn More"} />
      </div>
      <div className="relative h-full w-1/2 flex justify-center items-center">
        <div className="absolute top-1/2 left-[40%] -translate-y-1/2  rounded-full w-96 h-80 bg-[#09513B] z-0  "></div>
        <img
          className="relative z-10 left-[5%] rounded-tr-lg rounded-bl-lg rounded-tl-[4rem] rounded-br-[4rem] w-3/4 h-auto max-h-full "
          alt="Beautify"
          src={Beautifyimg}
        />
      </div>
    </Layout>
  );
};

export default Beautify;
