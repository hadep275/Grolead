import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import "../css/root.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderActive(true);
        backTopBtn.classList.add("active");
      } else {
        setHeaderActive(true);
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header ${isNavOpen ? "active" : ""} ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
              <a href="#" className="logo">
                <img src="/logo.svg" width="40" height="5" alt="logo" />
              </a>
          <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src="/logo.svg" width="40" height="5" alt="logo" />
              </a>
              <button
                className="nav-close-btn"
                aria-label="close menu"
                onClick={toggleNav}
              >
                x
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <Link
                  to="/"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#cart"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Cart
                  <span className="cart-count">0</span>{" "}
                  {/* You can dynamically update this with the actual count */}
                </a>
              </li>
            </ul>
            <div className="navbar-bottom">
              <div className="profile-card">
                <img
                  src="./images/author-1.png"
                  width="48"
                  height="48"
                  alt="Lilly"
                  className="profile-banner"
                />
                <div>
                  <p className="card-title">Hello Lilly !</p>
                  <p className="card-subtitle">You have 3 new messages</p>
                </div>
              </div>
              <ul className="link-list">
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Articles Saved
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Add New Post
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    My Likes
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Account Setting
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>

          </nav>
          {/* Nav toggler button */}
          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={toggleNav}
            >
            {" "}
            ≡
          </button>
        </div>
        
      </header>
      {/* Scroll up button */}
      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        ⬆︎
      </a>
    </>
  );
};

export default Navigation;
