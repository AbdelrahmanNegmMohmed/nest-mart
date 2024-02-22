import React, { useEffect, useState } from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import menu_banner from "../../../Assest/Images/banner-menu.png";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const Nav = (props) => {
  const [navData, setnavData] = useState([]);
  useEffect(() => {
    setnavData(props.data);
  }, []);
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className="bg-success text-white catTab">
              <GridViewIcon />
              &nbsp; Browse All Categories
              <KeyboardArrowDownIcon />
            </Button>
          </div>
          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link to={"/"}>
                      Home <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                </li>

                {navData.length !== 0 &&
                  navData.map((item, index) => {
                    return (
                      <li className="list-inline-item">
                        <Button>
                          <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                            {item.cat_name} <KeyboardArrowDownIcon />
                          </Link>
                        </Button>

                        {item.items.length !== 0 && (
                          <div className="dropdown_menu">
                            <ul>
                              {item.items.map((item2, index2) => {
                                return (
                                  <li>
                                    <Button>
                                      <Link
                                        to={`/cat/${item.cat_name.toLowerCase()}
                                    /${item2.cat_name.replace().toLowerCase()}`}
                                      >
                                        {item2.cat_name}
                                      </Link>
                                    </Button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}

                {/*   <li className='list-inline-item'>
                  <Button><Link>Shop <KeyboardArrowDownIcon/></Link></Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li><Button><Link to="/about">Shop Grid – Right Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop Grid – Left Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop List – Right Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop List – Left Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop - Wide</Link></Button></li>
                      <li><Button><Link to="/about">Single Product </Link></Button></li>
                      <li><Button><Link to="/about">Shop – Filter</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Wishlist</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Cart</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Checkout</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Compare</Link></Button></li>
                      <li><Button><Link to="/about">Shop Invoice</Link></Button></li>
         
                    </ul>
                  </div>
                </li> */}
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Vendors <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">Vendors Grid</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Vendors List</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Vendor Details 01</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Vendor Details 02</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Vendor Dashboard</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Vendor Gudie</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item position-static">
                  <Button>
                    <Link>
                      Mega menu <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      {navData.length !== 0 &&
                        navData.map((item, index) => {
                          return (
                            <div className="col">
                              <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                <h4 className="text-g">{item.cat_name}</h4>
                              </Link>
                              {item.items.length !== 0 && (
                                <ul className="mt-28">
                                  {item.items.map((item3, index3) => {
                                    return (
                                      <li>
                                        <Link
                                          to={`/cat/${item.cat_name}
                                        /${item3.cat_name
                                          .replace(/\s/g, "-")
                                          .toLowerCase()}`}
                                        >
                                          {item3.cat_name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          );
                        })}

                      <div className="col">
                        <img className="w-100 h-100" src={menu_banner} alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Blog <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Term Of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Deals
                      <LocalFireDepartmentIcon />
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center">
              <span>
                <HeadsetMicIcon />
              </span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900 - 888</h3>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
