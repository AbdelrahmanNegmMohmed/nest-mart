import React from 'react'
import "./Footer.css"
import icon1 from "../../Assest/Images/icon/icon-1.svg"
import icon2 from "../../Assest/Images/icon/icon-2.svg"
import icon3 from "../../Assest/Images/icon/icon-3.svg"
import icon4 from "../../Assest/Images/icon/icon-4.svg"
import icon5 from "../../Assest/Images/icon/icon-5.svg"
import logo from "../../Assest/Images/logo (1).svg"
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import appstore from "../../Assest/Images/icon/app-store.jpg"
import googleplay from "../../Assest/Images/icon/google-play.jpg"
import payment from "../../Assest/Images/icon/payment-method.png"
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='footerWrapper'>
        <div className="footerboxes">
            <div className="container-fluid">
                <div className="row">
                    <div className='col'>
                        <div className="box d-flex align-items-center w-100 ">
                            <span><img src={icon1} alt="" /></span>
                            <div className='info'>
                                <h4>Best prices & offers</h4>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={icon2} alt="" /></span>
                            <div className='info'>
                                <h4>Free delivery</h4>
                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={icon3} alt="" /></span>
                            <div className='info'>
                                <h4>Great daily deal</h4>
                                <p>When you sign up</p>

                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={icon4} alt="" /></span>
                            <div className='info'>
                                <h4>Wide assortment</h4>
                                <p>Mega Discounts</p>

                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="box d-flex align-items-center w-100 ">
                            <span><img src={icon5} alt="" /></span>
                            <div className='info'>
                                <h4>Easy returns</h4>
                                <p>Within 30 days</p>

                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>



    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 part1">
                    <Link> <img src={logo} alt="" /></Link>
                    <br /> <br />
                    <p>Awesome grocery store website template</p>
                    <br />
                    <p><LocationOnOutlinedIcon/><strong>Address</strong>: 5171 W Campbell Ave<br /> undefined Kent, Utah 53127 United States</p>
                    <p> <HeadphonesOutlinedIcon/><strong>Call Us</strong>:(+91) - 540-025-124553</p>
                    <p><EmailOutlinedIcon/><strong>Email</strong>:sale@Nest.com</p> 
                    <p><WatchLaterOutlinedIcon/><strong>Hours</strong>:10:00 - 18:00, Mon - Sat</p>                   
                </div>




                <div className="col-md-6 part2">
                    <div className="row">
                        <div className="col">
                            <h3>Company</h3>
                            <ul className='footer-list mb-sm-5 mb-md-0'>
                                <li><Link>Company</Link></li>
                                <li><Link>About Us</Link></li>
                                <li><Link>Delivery Information</Link></li>
                                <li><Link>Privacy Policy</Link></li>
                                <li><Link>Terms & Conditions</Link></li>
                                <li><Link>Contact Us</Link></li>
                                <li><Link>Support Center</Link></li>
                                <li><Link>Careers</Link></li>
                                

                            </ul>
                        </div>
                        <div className='col'>
                                        <h3>Account</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Account</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                        </div>
                        <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                        </div>
                        <div className='col'>
                                        <h3>Popular</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                        </div>         
                    </div>
                </div>


                <div className="col-md part3">
                    <h3>Install App</h3>
                    <br/>
                    <p>From App Store Or Google Play</p>

                    <div className='d-flex apdis'>
                        <Link><img src={appstore}alt="" /></Link>
                        <Link><img src={googleplay} alt=""  className='mx2'/></Link>
                    </div>
                    <br />
                    <p>Secured Payment Gateways</p>
                    <img src={payment} alt="" />



                </div>
            </div>

            <hr />
            <div className='row laststrip'>
                <div className="col-md-3">
                    <p><strong> Nest </strong>- HTML Ecommerce Template, © 2022<br/> All rights reserved</p>


                </div>
                <div className="col-md-6 d-flex">
                    <div className='m-auto d-flex align-items-center'>
                    <div className='phNoon d-flex align-items-center mx-5'>
                            <span><HeadsetMicIcon/></span>
                            <div className="info ml-3">
                            <h3 className='text-g mb-0'>1900 - 888</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                        </div>
                    </div>
                    <div className='phNoon d-flex align-items-center mx-5'>
                            <span><HeadsetMicIcon/></span>
                            <div className="info ml-3">
                            <h3 className='text-g mb-0'>1900 - 888</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                        </div>
                    </div>
                    </div>                    
                </div>
                <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link to={''}><FacebookOutlinedIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><TwitterIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><InstagramIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><YouTubeIcon /></Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>
            </div>
        </div>
    </footer>
        
    </div>
  )
}

export default Footer;





