import React from 'react'
import "./Header.css"
import logo from "../../Assest/Images/logo (1).svg"
import SearchIcon from '@mui/icons-material/Search';
import SelectDrop from '../SelectDrop/SelectDrop';

const Header = () => {
  return (
    <>
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className='col-sm-2'>
            <img src={logo} alt="" />
          </div>
{/* headersearch start here*/ }
             <div className="col-sm-5">
             <div className="headersearch d-flex align-items-center">
             <SelectDrop/>
                  <div className="search">
                        <input type="text" placeholder='Search For items...' />
                        <SearchIcon className='searchicon cursor'/>
                  </div>
              </div>
             </div>
    
{/* headersearch end here*/ }

        </div>
      </div>
      
      </header>
      </>
  )
}

export default Header