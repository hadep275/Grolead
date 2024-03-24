import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";

function App() {

  
  return (
    <>
    <Home/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
