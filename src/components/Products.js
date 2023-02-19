import React, { useState } from "react";
import bag from "../assets/product-bag.jpg";
import shirt from "../assets/product-T-shirt.jpg";
import watch from "../assets/product-watch.jpg";
import dealWomen from "../assets/Deal-women.jpg";

const Products = () => {
  const [cartItems, setCartitems] = useState([]);

  const handleAddtoCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (product.quantity !== 0) {
      if (productExist) {
        alert("Product is alredy in the cart, please check the shopping cart!");
      } else {
        setCartitems([...cartItems, { ...product, productinCart: 1 }]);
      }
    } else {
      alert("Sorry, product is out of stock!");
    }
  };

  return (
    <div class="wrapper">
      <div class="product_wrap">
        <div class="product_item">
          <div class="deal_women">
            <img src={dealWomen} alt="" />
          </div>
        </div>

        <div class="product_item">
          <div class="img">
            <img src={shirt} alt="" />
            <div class="cart-icon">
              <button onClick={handleAddtoCart}>Add</button>
              <i class="fa fa-shopping-cart"></i>
            </div>
            <p class="name">MODULAR MODERN</p>
          </div>
          <div class="price">
            <p>
              $540.00 <small style={{ color: "red" }}>600.00</small>
            </p>
          </div>
        </div>

        <div class="product_item">
          <div class="img">
            <img src={watch} alt="" />
            <div class="cart-icon">
              <button onClick={handleAddtoCart}>Add</button>
              <i class="fa fa-shopping-cart"></i>
            </div>
            <p class="name">MODULAR MODERN</p>
          </div>
          <div class="price">
            <p>
              $540.00 <small style={{ color: "red" }}>$600.00</small>
            </p>
          </div>
        </div>

        <div class="product_item">
          <div class="img">
            <img src={bag} alt="" />
            <div class="cart-icon">
              <button onClick={handleAddtoCart}>Add</button>
              <i class="fa fa-shopping-cart"></i>
            </div>
            <p class="name">MODULAR MODERN</p>
          </div>
          <div class="price">
            <p>
              $540.00 <small style={{ color: "red" }}>$600.00</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
