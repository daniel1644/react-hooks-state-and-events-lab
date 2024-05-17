import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to store whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Create a function to toggle the item in the cart
  const toggleItemInCart = () => {
    setIsInCart(!isInCart);
  };

  // Create a class name for the list item based on whether it's in the cart
  const listClassName = isInCart ? "in-cart" : "";

  // Create a label for the button based on whether the item is in the cart
  const buttonLabel = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={listClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleItemInCart}>{buttonLabel}</button>
    </li>
  );
}

export default Item;
