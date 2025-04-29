import { useState } from "react";




function SignUp() {
    const [data, setData] = useState({
      name: '',
      password: '',
    });
  
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your username"
                onChange={handleChange}
                value={data.name}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={data.password}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
        
      </div>
    );
  }
  
  export default SignUp
  