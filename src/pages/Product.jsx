import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { downloadFile } from '../apis/Auth_firebase';
import ProductsCard from '../components/ProductsCard';

export default function Product() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () => downloadFile(),
  });

  return (
    <>
      {products && (
        <div
          className="w-full h-60 bg-brand px-16 relative"
          style={{
            backgroundImage: `url(${products[2].image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="font-bold uppercase text-6xl text-white
        absolute top-8"
          >
            이번주
            <br />
            세일상품
            <br />
            보러가기
          </div>
        </div>
      )}
      <ul className="flex flex-wrap justify-center mx-auto">
        {products &&
          products.map((product) => (
            <ProductsCard products={product} key={product.id} />
          ))}
      </ul>
    </>
  );
}
