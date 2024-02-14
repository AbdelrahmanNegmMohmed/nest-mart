import Slider from "react-slick";
import "./CatSlider.css"
import all_product from "../../Assest/FeaturedCategories"
import Item from '../items/Item';

const CatSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows:true,
        autoplay:2000,
        centerMode:true
   
      };

  return (
   
    <div className='catslidersection'>
        <div className="container-fluid">
            <h2 className='hd'>Featured Categories </h2>
                <Slider  {...settings} className='cat_slider_Main' >
                {all_product.map((item,i) =>{
                            return <Item  
                            id={item.id}
                            type={item.type}
                            numproduct={item.numproduct}
                            image={item.image}
                            />
                        })
                      }
                    
                      

               
                    
                    
            </Slider>
        </div>
    </div>
  )
}

export default CatSlider