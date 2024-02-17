import React, { useState } from 'react'
import "./Details.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SideBar from '../../components/sidebar/SideBar';
import Product from '../../components/Product/Product';
/* import Rating from '@mui/material/Rating';
 */




const Details = () => {
  const [zoomImage,setzoomImage]=useState("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/product-10-1.jpg")
  const goto=(url,index)=>{
    setzoomImage(url)
    
  }






  const[activesie,setactivesie]=useState(0)
  const isActive=(index)=>{
    setactivesie(index)
  }



  const [inputvalue,setinputvalue]=useState(1)
  const plus=()=>{
    setinputvalue(inputvalue+1)
  }
  const minus=()=>{
    if(inputvalue!=1){

      setinputvalue(inputvalue-1)
    }
  }



  const [activetaps,setactivetaps]=useState(0)

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade:false,
    arrows:true

  };
  var related = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade:false,
    arrows:true

  };
  return (
    <section className='detailsPage mb-5'>
        <div className="breadcrumbwrapper mb-4">
            <div className="container-fluid detailscontainer">
                <ul className=' breadcrumb  breadcrumb2 mb-0'>
                    <li><Link>Home</Link></li>
                    <li><Link>Vegetables & Tubers</Link></li>
                    <li><Link>Seeds Of Change Organic</Link></li>
                </ul>
            </div>
        </div>

        <div className="container cont detailscontainer pt-3 pb-3">
              <div className="row">
                     {/* productzoom code start here */} 
                     <div className="col-md-5 ">
                            <div className="productzoom">
                                    <InnerImageZoom
                                    zoomType='hover'
                                    zoomScale={2}
                                    src={zoomImage} />
                           </div>
                           <Slider {...settings} className='zoomslider'>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-6.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-6.jpg",0)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-7.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-7.jpg",1)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-8.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-8.jpg",2)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-9.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-9.jpg",3)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-10.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-10.jpg",4)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-5.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-5.jpg",5)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-4.jpg",6)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-3.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-3.jpg",7)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-2.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-2.jpg",8)}
                                />
                            </div>
                            <div className="item">
                              <img 
                              src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-1.jpg"
                              className='w-100'
                               alt=""
                               onClick={()=>goto("https://nest-frontend-rtl.netlify.app/assets/imgs/shop/thumbnail-1.jpg",9)}
                                />
                            </div>
               
                            </Slider>






                      </div>
                      {/* productinfo code end here */} 
 

                        {/* productzoom code start here */} 
                      <div className="col-md-7 productinfo pl-5">
                        <h1>seeds of change organic quinoa, brown</h1>
                        <div className=" productinfo-rate  mb-4">

                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> 
                        <span className='text-light'>(32 reviews)</span>
                        </div>
                        <div className="pricesection d-flex align-items-center mb-3">
                          <span className='text-g pricelarge'>$38</span>
                          <div className='ml-2 pr'>
                            <span className='text-org'>26% off</span>
                            <span className='text-light oldprice'>$52</span>

                          </div>
                        </div>
                              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Fuga ipsa fugiat ducimus, illum similique, delectus temporibus et 
                                laboriosam mollitia laudantium adipisci error, ab deleniti repellendus quo quod eum saepe soluta.
                              </p>
                              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Fuga ipsa fugiat ducimus, illum similique, delectus temporibus et 
                                laboriosam mollitia laudantium adipisci error, ab deleniti repellendus quo quod eum saepe soluta.
                              </p>
                              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Fuga ipsa fugiat ducimus, illum similique, delectus temporibus et 
                                laboriosam mollitia laudantium adipisci error, ab deleniti repellendus quo quod eum saepe soluta.
                              </p>
                              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Fuga ipsa fugiat ducimus, illum similique, delectus temporibus et 
                                laboriosam mollitia laudantium adipisci error, ab deleniti repellendus quo quod eum saepe soluta.
                              </p>
                              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Fuga ipsa fugiat ducimus, illum similique, delectus temporibus et 
                                laboriosam mollitia laudantium adipisci error, ab deleniti repellendus quo quod eum saepe soluta.
                              </p>
                              <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Fuga ipsa fugiat ducimus, illum similique, delectus temporibus et 
                                laboriosam mollitia laudantium adipisci error, ab deleniti repellendus quo quod eum saepe soluta.
                              </p>
                              <br />
                              <br />
                              <div className="productsize d-flex align-items-center">
                                <span>Size / Weight :</span>
                                <ul className="lit list-inline mb-0 pl-4">
                                  <li className="list-inline-item">
                                    <a className={` tag ${activesie===0?'active':''}`} onClick={()=>isActive(0)}>50eg</a></li>
                                  <li className="list-inline-item">
                                    <a  className={`tag ${activesie===1?'active':''}`} onClick={()=>isActive(1)}>60eg</a></li>
                                  <li className="list-inline-item">
                                    <a  className={`tag ${activesie===2?'active':''}`} onClick={()=>isActive(2)}>80eg</a></li>
                                  <li className="list-inline-item">
                                    <a  className={`tag ${activesie===3?'active':''}`} onClick={()=>isActive(3)}>100eg</a></li>
                                  <li className="list-inline-item">
                                    <a  className={`tag ${activesie===4?'active':''}`} onClick={()=>isActive(4)}>150eg</a></li>
                                </ul>
                              </div>

                              <div className="addcartsection pt-4 pb-4 d-flex align-items-center">
                                <div className="countersec mr-3">
                                  <input type="number" value={inputvalue}/>
                                  <span className='arrow plus ' onClick={plus}><KeyboardArrowUpIcon/></span>
                                  <span className='arrow minus ' onClick={minus}><KeyboardArrowDownIcon/></span>
                                </div>
                                <Button className='btn-g btn-lg addtocartbtn'><ShoppingCartOutlinedIcon/>Add to cart</Button>
                                <Button className='move btn-lg btn-lg addtocartbtn ml-3  btn-border'><FavoriteBorderOutlinedIcon/></Button>
                                <Button className='move btn-lg btn-lg addtocartbtn ml-3  btn-border'><CompareArrowsIcon/></Button>

                              </div>



                      </div>
                        {/* productinfo code end here */} 

              </div>
              <div className="card mt-5 p-5 detailspagetap">
                <div className="customtaps">
                    <ul className="list list-inline">
                      <li className='list-inline-item'>
                      <Button className={`${activetaps===0&&'active'}`} onClick={()=>setactivetaps(0)}>Discription</Button>
                      </li>
                      <li className='list-inline-item'>
                      <Button className={`${activetaps===1&&'active'}`} onClick={()=>setactivetaps(1)} >Additional info</Button>
                      </li>
                      <li className='list-inline-item'>
                      <Button>Vendor</Button>
                      </li>
                      <li className='list-inline-item'>
                      <Button className={`${activetaps===2&&'active'}`} onClick={()=>setactivetaps(2)} >Reviews (3)</Button>
                      </li>
                    </ul>


                          <br />

{
  activetaps===0 &&
                    <div className="tapcontant">
                      <p>
                      Uninhibited carnally hired played in whimpered dear gorilla koala
                      depending and much yikes off far quetzal goodness and from for grimaced
                        goodness unaccountably and meadowlark near unblushingly crucial scallop 
                        tightly neurotic hungrily some and dear furiously this apart.
                      Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on 
                      spoon-fed that alas rethought much decently richly and wow against the frequent fluidly 
                      at formidable acceptably flapped besides and much circa far over the bucolically hey 
                      precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                      </p>

                      <br />
                      <h1>Packaging & Delivery</h1>
                      <p>
                      Uninhibited carnally hired played in whimpered dear gorilla koala
                      depending and much yikes off far quetzal goodness and from for grimaced
                        goodness unaccountably and meadowlark near unblushingly crucial scallop 
                        tightly neurotic hungrily some and dear furiously this apart.
                      Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on 
                      spoon-fed that alas rethought much decently richly and wow against the frequent fluidly 
                      at formidable acceptably flapped besides and much circa far over the bucolically hey 
                      precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                      </p>
                      <br />





                    </div>
}
{
  activetaps===1 &&
                    <div className="tapcontant">
                      <div className="table-responsive">
                            <table className="table table-bordered">
                            <tbody>
                                                            <tr class="stand-up">
                                                                <th>Stand Up</th>
                                                                <td>
                                                                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="folded-wo-wheels">
                                                                <th>Folded (w/o wheels)</th>
                                                                <td>
                                                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="folded-w-wheels">
                                                                <th>Folded (w/ wheels)</th>
                                                                <td>
                                                                    <p>32.5″L x 24″W x 18.5″H</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="door-pass-through">
                                                                <th>Door Pass Through</th>
                                                                <td>
                                                                    <p>24</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="frame">
                                                                <th>Frame</th>
                                                                <td>
                                                                    <p>Aluminum</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="weight-wo-wheels">
                                                                <th>Weight (w/o wheels)</th>
                                                                <td>
                                                                    <p>20 LBS</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="weight-capacity">
                                                                <th>Weight Capacity</th>
                                                                <td>
                                                                    <p>60 LBS</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="width">
                                                                <th>Width</th>
                                                                <td>
                                                                    <p>24″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="handle-height-ground-to-handle">
                                                                <th>Handle height (ground to handle)</th>
                                                                <td>
                                                                    <p>37-45″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="wheels">
                                                                <th>Wheels</th>
                                                                <td>
                                                                    <p>12″ air / wide track slick tread</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="seat-back-height">
                                                                <th>Seat back height</th>
                                                                <td>
                                                                    <p>21.5″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="head-room-inside-canopy">
                                                                <th>Head room (inside canopy)</th>
                                                                <td>
                                                                    <p>25″</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="pa_color">
                                                                <th>Color</th>
                                                                <td>
                                                                    <p>Black, Blue, Red, White</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="pa_size">
                                                                <th>Size</th>
                                                                <td>
                                                                    <p>M, S</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                            </table>
                      </div>
                    </div>
}
{
    activetaps===2 &&
                      <div className="tapcontant">
                        <div className='row'>
                          <div className='col-md-8'>
                              <h3>Customer questions & answers</h3>
                              <br />
                              <div className="card p-4 reviewscard flex-row">
                                 <div className="image">
                                 <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png"/>
                                 </div>
                                 <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                                </div>


                                <div className="info pl-5">
                                  <div className="datedes">
                                  <h5 className='text-light'>December 4, 2022 at 3:12 pm</h5>
                                  < Rating name='half-rating-read' defaultValue={2.5} precision={0.5}
                                  readOnly/>

                                  </div>
                                  <p>
                                        Uninhibited carnally hired played in whimpered dear gorilla koala
                                        depending and much yikes off far quetzal goodness and from for grimaced
                                          goodness unaccountably and meadowlark near unblushingly crucial scallop 
                                          tightly neurotic hungrily some and dear furiously this apart.
                                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on 
                                        spoon-fed that alas rethought much decently richly and wow against the frequent fluidly 
                                        at formidable acceptably flapped besides and much circa far over the bucolically hey 
                                        precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                   </p>

                                </div>

                              </div>
                              <div className="card p-4 reviewscard flex-row">
                                 <div className="image">
                                 <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png"/>
                                 </div>
                                 <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                                </div>


                                <div className="info pl-5">
                                  <div className="datedes">
                                  <h5 className='text-light'>December 4, 2022 at 3:12 pm</h5>
                                  < Rating name='half-rating-read' defaultValue={2.5} precision={0.5}
                                  readOnly/>

                                  </div>
                                  <p>
                                        Uninhibited carnally hired played in whimpered dear gorilla koala
                                        depending and much yikes off far quetzal goodness and from for grimaced
                                          goodness unaccountably and meadowlark near unblushingly crucial scallop 
                                          tightly neurotic hungrily some and dear furiously this apart.
                                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on 
                                        spoon-fed that alas rethought much decently richly and wow against the frequent fluidly 
                                        at formidable acceptably flapped besides and much circa far over the bucolically hey 
                                        precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                   </p>

                                </div>

                              </div>
                              <div className="card p-4 reviewscard flex-row">
                                 <div className="image">
                                 <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png"/>
                                 </div>
                                 <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                                </div>


                                <div className="info pl-5">
                                  <div className="datedes">
                                  <h5 className='text-light'>December 4, 2022 at 3:12 pm</h5>
                                  < Rating name='half-rating-read' defaultValue={2.5} precision={0.5}
                                  readOnly/>

                                  </div>
                                  <p>
                                        Uninhibited carnally hired played in whimpered dear gorilla koala
                                        depending and much yikes off far quetzal goodness and from for grimaced
                                          goodness unaccountably and meadowlark near unblushingly crucial scallop 
                                          tightly neurotic hungrily some and dear furiously this apart.
                                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on 
                                        spoon-fed that alas rethought much decently richly and wow against the frequent fluidly 
                                        at formidable acceptably flapped besides and much circa far over the bucolically hey 
                                        precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                   </p>

                                </div>

                              </div>
                              <div className="card p-4 reviewscard flex-row">
                                 <div className="image">
                                 <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png"/>
                                 </div>
                                 <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                                </div>


                                <div className="info pl-5">
                                  <div className="datedes">
                                  <h5 className='text-light'>December 4, 2022 at 3:12 pm</h5>
                                  < Rating name='half-rating-read' defaultValue={2.5} precision={0.5}
                                  readOnly/>

                                  </div>
                                  <p>
                                        Uninhibited carnally hired played in whimpered dear gorilla koala
                                        depending and much yikes off far quetzal goodness and from for grimaced
                                          goodness unaccountably and meadowlark near unblushingly crucial scallop 
                                          tightly neurotic hungrily some and dear furiously this apart.
                                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on 
                                        spoon-fed that alas rethought much decently richly and wow against the frequent fluidly 
                                        at formidable acceptably flapped besides and much circa far over the bucolically hey 
                                        precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                   </p>

                                </div>

                              </div>
                              
                              <br />
                              <br />



                              <form className='reviewform'>
                                <h4>Add a review</h4><br />

                                <div className="form-group">
                                <textarea placeholder='Write a Review' name="" id="" cols="30" rows="10" className='form-control '>

                                </textarea>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input placeholder='Name'  type="text" className='form-control' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input placeholder='Emaile'  type="text" className='form-control' />
                                    </div>
                                  </div>


                                  <div className="form-group">
                                      <input type="text" className='form-control' placeholder='Website'  />
                                    </div>
<br />
                                    <div className="form-group">
                                      <Button className='btn-g btn-lg'> Submit Review</Button>

                                    </div>

                                </div>

                              </form>









                          </div>
                          <div className='col-md-4 par'>
                            <h4>Customer reviews</h4>
                            <br />
                            <div className="d-flex align-items-center mt-2">
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> 
                            <strong className='ml-3'>4.8 out of 5</strong>
                            </div>
                            <br />

                               <div className='progressbox d-flex aligin-items-center'>
                                <span className='mr-3 spa'>5 star</span>
                                  <div class="progress" style={{ width: '85%', height: '20px' }}>
                                      <div class="progress-bar bg-success" style={{ width: '75%', height: '20px' }}>75%</div>
                                  </div>
                                </div>
                                <div className="progressbox d-flex align-items-center">
                                                <span className='mr-3 spa'>4 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '50%', height: '20px' }}>50%</div>
                                                </div>
                                            </div>



                                            <div className="progressbox d-flex align-items-center">
                                                <span className='mr-3 spa'>3 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '55%', height: '20px' }}>55%</div>
                                                </div>
                                            </div>



                                            <div className="progressbox d-flex align-items-center">
                                                <span className='mr-3 spa'>2 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '35%', height: '20px' }}>35%</div>
                                                </div>
                                            </div>



                                            <div className="progressbox d-flex align-items-center">
                                                <span className='mr-3 spa'>1 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '25%', height: '20px' }}>25%</div>
                                                </div>
                                            </div>

                           </div>




                        </div>

                      </div>
}

                  </div>

              </div>

           <br />

              <div className="relatedproducts pt-5 pb-4">
              <h2 class="hd mb-0 mt-0">Related products</h2>   
              <br />
                <Slider  {...related} className='prodSlider' >
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
    </section>
  )
}

export default Details