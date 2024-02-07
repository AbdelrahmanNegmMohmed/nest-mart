import React, { useState } from 'react'
import "./SelectDrop.css"

const SelectDrop = () => {
    const[isOpenSelect,setisOpenSelect]=useState(false)
    const openselect=()=>{
        setisOpenSelect(!isOpenSelect)
    }

  return (
    <div className="selectdrop cursor position-relative">
        <span className='openselect' onClick={openselect}> All Categories</span>
        {isOpenSelect===true &&
            <div className="SelectDrop">
            <div className="searchfield">
                <input type="text" />          
            </div>
            <ul className='searchresults'>
                    <li onClick={()=>setisOpenSelect(false)}>Milks and Dairies</li>
                    <li onClick={()=>setisOpenSelect(false)}>Wines & Drinks </li>
                    <li onClick={()=>setisOpenSelect(false)}>Clothing & beauty</li>
                    <li onClick={()=>setisOpenSelect(false)}>Fresh Seafood</li>
                    <li onClick={()=>setisOpenSelect(false)}>Pet Foods & Toy</li>
                    <li onClick={()=>setisOpenSelect(false)}>Fast Food</li>
                    <li onClick={()=>setisOpenSelect(false)}>Baking material</li>
                    <li onClick={()=>setisOpenSelect(false)}>Vegetables</li>
                    <li onClick={()=>setisOpenSelect(false)}>Fresh Fruit</li>
                    <li onClick={()=>setisOpenSelect(false)}>Bread And Juice</li>
                    <li onClick={()=>setisOpenSelect(false)}>Milks and Dairies</li>
                    <li onClick={()=>setisOpenSelect(false)}>Wines & Drinks</li>
                    <li onClick={()=>setisOpenSelect(false)}>Clothing & beauty</li>
                    <li onClick={()=>setisOpenSelect(false)}>Wines & Drinks</li>
                    <li onClick={()=>setisOpenSelect(false)}>Fresh Seafood</li>
                </ul>
            
         </div>
        
        
        }

  </div>
  
  )
}

export default SelectDrop