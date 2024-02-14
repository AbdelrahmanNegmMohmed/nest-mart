import React from 'react'
import "./TopProducts.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

import img1 from "../../../Assest/Images/topproduct/thumbnail-1.jpg"
import img2 from "../../../Assest/Images/topproduct/thumbnail-2.jpg"
import img3 from "../../../Assest/Images/topproduct/thumbnail-3.jpg"

const TopProducts = (props) => {
  return (
    <div>
        <div className="topselling_box">
            <h3>{props.title}</h3>


            <div className="items d-flex align-items-center">
                <div className="img">
            <Link>
                    <img src={img1} alt=""  className='w-100'/>
            </Link>
                </div>            
                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className='d-flex aligin-items-center'>
                                <span className='pricre text-g font-weight-bold'>$28.85</span>
                                <span className='old_pricre'>$32.8</span>
                        </div>




                    </div>

            </div>
            <div className="items d-flex align-items-center">
                <div className="img">
            <Link>
                    <img src={img1} alt=""  className='w-100'/>
            </Link>
                </div>            
                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className='d-flex aligin-items-center'>
                                <span className='pricre text-g font-weight-bold'>$28.85</span>
                                <span className='old_pricre'>$32.8</span>
                        </div>




                    </div>

            </div>
            <div className="items d-flex align-items-center">

                <div className="img">
            <Link>
                    <img src={img1} alt=""  className='w-100'/>
            </Link>
                </div>            
                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className='d-flex aligin-items-center'>
                                <span className='pricre text-g font-weight-bold'>$28.85</span>
                                <span className='old_pricre'>$32.8</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
)
}

export default TopProducts