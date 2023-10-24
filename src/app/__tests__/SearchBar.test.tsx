import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";
import SearchForm from "../components/Search";

test("should have search bar", async () => {
  render(<Home />);
  const searchBar = screen.getByRole("textbox");
  expect(searchBar).toBeInTheDocument();
});

test("should have button with text Search", async () => {
  render(<Home />);
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeInTheDocument();
});

test("should be able to enter text and submit the search form", async () => {
  const mockSearch = jest.fn();
  render(<SearchForm onSearch={mockSearch} />);

  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: "Apple" } });
  expect(searchInput).toHaveValue("Apple");

  const submitButton = screen.getByRole("button", { name: "Search" });
  fireEvent.click(submitButton);
  expect(mockSearch).toHaveBeenCalledWith("Apple");
});
