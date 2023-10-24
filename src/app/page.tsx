"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils";
import ProductsList from "./components/ProductsList";
import SearchForm from "./components/Search";
import { ProductProps } from "../../types";
import { Pagination } from "./components";

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState<number | null>(null);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allProducts = await fetchProducts();
        setProducts(allProducts);
        filterProducts(searchQuery, allProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProducts = (query: string, productsToFilter: ProductProps[]) => {
    const filtered = productsToFilter.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

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
    <main className="overflow-hidden">
      <div>
        <Head>
          <title>Product List</title>
        </Head>
        <div>
          <h1 className="flex items-center text-center justify-center mt-10 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Product List
          </h1>
        </div>
        <div className="w-1/2 mx-auto">
          <SearchForm onSearch={handleSearch} />
        </div>
        <div className="w-1/2 mx-auto">
          {loading ? (
            <p className="flex justify-center items-center">Loading...</p>
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product: ProductProps) => (
              <ProductsList
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                currency={product.currency}
                category={product.category}
                description={product.description}
                data-testid={product.name}
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
    </main>
  );
}
