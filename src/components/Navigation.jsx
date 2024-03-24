import React, { useState, useEffect } from 'react'
import '../css/Navigation.css'
import '../css/root.css'
const Navigation = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`header ${isNavOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          <img src="./images/logo.svg" width="40" height="5" alt="logo" />
        </a>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <ul className="navbar-list">
    <li><a href="#home" className="navbar-link hover-1" onClick={toggleNav}>Home</a></li>
    <li><a href="#shop" className="navbar-link hover-1" onClick={toggleNav}>Shop</a></li>
    <li><a href="#blog" className="navbar-link hover-1" onClick={toggleNav}>Blog</a></li>
    <li><a href="#contact" className="navbar-link hover-1" onClick={toggleNav}>Contact</a></li>
    <li><a href="#login" className="navbar-link hover-1" onClick={toggleNav}>Login</a></li>
    <li>
      <a href="#cart" className="navbar-link hover-1" onClick={toggleNav}>
        Cart 
        <span className="cart-count">0</span> {/* You can dynamically update this with the actual count */}
      </a>
    </li>
  </ul>
        </nav>

       
        {/* Nav toggler button */}
        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        {/* Scroll up button */}
        {isScrolled && (
          <button className="back-top-btn" aria-label="back to top" onClick={scrollToTop}>
            <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
          </button>
        )}
      </div>
    </header>
  )
}

export default Navigation
