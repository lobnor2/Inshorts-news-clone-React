import React from "react";
import "./Footer.css";
import Facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import contacticon from "../assets/contact_icon.png";
import logofooter from "../assets/logo_footer.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* <span className="name">
        Inshorts clone made by - {"lobnor"}
        <a href="https://www.linkedin.com/in/lobnor" target="blank">
          Lobsang Norbu
        </a>
      </span> */}
      <div className="socialicon">
        <img src={Facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <hr />
      <div className="belowfooter">
        <div className="leftfooter">
          <img src={logofooter} alt="" />
          <div>
            <span>Inshorts </span>Pte. Ltd. &copy;COPYRIGHT 2022
          </div>
        </div>
        <div className="rightfooter">
          <img src={contacticon} alt="" />
          <p>Terms & conditions Privacy Policies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
