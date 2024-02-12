import React from 'react'
import "./Product.css"
import Rating from '@mui/material/Rating';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const Product = (props) => {
  return (
    <div className='productThumb'>
        {
            props.col!==null &&props.col!==undefined &&<span className={`badge ${props.col}`}>{props.col}</span>

        }
        <Link>
        <div className='imgWrapper'>
            <img src="https://nest-frontend-rtl.netlify.app/assets/imgs/shop/product-1-2.jpg" className='w-100' alt="" />
            <div className='overlay transition'>
               <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                    <a className='cursor '  tooltip="Add to Wishlist">
                        <FavoriteBorderOutlinedIcon/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className='cursor' tooltip="Compare">
                        <CompareArrowsOutlinedIcon/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className='cursor' tooltip="Quick View">
                        <RemoveRedEyeOutlinedIcon/>
                    </a>
                </li>

               </ul>

            </div>
        </div>        
        </Link>
        <div className='info'>
            <span className='d-block catname'>snack</span>
            <h4 className='title'><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            <span className='brand d-block text-g'> By<a className='text-g'>NestFood</a></span>


            <div className='d-flex align-items-center justify mt-3 '>
                <div className='d-flex aligin-items-center'>
                    <span className='pricre text-g font-weight-bold'>$28.85</span>
                    <span className='old_pricre'>$32.8</span>
                </div>
                     <Button className=' ml-auto transition'><ShoppingCartOutlinedIcon/>Add</Button>
            </div>

        </div>
    </div>

  )
}

export default Product;

