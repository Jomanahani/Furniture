import React from "react";
import Logo from "../../Components/Logo";

const NavBar = () => {
  return (
    <nav className="h-24 flex flex-row justify-between items-center px-20">
        <Logo/>
      <ul className="flex gap-16">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Doctors</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Gallery</li>
      </ul>
    </nav>
  );
};

export default NavBar;
