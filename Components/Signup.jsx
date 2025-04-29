import { useState } from "react";
import{ Link } from "react-router-dom";





function SignUp() {
    const [data, setData] = useState({
      name: '',
    });
    const[password,setPassword]=useState('');
    const[Confirmpassword,setConfirmPassword]=useState('');
  
  console.log('this is the name and password', data);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
        <div className="bg-white py-12 px-12 rounded-lg shadow-lg w-96 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">SignUp</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First name<span style={{color:'red'}}>*</span></label>
              <input
                type="text"
                name="name"
                placeholder="First name"
                onChange={handleChange}
                value={data.name}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last name<span style={{color:'red'}}>*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Last name"
                onChange={handleChange}
                value={data.name}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone<span style={{color:'red'}}>*</span></label>
              <input
                type="text"
                name="contact"
                placeholder="Enter Your Phone Number"
                onChange={handleChange}
                value={data.contact}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail<span style={{color:'red'}}>*</span></label>
              <input
                type="text"
                name="mail"
                placeholder="Enter Your E-mail"
                onChange={handleChange}
                value={data.mail}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Click here to get OTP</button>
               <div>
              <label className="block text-sm font-medium text-gray-700">Enter OTP here<span style={{color:'red'}}>*</span></label>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                onChange={handleChange}
                value={data.otp}
                className="mt-1 w-26 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <button type="submit" 
            className="w-22 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Verify OTP</button>
            <div>
            <label className="block text-sm font-medium text-gray-700"> Password<span style={{color:'red'}}>*</span></label>
            <input
              type="password"
              name="new-password"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password<span style={{color:'red'}}>*</span></label>
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm your password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              value={Confirmpassword}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div >
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-20 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Register</button>
              </div>
          </form>
        </div>
       { <h3 className="text-blue-700">Already have an account? <Link to="/log-in"className="text-gray-800 hover:text-gray-600 ">Login</Link> </h3>}
      </div>
      
    );
  }
  
  export default SignUp
  
  