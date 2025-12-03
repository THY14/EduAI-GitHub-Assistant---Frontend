// src/features/products/hooks.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, type Product } from "../services/api";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
