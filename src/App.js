import { createContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/listing/Listing";
import TopPro from "./Pages/Home/toppro/TopPro";
import NotFound from "./Pages/NoutFound/NotFound";
import Details from "./Pages/Details/Details";
import axios from "axios";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/signIUp/SignUp";
import Signin from "./Pages/signIn/SignUp";
const Mycontext =createContext();

function App() {
  const [productData, setproductData] = useState([]);
  const [cartItems,setcartItems] = useState([])
  useEffect(() => {
    getData("http://localhost:5000/productData");

  }, []);
 

  const getData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setproductData(response.data);
      });
    } catch (error) {
      console.log(error.massage);
    }
  }


  const addToCart= async(item)=>{
    item.quantity = 1
    try{
      await axios.post("http://localhost:5000/cartItems",item).then((res)=>{
        if(res !== undefined){
          setcartItems([
            ...cartItems,
            {
              ...item,
              quantity:1
            }
          ])
        }
      })


    }catch(error){
      console.log(error.massage);

    }
  }

 const value ={
  addToCart,
  cartItems,
  /* removeItemFromCart */

}
/* const removeItemFromCart = (id)=>{
  const arr=cartItems.filter((obj)=> obj.id !== id);
  setcartItems(arr)
} */
 
  return (
    productData.length !== 0 && (
      <BrowserRouter>
      <Mycontext.Provider value={value}>
        <Header data={productData} cartItemsCount={cartItems.length}/>
        <Routes>
          <Route exact={true} path="/" element={<Home data={productData}/>} />
          <Route exact={true} path="/cat/:id" element={<Listing data={productData} single={true}/>} />
          <Route exact={true} path="/cat/:id/:id" element={<Listing data={productData} single={false}/>} />
          <Route exact={true} path="/product/:id" element={<Details data={productData}/>}  />
          <Route exact={true} path="*" element={<NotFound />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
          <Route exact={true} path="/signin" element={<Signin />} />

        </Routes>
        <TopPro />

      </Mycontext.Provider>  
      </BrowserRouter>
    )
  );
}

export default App;
export {Mycontext};
