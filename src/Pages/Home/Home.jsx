import React, { useEffect, useState } from 'react'
import HomeSlider from "./slider/Slider"
import CatSlider from '../../components/CatSlider/CatSlider'
import Banner from '../../components/banner/Banner'
import Product from '../../components/Product/Product'
import "../../Assest/css/home.css"
import HomeProducts from './HomeProducts/HomeProducts'

const Home = (props) => {
  
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const[prodData,setprodData]=useState(props.data)
  const [catArray,setcatArray]=useState([])
  const catArr=[];
  useEffect(()=>{
    prodData.length !== 0 &&
      prodData.map((item,index)=>{
        item.items.map((item2)=>{
          catArr.push(item2.cat_name)
        })
      })
      console.log(catArr,"cat arrrrr");
      const list2 =catArr.filter((item,index)=> catArr.indexOf(item)===index  )
      console.log(list2,"list 2");
      setcatArray(list2)

      
  },[]) 
  return (
    <div>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
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
            <div className="item">
              <Product col={"sale"} />
            </div>
            <div className="item">
              <Product col={"hot"} />
            </div>
            <div className="item">
              <Product col={"new"} />
            </div>
            <div className="item">
              <Product col={"best"} />
            </div>
            <div className="item">
              <Product col={"new"} />
            </div>
            <div className="item">
              <Product col={"hot"} />
            </div>
            <div className="item">
              <Product col={"new"} />
            </div>
            <div className="item">
              <Product col={"sale"} />
            </div>
            <div className="item">
              <Product col={"new"} />
            </div>
            <div className="item">
              <Product col={"best"} />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>
      <HomeProducts/>
   </div>
  )
}

export default Home