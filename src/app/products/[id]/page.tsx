"use client";
import Product from "@/app/components/Product";
import { useState, useEffect } from "react";
import { ProductProps } from "../../../../types";
import { fetchProducts } from "../../../../utils";

const FetchProducts = ({ params }: { params: ProductProps }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await fetchProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const product = products.find(
    (product) => product.id === parseInt(id as string, 10)
  );

  return (
    <>
      {product ? (
        <Product
          id={product.id}
          name={product.name}
          price={product.price}
          currency={product.currency}
          category={product.category}
          description={product.description}
        />
      ) : (
        <p className="flex justify-center items-center">Loading...</p>
      )}
    </>
  );
};

export default FetchProducts;
