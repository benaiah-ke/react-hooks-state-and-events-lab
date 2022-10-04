import React, { useState } from "react";

function Item({ name, category }) {
  const [in_cart, setInCart] = useState(false);

  return (
    <li className={in_cart ? 'in-cart':''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!in_cart)}>{!in_cart ? 'Add to Cart':'Remove from Cart'}</button>
    </li>
  );
}

export default Item;
