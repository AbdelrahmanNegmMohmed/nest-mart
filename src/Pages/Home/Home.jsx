import React, { useEffect, useState } from "react";
import HomeSlider from "./slider/Slider";
import CatSlider from "../../components/CatSlider/CatSlider";
import Banner from "../../components/banner/Banner";
import Product from "../../components/Product/Product";
import "../../Assest/css/home.css";
import Slider from "react-slick";
import banner from "../../Assest/Images/banner/banner-4.png";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = (props) => {
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
  const [prodData, setprodData] = useState(props.data); //al data
  const [catArray, setcatArray] = useState([]); // data after map 2 and filter
  const [activeTabIndex, setactiveTabIndex] = useState(0); //بتغير لون الحاجه اللي دايس عليها
  const [activeTab, setactiveTab] = useState([]);
  const [activeTabData, setactiveTabData] = useState([]);
  const [BestSalls,setBestSalls] =useState([])

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


  const bsetsallsArr =[]
  useEffect(()=>{
    prodData.length!==0 &&
      prodData.map((item,index)=>{
        if(item.cat_name=== "Fashion"){
          item.items.length !== 0 &&
            item.items.map((item2)=>{
              item2.products.length !== 0 &&
                item2.products.map((product,index)=>{
                  bsetsallsArr.push(product)
                })
            })

        }
        setBestSalls(bsetsallsArr)
      })
  },[])
  return (
    <div>
      <HomeSlider />
      <CatSlider data={prodData}/>
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
      <section className="homeProducts pt-0 homeproductrow2">
        <div className="container-fluid ">
          <div className="d-flex align-items-center content homeproductrow2">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto mb-0  filterTab">
             
             
              <li className="list-inline-item">
                <a className="cursor">New added</a>
              </li>
              {

              }
            </ul>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 pre-5">
              <img src={banner} alt="" />
            </div>
            <div className="col-md-9 conte">
              <Slider {...settings} className="prodSlider">
                {
                  BestSalls.length !== 0 &&
                     BestSalls.map((item,index)=>{
                      return(
                        <div className="item d-flex" key={index}>
                             <Product col={"sale"} item={item} />
                        </div>
                      )
                     
                     }) 
                }
             
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <HomeProducts/>
    </div>
  );
};

export default Home;
