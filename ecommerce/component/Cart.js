import React from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillBackward } from "react-icons/ai";
import { useStoreContext } from "../context/StoreContext";
import { urlFor } from "../sanity/client";
const Cart = () => {
  const { setShow, price, tQuantity, items, cartQuantity, removeItem, produc } =
    useStoreContext();

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShow(false)}
        >
          <AiFillBackward size={30} />
          <span className="heading">Your Bag</span>
          <span className="cart-num-items">({tQuantity} items)</span>
        </button>

        {items.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={130} />
            <h3>Sounding you haven't choose any product..!</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="btn"
              >
                Explore Our Store
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {items.length >= 1 &&
            items.map((item) => (
              <div className="product" key={item._id}>
                <picture>
                  {" "}
                  <img src={urlFor(item?.image[0])} className="small-image " />
                </picture>
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span onClick={() => cartQuantity(item._id, "dec")}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">
                          <span>{item.quantity}</span>
                        </span>
                        <span onClick={() => cartQuantity(item._id, "inc")}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => removeItem(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}{" "}
        </div>
        {items.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal : </h3>
              <h3>${price}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
