import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "../components/ProductsList";
import Home from "../page";

test("should display product", async () => {
  render(<Home />);
  const productElement = await screen.findByTestId("Apple");
  expect(productElement).toBeInTheDocument();
});

test("should render product details correctly", () => {
  const product = {
    id: 1,
    name: "Apple",
    price: 10.0,
    category: "Category A",
    description: "Description for Product 1",
  };

  render(
    <ProductsList
      id={product.id}
      name={product.name}
      price={product.price}
      category={product.category}
      description={product.description}
    />
  );

  const productName = screen.getByText("Apple");
  expect(productName).toBeTruthy();
});
