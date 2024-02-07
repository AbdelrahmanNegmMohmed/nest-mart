import React from 'react'
import "./SelectDrop.css"

const SelectDrop = () => {
  return (
    <div className="selectdrop cursor position-relative">
        <span className='openselect'> All Categories</span>
    <div className="SelectDrop">
        <div className="searchfield">
            <input type="text" />          
        </div>
        <ul className='searchresults'>
                <li>Milks and Dairies</li>
                <li>Wines & Drinks </li>
                <li>Clothing & beauty</li>
                <li>Fresh Seafood</li>
                <li>Pet Foods & Toy</li>
                <li>Fast Food</li>
                <li>Baking material</li>
                <li>Vegetables</li>
                <li>Fresh Fruit</li>
                <li>Bread And Juice</li>
                <li>Milks and Dairies</li>
                <li>Wines & Drinks</li>
                <li>Clothing & beauty</li>
                <li>Wines & Drinks</li>
                <li>Fresh Seafood</li>
            </ul>
        
     </div>
  </div>
  
  )
}

export default SelectDrop