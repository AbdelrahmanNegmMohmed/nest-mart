import "./Listing.css";
import { Link } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import Product from "../../components/Product/Product";
import { Button } from "@mui/material";
import { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
/* import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import PinDropIcon from '@mui/icons-material/PinDrop'; */
const Listing = () => {
  const [isopendropdown, setisopendropdown] = useState(false);
  const [isopendropdown2, setisopendropdown2] = useState(false);
  return (
    <div className="lisitingPage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          <h1>Snack</h1>
          <ul className="list list-inline d-flex mb-0">
            <li className="list-inline-item">
              <Link to={""}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Snack</Link>
            </li>
          </ul>
        </div>
        <div className="listingDate">
          <div className="row">
            <div className="col-md-3 sidebarWapper">
              <SideBar />
            </div>
            <div className="col-md-9 rightContent homeProducts pt-0">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">
                  We found <span className="text-success">29</span> items for
                  you!
                </p>
                <div className="ml-auto d-flex align-items-center contenbuttom">
                  <div className="tab_ position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setisopendropdown(!isopendropdown)}
                    >
                      <GridViewIcon />
                      show: 50
                      <KeyboardArrowDownIcon />
                    </Button>
                    {isopendropdown !== false && (
                      <ul className="dropdownmenu droplisting">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown(false)}
                          >
                            50
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown(false)}
                          >
                            {" "}
                            150
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown(false)}
                          >
                            {" "}
                            200
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown(false)}
                          >
                            {" "}
                            All
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="tab_ ml-3">
                    <Button
                      className="btn_"
                      onClick={() => setisopendropdown2(!isopendropdown2)}
                    >
                      <FilterListIcon />
                      Sort by: Featured
                      <KeyboardArrowDownIcon />
                    </Button>
                    {isopendropdown2 !== false && (
                      <ul className="dropdownmenu droplisting">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown2(false)}
                          >
                            Featuredt
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown2(false)}
                          >
                            {" "}
                            Price: Low to High
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown2(false)}
                          >
                            {" "}
                            Price: High to Low
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown2(false)}
                          >
                            Release Date
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setisopendropdown2(false)}
                          >
                            Avg. Rating
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="productRow pl-4 pr-3">
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"sale"} />
                </div>
                <div className="item ">
                  <Product col={"hot"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"sale"} />
                </div>
                <div className="item ">
                  <Product col={"hot"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
                <div className="item ">
                  <Product col={"best"} />
                </div>
                <div className="item ">
                  <Product col={"sale"} />
                </div>
                <div className="item ">
                  <Product col={"hot"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
                <div className="item ">
                  <Product col={"new"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
