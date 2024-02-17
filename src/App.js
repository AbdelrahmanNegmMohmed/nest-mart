import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Listing from './Pages/listing/Listing';
import Footer from './components/footer/Footer';
import TopPro from './Pages/Home/toppro/TopPro';
import NotFound from './Pages/NoutFound/NotFound';
import Details from './Pages/Details/Details';


function App() {
  return (
 <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path='/' element={<Home/>}/>
      <Route exact={true} path='/listing' element={<Listing/>}/>
      <Route exact={true} path='/product/details' element={<Details/>}/>
      <Route exact={true} path='*' element={<NotFound/>}/>
    </Routes>
    <TopPro/>
 </BrowserRouter>
  );
}

export default App;
