import React from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      ></link>
      <div className="Sidebar">
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            AD<span>M</span>IN
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <div className="sizer">
                  <item.icon />
                </div>
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
