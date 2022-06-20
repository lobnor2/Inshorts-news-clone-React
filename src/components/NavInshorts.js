import React from "react";
import "./NavInshorts.css";
import Logo from "../assets/logo.png";
import Hamburgerdrawer from "./Hamburgerdrawer";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="navinshorts">
      <div className="icon">
        <Hamburgerdrawer setCategory={setCategory} />
      </div>
      <img src={Logo} alt="inshorts logo" />
    </div>
  );
};

export default NavInshorts;
