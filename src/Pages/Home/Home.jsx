import React, { useEffect, useState } from "react";
import HomeSlider from "./slider/Slider";
import CatSlider from "../../components/CatSlider/CatSlider";
import Banner from "../../components/banner/Banner";
import Product from "../../components/Product/Product";
import "../../Assest/css/home.css";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = (props) => {
  const [prodData, setprodData] = useState(props.data); //al data
  const [catArray, setcatArray] = useState([]); // data after map 2 and filter
  const [activeTabIndex, setactiveTabIndex] = useState(0); //بتغير لون الحاجه اللي دايس عليها
  const [activeTab, setactiveTab] = useState([]);
  const [activeTabData, setactiveTabData] = useState([]);

  useEffect(() => {
    prodData.length !== 0 &&
      prodData.map((item, index) => {
        item.items.map((item2, index2) => {
          catArray.push(item2.cat_name);
        });
      });
    const list2 = catArray.filter(
      (item, index) => catArray.indexOf(item) === index
    );
    setcatArray(list2);
    setactiveTab(list2[0]);
  }, []);

  useEffect(() => {
    var arr = [];
    setactiveTabData(arr);
    prodData.length !== 0 &&
      prodData.map((item, index) => {
        item.items.map((item2, index2) => {
          if (item2.cat_name === activeTab) {
            setactiveTabData(item2.products);
          }
        });
      });
  }, [activeTab, setactiveTab]);
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <Banner />
      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center content">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto mb-0  filterTab">
              {catArray.length !== 0 &&
                catArray.map((cat, index) => {
                  return (
                    <li className="list-inline-item">
                      <a
                        className={`cursor text-capitalize 
                          ${activeTabIndex === index ? "act" : ""}`}
                        onClick={() => {
                          setactiveTab(cat);
                          setactiveTabIndex(index);
                        }}
                      >
                        {cat}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="productRow">
            {activeTabData.length !== 0 &&
              activeTabData.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <Product col={"sale"} item={item} />
                  </div>
                );
              })}
            ِ
          </div>
        </div>
      </section>
      <HomeProducts />
    </div>
  );
};

export default Home;
