import React, { useEffect, useState } from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
const Product = (props) => {
  const [productData, setproductData] = useState();
  const [productData2, setproductData2] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setproductData(props.item);
  }, [props.item]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setproductData2(props.data2);
  }, [props.data2]);

  const setproductCat=()=> {
      sessionStorage.setItem('parentCat',productData.parentCatName);
      sessionStorage.setItem('subCatName',productData.subCatName); 

  }
  return (
    <div onClick={setproductCat} className="productThumb">
      {props.col !== null && props.col !== undefined && (
        <span className={`badge ${props.col}`}>{props.col}</span>
      )}
      {productData !== undefined && (
        <>
          <Link to={`/product/${productData.id}`}>
            <div className="imgWrapper">
              <div className="p-4 wrapper">
                <img
                  src={productData.catImg + "?im=Resize=(420,420)"}
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="overlay transition">
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="cursor " tooltip="Add to Wishlist">
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Compare">
                      <CompareArrowsOutlinedIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Quick View">
                      <RemoveRedEyeOutlinedIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
          <div className="info">
            <span className="d-block catname">{productData.brand}</span>
            <h4 className="title">
              <Link>{productData.productName.substring(0, 70) + "..."}</Link>
            </h4>
            <Rating
              name="half-rating-read"
              defaultValue={parseFloat(productData.rating)}
              precision={0.5}
              readOnly
            />
            <span className="brand d-block text-g">
              {" "}
              By<a className="text-g">{productData.brand}</a>
            </span>

            <div className="d-flex align-items-center justify mt-3 ">
              <div className="d-flex aligin-items-center">
                <span className="pricre text-g font-weight-bold">
                  EGP {productData.price}
                </span>
                <span className="old_pricre">EGP {productData.oldPrice}</span>
              </div>
              <Button className=" ml-auto transition">
                <ShoppingCartOutlinedIcon />
                Add
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
