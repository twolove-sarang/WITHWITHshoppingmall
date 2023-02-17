import React from "react";
import useCart from "../hooks/useCart";

export default function CartItem({
  products,
  products: { id, price, title, image, quantity, options },
}) {
  const { addCartMutation, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addCartMutation.mutate({ ...products, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addCartMutation.mutate({ ...products, quantity: quantity + 1 });
  };
  const handleRemove = () => removeItem.mutate(id);
  return (
    <section className="flex items-center justify-between">
      <img src={image.url} alt={title} className="w-16" />
      <p>{title}</p>
      <p>{price}</p>

      <div className="flex gap-4">
        <button onClick={handleMinus}>-</button>
        <p>{quantity}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>{options}</p>
      <button
        onClick={handleRemove}
        className="border rounded-full w-6 h-6 items-center text-center leading-3 font-bold hover:bg-black hover:text-white"
      >
        x
      </button>
    </section>
  );
}
