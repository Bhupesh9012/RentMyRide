
import BrowseVehicle from '../Components/BrowseVehicle'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Navbar from '../Components/Navbar'
import Rentyourvehicle from '../Components/Rentyourvehicle'
import Services from '../Components/Services'
import Signup from '../Components/Signup'
import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/log-in" element={<Login/>} /> 
        <Route path="/sign-up" element={<Signup/>} /> 
        <Route path="/destination" element={<search/>} /> 
        <Route path="/vehicle" element={<BrowseVehicle/>} /> 
        <Route path="/rent-out" element={<Rentyourvehicle/>}/> 
        </Routes>
      
    

     
      </BrowserRouter>
 

    </div>
  )
}

export default App
