import React, { useState } from 'react'
import "./SelectDrop.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';




const Select = ({props,placeholder,icon}) => {


    const[isopenSelect,setisopenSelect]=useState(false)   
    const[slectedIndex,setslectedIndex]=useState(0)
    const[selectItems,setselectItems]=useState(placeholder)

    const[listDta,setlistData]=useState(props)
    const[listDta2,setlistData2]=useState(props)
    


    const openSelect=()=>{
        setisopenSelect(!isopenSelect)
    }
    const closSelect=(index,item)=>{
        setslectedIndex(index)
        setisopenSelect(false)
        setselectItems(item)

    }
    const felterList=(e)=>{
        const keyword =e.target.value.toLowerCase();
        const list =listDta2.filter((item)=>{

            return item.toLowerCase().includes(keyword)
        })
        const list2=list.filter((item,index)=>list.indexOf(item)===index)
        setlistData(list2)

    }




  return (
    <ClickAwayListener onClickAway={()=>setisopenSelect(false)}>
         <div className="celectDropWrapper posttion-relative ">
            {icon}

   <span className='openSelect' onClick={openSelect}>{selectItems.length>14?selectItems.substr(0,14)+'....':selectItems} <KeyboardArrowDownIcon className='arrow'/></span> 
   {isopenSelect===true &&
     <div className='selectDrop'>
     <div className="searchField">
        <input type="text" placeholder='search here...' onChange={felterList} />
     </div>
     <ul className='searchResults'>
     <li key={0} onClick={()=>closSelect(0,placeholder)} className={`${slectedIndex === 0?"active":""}`}>{placeholder}</li>

        {listDta.map((item,index)=>{
            return( 
                <li key={index+1} onClick={()=>closSelect(index+1,item)} className={`${slectedIndex === index+1?"active":""}`}>{item}</li>
            )
        })}

     </ul>

 </div>

   }
   
  {/*   <div className='selectDrop'>
        <div className="searchField">
            <input type="text" />
        </div>
            <ul className='searchResults'>
                <li>Milks and Dairies</li>
                <li>Wines & Alcohol</li>
                <li>Clothing & Beauty</li>
                <li>Pet Foods & Toy</li>
                <li>Fast food</li>
                <li>Baking material</li>
                <li>Vegetables</li>
                <li>Fresh Seafood</li>
                <li>Noodles & Rice</li>
                <li>Ice cream</li>
                
            </ul>
    </div> */}
    </div>

        </ClickAwayListener>
   
  )
}

export default Select