import React from 'react'
import "./Nav.css"
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import menu_banner from "../../../Assest/Images/banner-menu.png"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';




const Nav = () => {
  return (
    <div className='nav d-flex align-items-center'>
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className='bg-success text-white catTab'>
              <GridViewIcon/>
              &nbsp; Browse All Categories 
              <KeyboardArrowDownIcon/></Button>          
          </div>
          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className='list list-inline mb-0'>
                <li className='list-inline-item'>
                  <Button><Link>Home <KeyboardArrowDownIcon/></Link></Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li><Button><Link to="/about">Home1</Link></Button></li>
                      <li><Button><Link to="/about">Home2</Link></Button></li>
                      <li><Button><Link to="/about">Home3</Link></Button></li>
                      <li><Button><Link to="/about">Home4</Link></Button></li>
                      <li><Button><Link to="/about">Home5</Link></Button></li>
                      <li><Button><Link to="/about">Home6</Link></Button></li>
         
                    </ul>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>About</Link></Button>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>Shop <KeyboardArrowDownIcon/></Link></Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li><Button><Link to="/about">Shop Grid – Right Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop Grid – Left Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop List – Right Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop List – Left Sidebar</Link></Button></li>
                      <li><Button><Link to="/about">Shop - Wide</Link></Button></li>
                      <li><Button><Link to="/about">Single Product </Link></Button></li>
                      <li><Button><Link to="/about">Shop – Filter</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Wishlist</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Cart</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Checkout</Link></Button></li>
                      <li><Button><Link to="/about">Shop – Compare</Link></Button></li>
                      <li><Button><Link to="/about">Shop Invoice</Link></Button></li>
         
                    </ul>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>Vendors <KeyboardArrowDownIcon/></Link></Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li><Button><Link to="/about">Vendors Grid</Link></Button></li>
                      <li><Button><Link to="/about">Vendors List</Link></Button></li>
                      <li><Button><Link to="/about">Vendor Details 01</Link></Button></li>
                      <li><Button><Link to="/about">Vendor Details 02</Link></Button></li>
                      <li><Button><Link to="/about">Vendor Dashboard</Link></Button></li>
                      <li><Button><Link to="/about">Vendor Gudie</Link></Button></li>
               
         
                    </ul>
                  </div>
                </li>
                <li className='list-inline-item position-static'>
                  <Button><Link>Mega menu <KeyboardArrowDownIcon/></Link></Button>
                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h4 className='text-g'>Fruit & Vegetables</h4>
                        <ul className='mt-28'>
                          <li><Link to="">Meat & Poultry</Link></li>
                          <li><Link to="">Fresh Vegetables</Link></li>
                          <li><Link to="">Herbs & Seasonings</Link></li>
                          <li><Link to="">Cuts & Sprouts</Link></li>
                          <li><Link to="">Exotic Fruits & Veggies</Link></li>
                          <li><Link to="">Packaged Produce</Link></li>

                        </ul>
                   

                      </div>
                      <div className="col">
                        <h4 className='text-g'>Breakfast & Dairy</h4>
                        <ul className='mt-28'>
                        <li><Link to="">Milk & Flavoured Milk</Link></li>
                        <li><Link to="">Butter and Margarine</Link></li>
                        <li><Link to="">Eggs Substitutes</Link></li>
                        <li><Link to="">Marmalades</Link></li>
                        <li><Link to="">Sour Cream</Link></li>
                        <li><Link to="">Cheese</Link></li>

                        </ul>
                      </div>
                      <div className="col">
                        <h4 className='text-g'>Meat & Seafood</h4>
                        <ul className='mt-28'>
                          <li><Link to="">Breakfast Sausage</Link></li>
                          <li><Link to="">Dinner Sausage</Link></li>
                          <li><Link to="">Chicken</Link></li>
                          <li><Link to="">Sliced Deli Meat</Link></li>
                          <li><Link to="">Wild Caught Fillets</Link></li>
                          <li><Link to="">Crab and Shellfish</Link></li>
                        </ul>
                      </div>
                      <div className="col">
                        <img className='w-100 h-100' src={menu_banner} alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>Blog <KeyboardArrowDownIcon/></Link></Button>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>Pages <KeyboardArrowDownIcon/></Link></Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li><Button><Link to="/about">About Us</Link></Button></li>
                      <li><Button><Link to="/about">Contact</Link></Button></li>
                      <li><Button><Link to="/about">My Account</Link></Button></li>
                      <li><Button><Link to="/about">Login</Link></Button></li>
                      <li><Button><Link to="/about">Register</Link></Button></li>
                      <li><Button><Link to="/about">Forget Password</Link></Button></li>
                      <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                      <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                      <li><Button><Link to="/about">Term Of Service</Link></Button></li>
                      <li><Button><Link to="/about">404 Page</Link></Button></li>
                    </ul>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>Contact</Link></Button>
                </li>
                <li className='list-inline-item'>
                  <Button><Link>Deals<LocalFireDepartmentIcon/></Link></Button>
                </li>
              </ul>

            </nav>

          </div>
          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className='phNo d-flex align-items-center'>
             <span><HeadsetMicIcon/></span>
             <div className="info ml-3">
              <h3 className='text-g mb-0'>1900 - 888</h3>
              <p className='mb-0'>24/7 Support Center</p>

             </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Nav