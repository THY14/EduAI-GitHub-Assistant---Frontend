import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import ProductList from "../../pages/ProductList";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products-list" element={<ProductList />} />
      <Route path="*" element={<div>not found</div>} /> {/* 404 page */}
    </Routes>
  );
};

export default AppRoutes;
