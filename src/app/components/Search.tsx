import React, { useState } from "react";
import { SearchFormProps } from "../../../types";
import { useMediaQuery } from "react-responsive";
import { CustomButton } from ".";

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery); // Trigger the search in the parent component
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 600 }); // You can adjust the maxWidth value as needed

  return (
    <div className="mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
          placeholder={`${isSmallScreen ? "Search" : "Search products"}`}
          value={searchQuery}
          onChange={handleSearchChange}
          required
        />
        {isSmallScreen ? (
          <CustomButton
            title={
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            }
            type="submit"
            onClick={handleSearchSubmit}
            containerStyles={
              "absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-emerald-600 rounded-r-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          />
        ) : (
          <CustomButton
            title="Search"
            type="submit"
            onClick={handleSearchSubmit}
            containerStyles={
              "text-white absolute right-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
