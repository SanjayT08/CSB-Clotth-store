import React from "react";
import men from "../assets/Ads-Men.jpg";
import kids from "../assets/Adv-Kids.jpg";
import women from "../assets/Ads-Women.jpg";

const Category = () => {
  return (
    <div class="row">
      <img src={men} alt="" />
      <img src={kids} alt="" />
      <img src={women} alt="" />
    </div>
  );
};

export default Category;
