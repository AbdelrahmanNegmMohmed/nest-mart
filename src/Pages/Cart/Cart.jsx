import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../components/quantityBox/QuantityBox";
import { Button } from "@mui/material";

const Cart = () => {

  return (
    <div>
      <div className="breadcrumbwrapper mb-4">
        <div className="container-fluid detailscontainer">
          <ul className=" breadcrumb  breadcrumb2 mb-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>shop</li>
            <li>Cart </li>
          </ul>
        </div>
      </div>
      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Your Cart</h1>
                  <p>
                    There are <span className="text-g">3</span> products in your
                    cart
                  </p>
                </div>
                <span className="left-cler cletCart d-flex align-items-center cursor">
                  <DeleteOutlineOutlinedIcon />
                  Clear-Cart
                </span>
              </div>
              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg"
                                className="w-100"
                              />
                            </div>
                            <div className="info">
                              <Link>
                                <h4>jjjdh jhasmjmdj jsjjujnsjujs jndnm</h4>
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>$2.51</span>
                        </td>
                        <td>
                        <QuantityBox/>
                        
                        </td>
                        <td>
                          <span className="text-g">$2.51</span>
                        </td>
                        <td>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg"
                                className="w-100"
                              />
                            </div>
                            <div className="info">
                              <Link>
                                <h4>jjjdh jhasmjmdj jsjjujnsjujs jndnm</h4>
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>$2.51</span>
                        </td>
                        <td>
                        <QuantityBox/>
 
                        </td>
                        <td>
                          <span className="text-g">$2.51</span>
                        </td>
                        <td>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg"
                                className="w-100"
                              />
                            </div>
                            <div className="info">
                              <Link>
                                <h4>jjjdh jhasmjmdj jsjjujnsjujs jndnm</h4>
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>$2.51</span>
                        </td>
                        <td>
                        <QuantityBox/>

                        </td>
                        <td>
                          <span className="text-g">$2.51</span>
                        </td>
                        <td>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg"
                                className="w-100"
                              />
                            </div>
                            <div className="info">
                              <Link>
                                <h4>jjjdh jhasmjmdj jsjjujnsjujs jndnm</h4>
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>$2.51</span>
                        </td>
                        <td>
                        <QuantityBox/>

                        </td>
                        <td>
                          <span className="text-g">$2.51</span>
                        </td>
                        <td>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>

                 
                    </tbody>
                  </table>
                </div>
              </div>
              {/*  <div className="cartWapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div> */}
            </div>

            <div className="col-md-5 cartRightBox">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">subtotal</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span className="text-g">$12.31</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Shipping</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span>Free</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Estimate for</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    United Kingdom
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Total</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span className="text-g">$12.31</span>
                  </h3>
                </div>
                <br />
                <Button className="btn-g btn-lg">Proceed To Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
