import React from 'react'
import HomeSlider from "./slider/Slider"
import CatSlider from '../../components/CatSlider/CatSlider'
import Banner from '../../components/banner/Banner'
import HomeProducts from './HomeProducts/HomeProducts'
import Product from '../../components/Product/Product'

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
      <HomeProducts/>
   </div>
  )
}

export default Home