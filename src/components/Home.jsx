import React from "react";
import shoppingSVG from "./shopping.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <h1 className="intro-title">
          THE <span>Grocery Store</span>
        </h1>
        <button className="signup">Signup</button>
      </div>
      <div className="right">
        <img className="svg" src={shoppingSVG} height="450px" width="450px" /> {/* Used the correct variable name */}
      </div>
    </div>
  );
};

export default Home;