import React from "react";
import { useLocation } from "react-router-dom";
import Price from "../components/Price";
import TextDecoration from "../components/TextDecoration";

export default function ProductDetail() {
  const {
    state: {
      products: { description, image, options, price, title },
    },
  } = useLocation();

  return (
    <section className="flex p-10 justify-center mr-auto ml-auto items-center">
      <img src={image.url} alt={title} className="p-2 w-96" />
      <div className="p-12">
        <TextDecoration text="Product Name" />
        <p className="text-2xl">{title}</p>

        <p className="my-8"></p>
        <TextDecoration text="Description" />
        <p className="text-2xl">{description}</p>

        <p className="my-8"></p>
        <TextDecoration text="Price" />
        <Price price={price} />

        <p className="my-8"></p>
        <TextDecoration text="Option" />
        <label htmlFor="option" />

        <select id="option" name="option" className="text-2xl">
          {options &&
            options.map((option, index) => (
              <option key={index} className="text-xl">
                {option}
              </option>
            ))}
        </select>

        <p className="my-8"></p>
        <button className="w-full text-center py-2 rounded-md border hover:bg-black hover:text-white">
          카트
        </button>
      </div>
    </section>
  );
}
