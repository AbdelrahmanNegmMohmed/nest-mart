import Slider from "react-slick";
import "./CatSlider.css"
import all_product from "../../Assest/FeaturedCategories"
import Item from '../items/Item';
import { useEffect, useState } from "react";

const CatSlider = (props) => {
  const [allData,setallData]=useState(props.data)
  const [totalLingth,settotalLingth]=useState([])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows:true,
/*         autoplay:2000,
 */        centerMode:true
   
      };
      const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

      var catlength =0;
      var lengthArr=[];
useEffect(()=>{
  allData.length !==0 &&
    allData.map((item,index)=>{
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
   
    <div className='catslidersection'>
        <div className="container-fluid">
            <h2 className='hd'>Featured Categories </h2>
                <Slider  {...settings} className='cat_slider_Main' >
                  {
                    allData.length !== 0 &&
                      allData.map((item,index)=>{
                        
                        return (<Item  
                          back={itemBg[index]}
                        image={item.image}
                        type={item.cat_name}
                        numproduct={item.numproduct}
                        key={index}
                        item={totalLingth[index]}
                         
                        />
                      
                                  )
                     

                      })
                  }
                      
                    
                      

               
                    
                    
            </Slider>
        </div>
    </div>
  )
}

export default CatSlider