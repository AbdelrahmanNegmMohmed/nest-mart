import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
import logo from "../../Assest/Images/logo (1).svg"
import SearchIcon from '@mui/icons-material/Search';
import Select from '../SelectDrop/SelectDrop';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import icon_cart from "../../Assest/Images/icon-cart.svg"
import icon_compare from "../../Assest/Images/icon-compare.svg"
import icon_heart from "../../Assest/Images/icon-heart.svg"
import icon_user from "../../Assest/Images/icon-user.svg"
import Button from '@mui/material/Button'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from './Nav/Nav';


const Header = (props) => {
  const[isDropdowen,setisOpenDropDowen]=useState(false)
  const headerRef=useRef()

  const [categories, setcategories] = useState([
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood',
    'Pet Foods & Toy',
    'Fast food',
    'Baking material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice',
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood'
]);
    const countryList=[]

    useEffect(()=>{
      getCountry('https://countriesnow.space/api/v0.1/countries/')
    },[])
    
    
    const getCountry=async(url)=>{
      try{
        await axios.get(url).then((respons)=>{
          if(respons.status===200){
            respons.data.data.map((item,index)=>{
              countryList.push(item.country)

            })
          }

        })

      }catch(error){
        console.log(error.message);
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        let position=window.pageYOffset;
        if (position>100) {
          headerRef.current.classList.add("fixed")
        }else{
          headerRef.current.classList.remove("fixed")

        }
      })
    },[])





  return (
  <>
<div className='headerWrapper' ref={headerRef}>
  <header>
    <div className="container-fluid">
      <div className='row align-items-center'>
        <div className="col-sm-2">
          <img src={logo} alt="" />
        </div>
{/* -----------------------------------------------------------------------         */}
        {/*headerSearch start heare  */}
        <div className="col-sm-5">
          <div className="headerSearch d-flex align-items-center">
            <Select props={categories} placeholder={"All Categories"} icon={false}/>


            <div className="search">
              <input type="text" placeholder='Search For Items...' />
              <SearchIcon className='searchIcon'/>
            </div>
          </div>
        </div>
        {/*headerSearch end heare */}
        <div className="col-sm-5 d-flex align-items-center ">
          <div className="ml-auto d-flex align-items-center">
                <div className="countryWrapper">
                    <Select props={countryList} placeholder={"Your :Location"}
                      icon={<LocationOnOutlinedIcon style={{opacity:"0.5 "}}/>}/>
                </div>
                <ClickAwayListener onClickAway={()=>setisOpenDropDowen(false)}>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                      <span>
                        <img src={icon_compare} alt=""/>
                        <span className='badge bg-success rounded-circle'>3</span>
                        Comper
                        </span>               
                  </li>
                  <li className="list-inline-item">
                      <span>
                        <img src={icon_heart} alt=""/>
                        <span className='badge bg-success rounded-circle'>6</span>
                        Wishlist
                        </span>               
                  </li>
                  <li className="list-inline-item">
                      <span >
                        <img src={icon_cart} alt=""/>
                        <span className='badge bg-success rounded-circle '>2</span>
                        Cart
                        </span>               
                  </li>
                  <li className="list-inline-item">
                      <span onClick={()=>setisOpenDropDowen(!isDropdowen)}>
                        <img src={icon_user} alt=""/>
                        Account
                        </span>  
                        {
                            isDropdowen!== false &&
                            <ul className="dropdownmenu">
                            <li><Button><Person2OutlinedIcon/> My Account</Button></li>
                            <li><Button><PinDropIcon/>Order Tracking</Button></li>
                            <li><Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button></li>
                            <li><Button><TuneIcon/>Setting</Button></li>
                            <li><Button><LogoutOutlinedIcon/> Sign Out</Button></li>
                          </ul>
                        }
                  </li>               
                  </ul>
                </ClickAwayListener>

          </div>      
        </div>
      </div>
    </div>
  </header>
  <Nav data={props.data}/>
  </div>
  <div className="afterHeader"></div>
  
  </>
  )
}
export default Header