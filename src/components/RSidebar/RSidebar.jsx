import React from "react";
import "./RSidebar.css";
import Logo from "../../imgs/profile.png";

const RSidebar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      ></link>
      <div className="rSidebar">
        <div className="rlogo">
          <img src={Logo} alt="" />
          <span>
            <span>
              <a href="#logout">LOGOUT</a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RSidebar;
