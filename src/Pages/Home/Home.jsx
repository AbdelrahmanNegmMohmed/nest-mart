import React, { useEffect, useState } from 'react'
import HomeSlider from "./slider/Slider"
import CatSlider from '../../components/CatSlider/CatSlider'
import Banner from '../../components/banner/Banner'
import HomeProducts from './HomeProducts/HomeProducts'

const Home = (props) => {
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
      <HomeProducts data={catArray}/>
   </div>
  )
}

export default Home