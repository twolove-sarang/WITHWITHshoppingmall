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
      <ul className="flex flex-wrap max-w-6xl items-start justify-center">
        {products && products.map((el) => <ProductsCard products={el} />)}
      </ul>
    </>
  );
}
