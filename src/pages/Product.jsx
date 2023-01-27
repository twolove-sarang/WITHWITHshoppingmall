import { useQuery } from "@tanstack/react-query";
import React from "react";
import { downloadFile } from "../apis/Auth_firebase";
import ProductsCard from "../components/ProductsCard";

export default function Product() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => downloadFile(),
  });
  return (
    <>
      {isLoading && <p>isLoading...😐</p>}
      {error && <p>something is wrong🫤</p>}
      <ul className="flex flex-wrap justify-center mx-auto">
        {products &&
          products.map((product) => (
            <ProductsCard products={product} key={product.id} />
          ))}
      </ul>
    </>
  );
}
