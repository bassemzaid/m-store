import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useStoreContext } from "../context/StoreContext";
import Cart from "./Cart";

const Nav = () => {
  const { show, setShow, tQuantity, items } = useStoreContext();
  return (
    <div className="navbar-container">
      <h3 className="logo">
        <Link href="/"> M-Store</Link>
      </h3>
      <button type="button" className="cart-icon" onClick={() => setShow(true)}>
        <HiShoppingCart />
        <span className="cart-item-qty">{tQuantity}</span>
      </button>
      {show && <Cart />}
    </div>
  );
};

export default Nav;
