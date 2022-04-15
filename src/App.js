import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Booking from './Pages/Booking/Booking';
import NotFound from './Pages/NotFound/NotFound';
import Places from './Pages/Places/Places';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/places' element={<Places></Places>}></Route>
        <Route path='/booking/:placeID' element={<Booking></Booking>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
