import React from "react";
import Searchbar from "../components/Searchbar";

const NavBar = () => {
  return (
    <div class="navbar">
      <Searchbar />
      <div class="row">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/men">MEN</a>
          </li>
          <li>
            <a href="/women">WOMEN</a>
          </li>
          <li>
            <a href="/footwear">FOOTWEAR</a>
          </li>
          <li>
            <a href="/jewellery">JEWELLERY</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <li>
            <a href="/aboutus">ABOUT US</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>

      <button className="cart-icon">
        <i class="fa fa-shopping-cart"></i>
        <span className="badge">0</span>
      </button>

      {/* <div class="shopping-cart">
    <i class="fa fa-shopping-cart cart-icon"></i>
    <span class="badge">{cartTotal}</span>
  </div> */}
    </div>
  );
};

export default NavBar;
