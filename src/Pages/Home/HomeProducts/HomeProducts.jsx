import React from 'react'
import "./HomeProducts.css"
import Product from '../../../components/Product/Product';
import banner from "../../../Assest/Images/banner/banner-4.png"
import Slider from "react-slick"
import TopProducts from "../topproducts/TopProducts"


const HomeProducts = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows:true,
        autoplay:3000,
        centerMode:true
        
    
      };
  return (
    <>
    <section className='homeProducts'>
        <div className="container-fluid">
            <div className="d-flex align-items-center content">
                <h2 className='hd mb-0 mt-0'>Popular Products</h2>
                <ul className="list list-inline ml-auto mb-0  filterTab">
                    <li className='list-inline-item'>
                        <a className='cursor'>All</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Milks & Dairies</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Coffes & Teas</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Pet Foods</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Meats</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Vegetables</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Fruits</a>
                    </li>                 
                </ul>
            </div>

            <div className='productRow'>
                <div className='item'>
                    <Product col={"sale"}/>

                </div>
                <div className='item'>
                    <Product col={"hot"}/>

                </div>
                <div className='item'>
                    <Product col={"new"}/>

                </div>
                <div className='item'>
                    <Product col={"best"}/>

                </div>
                <div className='item'>
                <Product col={"new"}/>

                </div>
                <div className='item'>
                <Product col={"hot"}/>

                </div>
                <div className='item'>
                <Product col={"new"}/>

                </div>
                <div className='item'>
                <Product col={"sale"}/>

                </div>
                <div className='item'>
                <Product col={"new"}/>

                </div>
                <div className='item'>
                    <Product col={"best"}/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
                <div className='item'>
                    <Product/>

                </div>
              

            </div>
        </div>

    </section>
     





<section className='homeProducts pt-0 homeproductrow2'>
     <div className="container-fluid ">
         <div className="d-flex align-items-center content homeproductrow2">
             <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
             <ul className="list list-inline ml-auto mb-0  filterTab">
                 <li className='list-inline-item'>
                    <a className='cursor'>Featured</a>
                 </li>
                 <li className='list-inline-item'>
                    <a className='cursor'>Popular</a>
                 </li>
                 <li className='list-inline-item'>
                    <a className='cursor'>New added</a>
                 </li>                 
             </ul>
         </div>
         <br />
         <div className="row">
            <div className="col-md-3 pre-5">
                <img src={banner} alt="" />
            </div>
            <div className='col-md-9 conte'>
            <Slider  {...settings} className='prodSlider' >
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
                <div className='item d-flex'>
                    <Product col={"sale"}/>
                </div>
            </Slider>
            </div>
         </div>
     </div>

 </section>


<div className="topProductsection">
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <TopProducts title='Top Selling'/>
            </div>
            <div className="col">
                <TopProducts title="Trending Products" />
            </div>
            <div className="col">
                <TopProducts title= 'Recently added'/>
            </div>
            <div className="col">
                <TopProducts title='Top Rated'/>
            </div>
           
        </div>
    </div>

</div>

<br />
<br />
 </>
  )

  
}


export default HomeProducts;




