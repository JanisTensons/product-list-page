import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

test("should have heading element", async () => {
  render(<Home />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
