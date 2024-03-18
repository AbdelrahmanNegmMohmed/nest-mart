import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../components/quantityBox/QuantityBox";
import { Button } from "@mui/material";
import { Mycontext } from "../../App";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const [cartItems, setcartItems] = useState([]);
  const context = useContext(Mycontext);
  const history = useNavigate();

  useEffect(() => {
    if(context.isLogin === "true" ){
      getCartData("http://localhost:5000/cartItems");

    }else{
      history('/')
    }
  }, []);

  const getCartData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setcartItems(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const emptyCart=()=>{
    setcartItems([])
  }
  const updateCart =  (items) =>{
    setcartItems(items)
  }

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
                <span className="left-cler cletCart d-flex align-items-center cursor"
                onClick={()=>emptyCart()}
                >
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
                      {cartItems.length !== 0 &&
                        cartItems.map((item, index) => {
                          return (
                            <tr>
                              <td width={"50%"}>
                                <div className="d-flex align-items-center">
                                <Link to={`/product/${item.id}`}>
                                  <div className="img">
                                    <img
                                    src={item.catImg}
                                      className="w-100"
                                    />
                                  </div>
                                  </Link>
                                  <div className="info">
                                    <Link to={`/product/${item.id}`}>
                                      <h4>
                                        {item.productName}
                                      </h4>
                                    </Link>
                                    <Rating
                                      name="half-rating-read"
                                      value={parseFloat(item.rating)}
                                      precision={0.5}
                                      readOnly
                                    />
                                    <span className="text-light">({parseFloat(item.rating)})</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>EGP:{parseInt(item.price.split(",").join("")) }</span>
                              </td>
                              <td width={"20%"}>
                                <QuantityBox item={item} cartItems={cartItems} index={index} updateCart={updateCart} />
                              </td>
                              <td>
                                <span className="text-g">
                                  EGP: {
                                    parseInt(item.price.split(",").join("")*parseInt(item.quantity))

                                  }
                                  
                                  </span>
                              </td>
                              <td>
                                <span className="cursor">
                                  <DeleteOutlineOutlinedIcon />
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <div className="d-flex alingn-items-center">
                <Link to="/">
                  <Button className="btn-g">
                    Continue Shopping
                  

                  </Button>
                </Link>

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

            <div className="col-md-4 cartRightBox">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">subtotal</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span className="text-g">
                      {
                        cartItems.length !== 0 &&
                          cartItems.map(item => parseInt(item.price.split(",").join(""))*item.quantity).reduce((total,value)=>
                          total + value, 0
                          )

                      }
                         
                    
                    </span>
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
                    <span className="text-g">


                    {
                        cartItems.length !== 0 &&
                          cartItems.map(item => parseInt(item.price.split(",").join(""))*item.quantity).reduce((total,value)=>
                          total + value, 0
                          )

                      }
                    </span>
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
