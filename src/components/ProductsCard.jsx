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
      <div onClick={() => navigate(`/product/${id}`, { state: { products } })}>
        <div
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-64 h-96 transition-all hover:scale-95 ease-out duration-300
           mt-10"
        ></div>
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
