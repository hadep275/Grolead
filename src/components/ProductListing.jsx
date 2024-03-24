import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div>Product1</div>
      <div>Product2</div>
      <div>Product3</div>
      <div>Product4</div>
    </>
  );
};

export default ProductListing;
