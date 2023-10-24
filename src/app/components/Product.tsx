import React from "react";
import { useRouter } from "next/navigation";
import { ProductProps } from "../../../types";
import { CustomButton } from ".";

const Product: React.FC<ProductProps> = ({
  name,
  price,
  currency,
  category,
  description,
}) => {
  const router = useRouter();
  const formattedPrice = price.toFixed(2);

  return (
    <div className="w-1/2 mx-auto">
      <div>
        <h1 className="flex justify-center text-center mt-10 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Product Details
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p>
              {currency} {formattedPrice}
            </p>
          </div>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {category}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <CustomButton
          title="Back"
          type="submit"
          onClick={() => router.back()}
          containerStyles={
            "mt-2 text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
          }
        />
      </div>
    </div>
  );
};

export default Product;
