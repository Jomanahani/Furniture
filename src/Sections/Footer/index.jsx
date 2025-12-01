import React from "react";
import insta1 from "../../Assets/insta1.png";
import insta2 from "../../Assets/insta2.png";
import insta3 from "../../Assets/insta3.png";
import insta4 from "../../Assets/insta4.png";
import Layout from "../../Components/Layout";

const Footer = () => {
  return (
    <Layout className="bg-footer">
      <footer className="flex justify-between w-full text-white px-12 flex-wrap">
        <div className="max-w-[300px] flex-shrink-0">
          <h4 className="text-lg font-semibold">Beauty Care</h4>
          <p className="py-6">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-lg font-semibold">Follow Us</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold pb-6">Instagram Shop</h4>
          <div className="flex gap-6 flex-wrap">
            <img alt="insta1" src={insta1} />
            <img alt="insta2" src={insta2} />
            <img alt="insta3" src={insta3} />
            <img alt="insta4" src={insta4} />
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Footer;
