"use client";
import Head from "next/head";
import FetchProducts from "./components/FetchProducts";

const Home = () => {
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
        <FetchProducts />
      </div>
    </main>
  );
};

export default Home;
