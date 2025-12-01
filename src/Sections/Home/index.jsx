import React from "react";
import homeImage from "../../Assets/Home.png";
import NewColl from "../../Components/NewColl";

const Home = () => {
  return (
    <section
      className="bg-cover bg-center h-[720px] flex justify-end items-center pr-20"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <NewColl/>
    </section>
  );
};

export default Home;
