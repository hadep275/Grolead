import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
