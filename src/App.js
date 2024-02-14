import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';



function App() {
  return (
 <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path='/' element={<Home/>}/>
      <Route exact={true} path='/liststing' element={<About/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
