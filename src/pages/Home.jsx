import React from 'react'
import ProductListing from "../components/ProductListing"
const Home = () => {
  return (
    <>
    <div className="banner">
<h1>Welcome to My Grolead</h1>
<p>Explore our best collections of products</p>
{/* <Link to="/products" className="btn">Shop Now</Link> */}
</div>
<div className="featured-products">
<h2>Featured Products</h2>
<ProductListing/>
</div></>
  )
}

export default Home
