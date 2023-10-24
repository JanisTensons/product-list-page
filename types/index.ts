import { ReactNode } from "react";
import { MouseEventHandler } from "react";

export interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  previousPage: number | null;
  nextPage: number | null;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export interface ProductProps {
  id: number | string;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
}

export interface SearchFormProps {
  onSearch: (searchQuery: string) => void;
}

export interface CustomButtonProps {
  title: string | ReactNode;
  type: string;
  containerStyles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
