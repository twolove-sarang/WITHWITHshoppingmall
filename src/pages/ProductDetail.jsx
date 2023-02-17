import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addOrUpload } from "../apis/Auth_firebase";
import Price from "../components/Price";
import TextDecoration from "../components/TextDecoration";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const [loading, setLoading] = useState(false);
  const { uid } = useAuthContext();
  const {
    state: {
      products: { description, image, options, price, title, id },
    },
  } = useLocation();
  const [select, setSelect] = useState(options && options[0]);

  const handleClick = () => {
    setLoading(true);
    const product = { image, options: select, price, title, id, quantity: 1 };
    addOrUpload(uid, product) //
      .finally(() => setLoading(false));
  };

  return (
    <>
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

          <select
            id="option"
            name="option"
            className="text-2xl "
            onChange={(e) => setSelect(e.target.value)}
          >
            {options &&
              options.map((option, index) => (
                <option key={index} className="text-xl">
                  {option}
                </option>
              ))}
          </select>

          <p className="my-8"></p>
          {loading ? (
            <button
              onClick={handleClick}
              className="w-full text-center py-2 rounded-md border hover:bg-black hover:text-white"
            >
              <p>카트에 담고 있습니다.</p>
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="w-full text-center py-2 rounded-md border hover:bg-black hover:text-white"
            >
              <p>담기</p>
            </button>
          )}
        </div>
      </section>
    </>
  );
}
