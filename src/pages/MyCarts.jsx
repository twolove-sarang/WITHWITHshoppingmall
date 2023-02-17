import React from "react";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";

export default function MyCarts() {
  const {
    cartQuery: { data: products },
  } = useCart();

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  const SHIPPING = 3000;
  return (
    <div>
      {products &&
        products.map((products) => (
          <CartItem products={products} key={products.id} />
        ))}
      <div className="border-b my-10"></div>
      <div className="flex justify-between mx-10">
        <p>상품 금액</p>
        <p>+</p>
        <p>배송비</p>
        <p>=</p>
        <p>총 금액</p>
      </div>
      <div className="flex justify-between mx-10">
        <div>{totalPrice}</div>
        <div>{SHIPPING}</div>
        <div>{totalPrice + SHIPPING}</div>
      </div>
    </div>
  );
}
