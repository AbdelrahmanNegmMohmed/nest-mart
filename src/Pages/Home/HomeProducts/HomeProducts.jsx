import React, { useState } from "react";
import "./HomeProducts.css";
import Product from "../../../components/Product/Product";
import banner from "../../../Assest/Images/banner/banner-4.png";
import Slider from "react-slick";
import TopProducts from "../topproducts/TopProducts";

const HomeProducts = (props) => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
    centerMode: true,
  };
  return (
    <>
   

      <div className="topProductsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" />
            </div>
            <div className="col">
              <TopProducts title="Trending Products" />
            </div>
            <div className="col">
              <TopProducts title="Recently added" />
            </div>
            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default HomeProducts;
