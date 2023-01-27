import React from "react";

export default function Price({ price }) {
  const splitPrice = String(price).split("");
  const pricePoint =
    splitPrice.slice(0, -3).join("") + "," + splitPrice.slice(-3).join("");

  return <div className="text-xl">₩ {pricePoint}</div>;
}
