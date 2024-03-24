import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="banner">
        <h1>Welcome to Grolead</h1>
        <p>Explore our best collections of products</p>
        {/* <Link href="/products">Shop Now</Link> */}
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
      </div>
    </>
  )
}

export default Home
