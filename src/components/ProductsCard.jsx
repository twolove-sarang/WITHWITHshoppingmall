import React from "react";
import { useNavigate } from "react-router-dom";
import Price from "./Price";

export default function ProductsCard({
  products,
  products: { image, title, price, id },
}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/product/${id}`, { state: { products } })}
        className="w-80 mb-16"
      >
        <img
          src={image.url}
          alt={title}
          className=" transition-all hover:scale-95 duration-300"
        />
        <div>
          <p className="font-bold text-lg mt-2 hover:text-point hover:cursor-pointer">
            {title}
          </p>
          <Price price={price} className="mb-10" />
        </div>
      </div>
    </>
  );
}
