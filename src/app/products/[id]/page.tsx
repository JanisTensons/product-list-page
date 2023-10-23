"use client";
import Product from "@/app/components/Product";
import { useState, useEffect } from "react";
import { ProductProps } from "../../../../types";

interface ProductParams {
  id: string;
}

const FetchProducts = ({ params }: { params: ProductParams }) => {
  const [products, setProducts] = useState<ProductProps[]>([]); // Initialize as an empty array
  const id = params.id;

  useEffect(() => {
    // Fetch data here
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd`,
        {
          next: {
            revalidate: 60,
          },
        }
      );

      if (response.ok) {
        const jsonData = await response.json();
        setProducts(jsonData.products);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

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
          category={product.category}
          description={product.description}
        />
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default FetchProducts;
