import React,{useEffect, useState} from 'react'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const QuantityBox = (props) => {
    const [inputvalue, setinputvalue] = useState(1);
    const [cartItems,setcartItems]=useState([]);
    useEffect(()=>{
      setcartItems(props.cartItems)
/*       setinputvalue(props.item.quantity)
 */    },[props.cartItems]);
const updateCart = (items)=>{
  props.updateCart(items)
}
/*     const plus = () => {
      setinputvalue(inputvalue + 1);
    };
    const minus = () => {
      if (inputvalue != 1) {
        setinputvalue(inputvalue - 1);
      }
    }; */
  return (
    <div className="addcartsection pt-4 pb-4 d-flex align-items-center ">
    <div className="countersec mr-3">
      <input type="number" value={inputvalue} />
      <span className="arrow plus " /* onClick={plus} */

      onClick={
        ()=>{
          setinputvalue(inputvalue+1)
          console.log(inputvalue);
          const _cart =props.cartItems?.map((cartItems,key)=>{
            return key === parseInt(props.index)?
            {
              ...cartItems,
              quantity:inputvalue+1
            }:
            {
              ...cartItems
            }
          })
          updateCart(_cart)
          setcartItems(_cart)
          
        }
      }
      
      
      >
        <KeyboardArrowUpIcon />
      </span>
      <span className="arrow minus "/*  onClick={minus} */>
        <KeyboardArrowDownIcon />
      </span>
    </div>
  </div>
  )
}

export default QuantityBox