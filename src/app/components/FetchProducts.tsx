"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import SearchForm from "./Search";
import { ProductProps } from "../../../types";

const FetchProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState<number | null>(null);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  const productsPerPage = 10;

  useEffect(() => {
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

        // Filter products when data is initially loaded
        filterProducts(searchQuery, jsonData.products);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  const filterProducts = (query: string, productsToFilter: ProductProps[]) => {
    // Filter products based on the search query
    const filtered = productsToFilter.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filtered products and reset to the first page
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, products);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setPreviousPage(pageNumber > 1 ? pageNumber - 1 : null);
    setNextPage(
      currentPage * productsPerPage < filteredProducts.length
        ? currentPage + 1
        : null
    );
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="w-1/2 mx-auto">
        <SearchForm onSearch={handleSearch} />
      </div>
      <div className="w-1/2 mx-auto">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductsList
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          ))
        ) : (
          <div className="text-center">
            <p>No products found</p>
          </div>
        )}
      </div>
      <div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default FetchProducts;
