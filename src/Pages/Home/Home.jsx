import React from 'react'
import HomeSlider from "./slider/Slider"
import CatSlider from '../../components/CatSlider/CatSlider'
import Banner from '../../components/banner/Banner'
import HomeProducts from './HomeProducts/HomeProducts'
import TopPro from './toppro/TopPro'

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
      <HomeProducts/>
      <TopPro/>
   </div>
  )
}

export default Home