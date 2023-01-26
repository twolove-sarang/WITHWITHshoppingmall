import React from "react";

export default function ProductsCard({
  products: { image, title, price, description, options },
}) {
  return (
    <section className="w-80 ">
      <img
        src={image.url}
        className="transition-all hover:scale-95 duration-300"
      />
      <div>
        <p>{title}</p>
        <p>{`₩${price}`}</p>
      </div>
    </section>
  );
}
