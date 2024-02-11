import React from 'react'
import "./banner.css"
import banner_one from "../../Assest/Images/banner/banner-1.png"
import banner_two from "../../Assest/Images/banner/banner-2.png"
import banner_thre from "../../Assest/Images/banner/banner-3.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Banner = () => {
  return (
<div className='banner '>
  <div className='container-fluid'>
      <div className='row'>
                <div className='banner_contant col'>
                    <img src={banner_thre} alt="" />
                    <div className='banner-discribtion'>
                    <h2>The best Organic <br />Products Online</h2>
                    <button><ArrowRightAltIcon/>shop now</button>
                    
                    </div>       
                </div>
                <div className='banner_contant col'>
                    <img src={banner_two} alt="" />
                    <div className='banner-discribtion'>
                    <h2>Make your Breakfast& <br />   Healthy and Easy</h2>
                    <button><ArrowRightAltIcon/>shop now</button>
                  </div>       
                </div>
                <div className='banner_contant col'>
                    <img src={banner_one} alt="" />
                    <div className='banner-discribtion'>
                    <h2>Everyday Fresh & <br />Clean with Our <br />Products</h2>
                    <button><ArrowRightAltIcon/>shop now</button>
                     </div>
    </div>
        
                </div>


        </div>

    </div>
  )
}

export default Banner