import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';



function App() {
  return (
 <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path='/' element={<Home/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
