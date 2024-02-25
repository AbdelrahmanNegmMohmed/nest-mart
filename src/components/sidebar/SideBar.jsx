import React from "react";
import "./sidebar.css";
import cat1 from "../../Assest/Images/categort/category-1.svg";
import cat2 from "../../Assest/Images/categort/category-2.svg";
import cat3 from "../../Assest/Images/categort/category-3.svg";
import cat4 from "../../Assest/Images/categort/category-4.svg";
import cat5 from "../../Assest/Images/categort/category-5.svg";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import bannar2 from "../../Assest/Images/banner/banner1.jpg";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function valuetext(value) {
  return `${value}°C`;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SideBar = (props) => {
  const [value, setValue] = React.useState([20, 37]);
  const [totalLingth,settotalLingth]=useState([])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  var catlength =0;
  var lengthArr=[];
useEffect(()=>{
props.data.length !==0 &&
props.data.map((item,index)=>{
  item.items.length !== 0 &&
    item.items.map((item2,index2)=>{
      catlength+=item2.products.length

    })
    lengthArr.push(catlength)
    catlength=0
})

const list = lengthArr.filter((item,index)=>lengthArr.indexOf(item)===index)
settotalLingth(list)
},[])
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>
          <div className="catlist">
            {props.data.length !== 0 &&
              props.data.map((item,index) => {
                return (
                  <a className="nest"  href={`/cat/${item.cat_name.toLowerCase()}`}>
                    <div className="catItem ">
                      <span className="img">
                        <img src={item.image} alt="" width={40} />
                      </span>
                      <h4 className="mb-0 ml-3 mr-3">{item.cat_name}</h4>
                      <span className="d-flex align-items-center rounded-circle ml-auto">
                        {totalLingth[index]}
                    
                      </span>
                    </div>
                  </a>
                );
              })}
       
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Full by Price</h3>
          <Slider
            main={0}
            step={1}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />
          <div className=" d-flex pt-2 pb-2 priceRange">
            <span>
              From:<strong className="text-success">${value[0]}</strong>
            </span>
            <span>
              To:<strong className="text-success">${value[1]}</strong>
            </span>
          </div>

          <div className="filters mt-4">
            <h5>Color</h5>
            <ul className="mb-0">
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Red (56)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Blue (54)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Red (56)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Blue (54)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Red (56)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Green (78)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Blue (54)
              </li>
            </ul>
          </div>
          <div className="filters">
            <h5>Item Condition</h5>
            <ul>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                New (1506)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Refurbished (27)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Used (45)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                New (1506)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Refurbished (27)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Used (45)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                New (1506)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Refurbished (27)
              </li>
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Used (45)
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <Button className="btn btn-g">
              Filter
              <FilterAltOutlinedIcon />
            </Button>
          </div>
        </div>
        <img src={bannar2} className="w-100" />
      </div>
    </>
  );
};

export default SideBar;
