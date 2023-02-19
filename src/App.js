import React from "react";
import "./styles.css";
import Logo from "./components/Logo";
import NavBar from "../src/components/Navbar.js";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Whatsnew from "./components/Whatsnew";
import Products from "./components/Products";
import BestSellers from "./components/Bestsellers";
import Blogs from "./components/Blogs";

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Men from "./pages/men";
// import Women from "./pages/women";
// import Footwear from "./pages/footwear";
// import Jewellery from "./pages/jewellery";
// import Aboutus from "./pages/aboutus";
// import Contact from "./pages/contact";
// import Cart from "./components/Cart";

export default function App() {
  return (
    <div class="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="/women" component={Women} />
          <Route path="/footwear" component={Footwear} />
          <Route path="/jewellery" component={Jewellery} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
      <>
        <Logo />
        <NavBar />
        <Banner />
        <Category />
        <Whatsnew />
        <BestSellers />
        <Products />
        <Blogs />

        <footer class="padding_4x">
          <div class="flex">
            <section class="flex-content padding_1x">
              <Logo />
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>

              <h3>FOLLOW US</h3>
              <div class="footer-social-icon">
                <a href="/facebbok">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="/twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="/google">
                  <i class="fa fa-google"></i>
                </a>
                <a href="/linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </section>

            <section class="flex-content padding_1x">
              <h3>NEWSLETTER SIGNUP</h3>
              <fieldset class="fixed_flex">
                <input name="newsletter" placeholder="email@example.com" />
                <button class="btn btn_2">Subscribe</button>
              </fieldset>
            </section>

            <section class="flex-content padding_1x">
              <h3>INFORMATION</h3>
              <a href="/about">About Us</a>
              <a href="/contactus">Contact Us</a>
              <a href="/termsandconditions">Terms & Conditions</a>
              <a href="/privacypolicy">Privacy Policy</a>
              <a href="/ordersandreturn">Orders and Return</a>
              <a href="/sites">Sites Map</a>
            </section>
            <section class="flex-content padding_1x">
              <h3>WHY CHOOSE</h3>
              <a href="/productrecall">Product Recall</a>
              <a href="/giftvouchers">Gift Vouchers</a>
              <a href="/retunsandexchanges">Returns & Exchanges</a>
              <a href="/shoppingoptions">Shipping Options</a>
              <a href="/helpandfaqs">Help & FAQs</a>
              <a href="/saleonlytoday">Sale only today</a>
            </section>
            <section class="flex-content padding_1x">
              <h3>Resources</h3>
              <a href="/signin">Sign in</a>
              <a href="/viewcart">View Cart</a>
              <a href="/mywishlist">My Wishlist</a>
              <a href="/checkout">Check out</a>
              <a href="/trackmyorder">Track my order</a>
              <a href="/help">Help</a>
            </section>
          </div>
          <div class="flex">
            <section class="flex-content padding_1x">
              <p>Copyright ©2017 Cloth-store. All Rights Reserved</p>
              <div class="designby">
                <p>Designed by Sanjay Tyagi</p>
              </div>
            </section>
          </div>
        </footer>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </>
    </div>
  );
}
