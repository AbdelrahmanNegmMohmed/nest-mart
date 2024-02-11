import React from 'react'
import HomeSlider from "./slider/Slider"
import CatSlider from '../../components/CatSlider/CatSlider'
import Banner from '../../components/banner/Banner'

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
   </div>
  )
}

export default Home