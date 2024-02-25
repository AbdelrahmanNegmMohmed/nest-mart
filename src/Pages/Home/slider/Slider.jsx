import React from 'react'
import "./Slider.css"
import Slider from "react-slick";
import slid1 from "../../../Assest/Images/slider-1.png"
import slid2 from "../../../Assest/Images/slider-2.png"
import NewsLatter from '../../../components/NewsLatter/NewsLatter';




const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:true
   
      };
  return (
    <section className='homeSlider'>
        <div className='container-fluid position-relative'>
            <Slider {...settings} className='home_slider_Main'>
                <div className='item'>
                    <img src={slid1} className='img-hed'/>
                    <div className="info">
                        <h2 className='mb-5'>
                        Don’t miss amazing<br/>
                        grocery deals
                        </h2>
                        <p className='mb-65'>Sign up for the daily newsletter</p>

                    </div>
                    
                </div>
                <div className='item '>
                    <img src={slid2} className='img-hed' />
                    <div className="info info2eddition">
                        <h2 className='mb-5'>
                        Fresh Vegetables<br/>
                        Big discount
                        </h2>
                        <p className='mb-65'>Save up to 50% off on your first order</p>

                    </div>

                </div>           
                </Slider>
                <NewsLatter/>

        </div>
    </section>
  )
}

export default HomeSlider