import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <div className="Main">
      <div className="heading">
        <h2 className="greet">Hello ! PISENSE</h2>
      </div>
      <div className="MainDash">
        <Cards />
        <Table />
      </div>
    </div>
  );
};

export default MainDash;
