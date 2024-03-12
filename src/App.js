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
 


const Mycontext =createContext();

function App() {
  const [productData, setproductData] = useState([]);
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
  };
 const value ={

}
 
  return (
    productData.length !== 0 && (
      <BrowserRouter>
      <Mycontext.Provider value={value}>
        <Header data={productData}/>
        <Routes>
          <Route exact={true} path="/" element={<Home data={productData}/>} />
          <Route exact={true} path="/cat/:id" element={<Listing data={productData} single={true}/>} />
          <Route exact={true} path="/cat/:id/:id" element={<Listing data={productData} single={false}/>} />
          <Route exact={true} path="/product/:id" element={<Details data={productData}/>}  />
          <Route exact={true} path="*" element={<NotFound />} />
          <Route exact={true} path="/cart" element={<Cart />} />

        </Routes>
        <TopPro />

      </Mycontext.Provider>  
      </BrowserRouter>
    )
  );
}

export default App;
