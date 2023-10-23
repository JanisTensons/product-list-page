import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

test("should render header", async () => {
  render(<Home />);
  const headingElement = screen.getByText("Product List");
  expect(headingElement).toBeInTheDocument();
});
