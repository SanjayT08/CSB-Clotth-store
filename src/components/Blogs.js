import React from "react";
import shoptica from "../assets/Blog-shoptica.jpg";
import AdBeaut from "../assets/Blog-AdBeaut.jpg";
import kosmic from "../assets/Blog-kosmic.jpg";

const Blogs = () => {
  return (
    <div class="blog_wrapper">
      <h4>LATEST BLOG</h4>
      <div class="blog_wrap">
        <div class="blogs">
          <img src={shoptica} alt="" />
          <div class="blog-data">
            <p>08 MARCH 2016</p>
            <p>Ultimate Responsive Theme for Magento 2</p>
          </div>
        </div>
        <div class="blogs">
          <img src={AdBeaut} alt="" />
          <div class="blog-data">
            <p>15 MARCH 2016</p>
            <p>Ad-Beaut Theme for Magento 2</p>
          </div>
        </div>
        <div class="blogs">
          <img src={kosmic} alt="" />
          <div class="blog-data">
            <p>25 MARCH 2016</p>
            <p>Kosmic Multipurpose Responsive Theme for Magento 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
