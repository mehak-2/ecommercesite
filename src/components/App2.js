import React, { useState } from "react";
import Flipkart from "./Flipkart"; // Check that the file is named "Flipkart.js" with this capitalization
import Navbar from "./Navbar";     // Check that the file is named "Navbar.js" with this capitalization
import Cart from "./Cart";         // Check that the file is named "Cart.js" with this capitalization

const App2 = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = [...cart]; // Create a copy of the cart array
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart(arr); // Update the cart with the modified array
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Flipkart handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App2;
