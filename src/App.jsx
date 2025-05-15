import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import BrowseVehicle from '../Components/BrowseVehicle';
import Rentyourvehicle from '../Components/Rentyourvehicle';
import RentPage from '../Components/RentPage';
import CartPage from '../Components/CartPage'; 
import {CartProvider} from "../Components/CartContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
         <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/vehicle" element={<BrowseVehicle />} />
          <Route path="/rent-out" element={<Rentyourvehicle />} />
          <Route path="/rent">
          <Route index element={<RentPage />} />//nasted route
          <Route path=":vehicleId" element={<RentPage />} />
        </Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
       


      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;
