import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { ProductProps } from "../../../types";

const ProductsList: React.FC<ProductProps> = ({
  id,
  name,
  price,
  category,
}) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 }); // Adjust the maxWidth value as needed

  return (
    <Link href={`/products/${encodeURIComponent(id)}`}>
      {/* Replace "/productName" with a dynamic route using productName */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium text-gray-900 dark:text-white ${
                    isSmallScreen ? "" : "truncate"
                  }`}
                >
                  {name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {price}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {category}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default ProductsList;
