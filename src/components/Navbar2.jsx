import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/app2">Shopping Cart</Link>
        <Link to="/contact">Contact us</Link>
      </ul>
    </div>
  );
}

export default Navbar2;