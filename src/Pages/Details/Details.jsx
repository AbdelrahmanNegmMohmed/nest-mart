import React, { useEffect, useState } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Product from "../../components/Product/Product";
import axios from "axios";
import QuantityBox from "../../components/quantityBox/QuantityBox";
 

const Details = (props) => {
  const [currentproduct, setcurrentproduct] = useState([]);
  const [zoomImage, setzoomImage] = useState(
    "https://nest-frontend-rtl.netlify.app/assets/imgs/shop/product-10-1.jpg"
  );
  const goto = (url, index) => {
    setzoomImage(url);
  };


  const [prodCat, setprodCat] = useState({
    parentCat: sessionStorage.getItem("parentCat"),
    subCatName: sessionStorage.getItem("subCatName"),
  });
  const [relatedproducts, setrelatedproducts] = useState([]);
  let { id } = useParams();

  const [activesie, setactivesie] = useState(0);
  const isActive = (index) => {
    setactivesie(index);
  };

  const [inputvalue, setinputvalue] = useState(1);
  const plus = () => {
    setinputvalue(inputvalue + 1);
  };
  const minus = () => {
    if (inputvalue != 1) {
      setinputvalue(inputvalue - 1);
    }
  };
  const arr = [];
  useEffect(() => {
    props.data.length !== 0 &&
      props.data.map((item) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            item_.products.length !== 0 &&
              item_.products.map((product) => {
                if (parseInt(product.id) === parseInt(id)) {
                  arr.push(product);
                }
              });
          });
        const list = arr.filter((item, index) => arr.indexOf(item) === index);
        setcurrentproduct(list);
      });

    //related products code
    const related_products = [];
    props.data.length !== 0 &&
      props.data.map((item) => {
        if (prodCat.parentCat === item.cat_name) {
          item.items.length !== 0 &&
            item.items.map((item2) => {
              if (prodCat.subCatName === item2.cat_name) {
                item2.products.length !== 0 &&
                  item2.products.map((product, index) => {
                    if (product.id !== parseInt(id)) {
                      related_products.push(product);
                    }
                  });
              }
            });
        }
      });
    if (related_products.length !== 0) {
      setrelatedproducts(related_products);
    }
    showReviews();
  }, [id]);

  const [activetaps, setactivetaps] = useState(0);
  const [rating,setRating]=useState(0.0);
  const [reviwesArr,setreviwesArr]=useState([])
  const [reviewFields,setreviewFields] = useState({
    review:'',
    UserName:'',
    rating:0.0,
    productId:0 ,
    date:''


  })



  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  var related = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
  };

  

  const changeInput=(name , value)=>{
    if(name==="rating"){
      setRating(value)

    }
    setreviewFields(()=>({
      ...reviewFields,
      [name]: value,
      productId:id,
      date:new Date().toLocaleString()

    }))
  
  
  }
  const reviews_Arr = []
  const submitReview=async(e)=>{
    e.preventDefault();
    try{
     await axios.post("http://localhost:5000/productReviews",reviewFields).then((response)=>{
    reviews_Arr.push(response.data)
    setreviewFields(()=>({
      review:'',
      UserName:'',
      rating:0.0,
      productId:0,
      date:''


    }))
     })

    }catch(error){
      console.log(error.message);
    }
    showReviews()
  }

  const reviews_Arr2 =[]
  const showReviews=async()=>{
    try{
      await axios.get("http://localhost:5000/productReviews").then((response)=>{
        if(response.data.length !==0){
          response.data.map((item)=>{
            if(parseInt(item.productId)===parseInt(id)){
              reviews_Arr2.push(item)
            }

          })
        }
      })

    }catch(error){
      console.log(error.message);
    }
    if(reviews_Arr2.length !== 0 ){
      setreviwesArr(
        reviews_Arr2)

    }

  }

  return (
    <section className="detailsPage mb-5">
      <div className="breadcrumbwrapper mb-4">
        <div className="container-fluid detailscontainer">
          <ul className=" breadcrumb  breadcrumb2 mb-0">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link
                to={`/cat/${prodCat.parentCat
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                onClick={() => {
                  sessionStorage.setItem(
                    "cat",
                    prodCat.parentCat.split(" ").join("-").toLowerCase()
                  );
                }}
                className="text-capitalize"
              >
                {prodCat.parentCat}
              </Link>
            </li>

            <li>
              <Link
                to={`/cat/${prodCat.parentCat.toLowerCase()}
                    /${prodCat.subCatName.replace(/\s/g, "-").toLowerCase()}`}
                onClick={() => {
                  sessionStorage.setItem(
                    "cat",
                    prodCat.subCatName.toLowerCase()
                  );
                }}
                className="text-capitalize"
              >
                {prodCat.subCatName}
              </Link>
            </li>
            {currentproduct.map((item) => {
              return <li>{item.productName}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="container cont detailscontainer pt-3 pb-3">
        <div className="row">
          {/* productzoom code start here */}
          <div className="col-md-5 ">
            <div className="productzoom">
              {currentproduct.length !== 0 &&
                currentproduct.map((item) => {
                  return (
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={2}
                      src={item.catImg}
                    />
                  );
                })}
            </div>
            <Slider {...settings} className="zoomslider">
              {currentproduct.length !== 0 &&
                currentproduct.map((item, index) => {
                  item.productImages.length !== 0 &&
                    item.productImages.map((img) => {
                      return (
                        <div className="item" key={index}>
                          <img
                            src={img}
                            className="w-100"
                            onClick={() => goto(index)}
                          />
                        </div>
                      );
                    });
                })}
            </Slider>
          </div>
          {/* productinfo code end here */}

          {/* productzoom code start here */}
          {currentproduct.length !== 0 &&
            currentproduct.map((item) => {
              return (
                <div className="col-md-7 productinfo pl-5">
                  <h1>{item.productName}</h1>
                  <div className=" productinfo-rate  mb-4">
                    <Rating
                      name="half-rating-read"
                      defaultValue={parseFloat(item.rating)}
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-light">(32 reviews)</span>
                  </div>
                  <div className="pricesection d-flex align-items-center mb-3">
                    <span className="text-g pricelarge">EGP {item.price}</span>
                    <div className="ml-2 pr">
                      <span className="text-org">{item.discount}% off</span>
                      <span className="text-light oldprice">
                        EGP {item.oldPrice}
                      </span>
                    </div>
                  </div>
                  <p className="text-light">{item.description}</p>
                  <br />
                  <br />
                  {currentproduct.length !== 0 &&
                    currentproduct.map((item) => {
                      if (
                        item.weight !== undefined &&
                        item.weight.length !== 0
                      ) {
                        return (
                          <div className="productsize d-flex align-items-center">
                            <span>Size / Weight :</span>
                            <ul className="lit list-inline mb-0 pl-4">
                              {item.weight.map((item_, index) => {
                                return (
                                  <li className="list-inline-item">
                                    <a
                                      className={` tag ${
                                        activesie === index ? "active" : ""
                                      }`}
                                      onClick={() => isActive(index)}
                                    >
                                      {item_} g
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })}
                  {currentproduct.length !== 0 &&
                    currentproduct.map((item) => {
                      if (item.RAM !== undefined && item.RAM.length !== 0) {
                        return (
                          <div className="productsize d-flex align-items-center">
                            <span>RAM :</span>
                            <ul className="lit list-inline mb-0 pl-4">
                              {item.RAM.map((RAM, index) => {
                                return (
                                  <li className="list-inline-item">
                                    <a
                                      className={` tag ${
                                        activesie === index ? "active" : ""
                                      }`}
                                      onClick={() => isActive(index)}
                                    >
                                      {RAM} GB
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })}
                  {currentproduct.length !== 0 &&
                    currentproduct.map((item) => {
                      if (item.SIZE !== undefined && item.SIZE.length !== 0) {
                        return (
                          <div className="productsize d-flex align-items-center">
                            <span>SIZE :</span>
                            <ul className="lit list-inline mb-0 pl-4">
                              {item.SIZE.map((SIZE, index) => {
                                return (
                                  <li className="list-inline-item">
                                    <a
                                      className={` tag ${
                                        activesie === index ? "active" : ""
                                      }`}
                                      onClick={() => isActive(index)}
                                    >
                                      {SIZE}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })}
                    <div className="d-flex align-items-center">
                      <div >
                           <QuantityBox/>

                      </div>
                  <div className="d-flex align-items-center ml-3" style={{paddingLeft:"20px"}}>
                    
                    <Button className="btn-g btn-lg addtocartbtn">
                      <ShoppingCartOutlinedIcon />
                      Add to cart
                    </Button>
                    <Button className="move btn-lg btn-lg addtocartbtn ml-3  btn-border">
                      <FavoriteBorderOutlinedIcon />
                    </Button>
                    <Button className="move btn-lg btn-lg addtocartbtn ml-3  btn-border">
                      <CompareArrowsIcon />
                    </Button>
                  </div>

                    </div>
                </div>
              );
            })}
          {/* productinfo code end here */}
        </div>
        <div className="card mt-5 p-5 detailspagetap">
          <div className="customtaps">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button
                  className={`${activetaps === 0 && "active"}`}
                  onClick={() => setactivetaps(0)}
                >
                  Discription
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activetaps === 1 && "active"}`}
                  onClick={() => setactivetaps(1)}
                >
                  Additional info
                </Button>
              </li>
              <li className="list-inline-item">
                <Button>Vendor</Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activetaps === 2 && "active"}`}
                  onClick={() => setactivetaps(2)}
                >
                  Reviews (3)
                </Button>
              </li>
            </ul>

            <br />

            {activetaps === 0 && (
              <div className="tapcontant">
                {currentproduct.map((item) => {
                  return <p>{item.description}</p>;
                })}

                <br />
                {/*     <h1>Packaging & Delivery</h1>
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart. Spluttered narrowly yikes left
                  moth in yikes bowed this that grizzly much hello on spoon-fed
                  that alas rethought much decently richly and wow against the
                  frequent fluidly at formidable acceptably flapped besides and
                  much circa far over the bucolically hey precarious goldfinch
                  mastodon goodness gnashed a jellyfish and one however because.
                </p> */}
                <br />
              </div>
            )}
            {activetaps === 1 && (
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
            )}

            <h3>Customer questions & answers</h3>
             {
              reviwesArr.length !== 0 && reviwesArr !== undefined &&
                reviwesArr.map((review,index)=>{
                  return(
                    <div className="card p-4 reviewscard flex-row" key={index} >
                              <div className="image"> 
                                <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png" />
                                </div>
                                <span className="text-g d-block text-center font-weight-bold">
                                  {review.UserName}
                                </span>
                              </div>
        
                              <div className="info pl-5">
                                <div className="datedes">
                                  <h5 className="text-light">
                                    {review.date}
                                  </h5>
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={parseFloat(review.rating)}
                                    precision={0.5}
                                    readOnly
                                    />
                                </div>
                               
                                    <p>{review.review}</p>
                               
                              </div>
                    </div>

                  )
                })
            } 
                 {/*    <div className="card p-4 reviewscard flex-row" >
                              <div className="image"> 
                                <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png" />
                                </div>
                                <span className="text-g d-block text-center font-weight-bold">
                                  Sienna
                                </span>
                              </div>
        
                              <div className="info pl-5">
                                <div className="datedes">
                                  <h5 className="text-light">
                                    December 4, 2022 at 3:12 pm
                                  </h5>
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                    />
                                </div>
                               
                                    <p>helllo</p>
                               
                              </div>
                    </div>
                    <div className="card p-4 reviewscard flex-row" >
                              <div className="image"> 
                                <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png" />
                                </div>
                                <span className="text-g d-block text-center font-weight-bold">
                                  Sienna
                                </span>
                              </div>
        
                              <div className="info pl-5">
                                <div className="datedes">
                                  <h5 className="text-light">
                                    December 4, 2022 at 3:12 pm
                                  </h5>
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                    />
                                </div>
                               
                                    <p>helllo</p>
                               
                              </div>
                    </div>
                    <div className="card p-4 reviewscard flex-row" >
                              <div className="image"> 
                                <div className="rounded-circle">
                                  <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/blog/author-2.png" />
                                </div>
                                <span className="text-g d-block text-center font-weight-bold">
                                  Sienna
                                </span>
                              </div>
        
                              <div className="info pl-5">
                                <div className="datedes">
                                  <h5 className="text-light">
                                    December 4, 2022 at 3:12 pm
                                  </h5>
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                    />
                                </div>
                               
                                    <p>helllo</p>
                               
                              </div>
                    </div> */}
 
            {activetaps === 2 && (
              <div className="tapcontant">
                <div className="row">
                  <div className="col-md-8">
                    <br />
                    <br />

                    <form className="reviewform" onSubmit={submitReview}>
                      <h4>Add a review</h4>
                      <br />

                      <div className="form-group">
                        <textarea
                          placeholder="Write a Review"
                          name="review"
                          id=""
                          value={reviewFields.review}
                          cols="30"
                          rows="10"
                          className="form-control "
                          onChange={(e)=>changeInput(e.target.name , e.target.value)}
                          

                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              placeholder="Name"
                              type="text"
                              value={reviewFields.name}
                              className="form-control"
                              name="UserName"
                              onChange={(e)=>changeInput(e.target.name , e.target.value)}
                                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                          <Rating name="rating"
                           Value={rating}
                          precision={0.5}
                          onChange={(e)=>changeInput(e.target.name , e.target.value)}

                        
                          />

                          </div>
                        </div>

                     {/*    <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Website"
                          />
                        </div> */}
                        <br />
                        <div className="form-group">
                          <Button className="btn-g btn-lg" type="submit">
                            {" "}
                            Submit Review
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4 par">
                    <h4>Customer reviews</h4>
                    <div className="d-flex align-items-center mt-2">
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <strong className="ml-3">4.8 out of 5</strong>
                    </div>
                    <br />

                    <div className="progressbox d-flex aligin-items-center">
                      <span className="mr-3 spa">5 star</span>
                      <div
                        class="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          style={{ width: "75%", height: "20px" }}
                        >
                          75%
                        </div>
                      </div>
                    </div>
                    <div className="progressbox d-flex align-items-center">
                      <span className="mr-3 spa">4 star</span>
                      <div
                        class="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          style={{ width: "50%", height: "20px" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>

                    <div className="progressbox d-flex align-items-center">
                      <span className="mr-3 spa">3 star</span>
                      <div
                        class="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          style={{ width: "55%", height: "20px" }}
                        >
                          55%
                        </div>
                      </div>
                    </div>

                    <div className="progressbox d-flex align-items-center">
                      <span className="mr-3 spa">2 star</span>
                      <div
                        class="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          style={{ width: "35%", height: "20px" }}
                        >
                          35%
                        </div>
                      </div>
                    </div>

                    <div className="progressbox d-flex align-items-center">
                      <span className="mr-3 spa">1 star</span>
                      <div
                        class="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          style={{ width: "25%", height: "20px" }}
                        >
                          25%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <br />

        <div className="relatedproducts pt-5 pb-4">
          <h2 class="hd mb-0 mt-0">Related products</h2>
          <br />
          <Slider {...related} className="prodSlider">
            {relatedproducts.length !== 0 &&
              relatedproducts.map((product, index) => {
                return (
                  <div className="item d-flex" key={index}>
                    <Product col={product.type} item={product} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Details;
