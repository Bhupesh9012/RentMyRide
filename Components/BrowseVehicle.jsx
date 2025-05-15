import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const vehicles = [
  { id: 1, name: 'SWIFT 2018', image: 'https://images.unsplash.com/photo-1730469998799-08725cc68dc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3aWZ0JTIwY2FyfGVufDB8fDB8fHww', duration: '24 hr', price: 2200, category: 'Hatchback' },
  { id: 2, name: 'Baleno 2018', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80', duration: '24 hr', price: 2200, category: 'Hatchback' },
  { id: 3, name: 'HYUNDAI I20 ', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80', duration: '24 hr', price: 2500, category: 'Hatchback' },
  { id: 4, name: 'HYUNDAI I10', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2023_Hyundai_i10_%28AC3%29_Autofr%C3%BChling_Ulm_IMG_9349.jpg/1200px-2023_Hyundai_i10_%28AC3%29_Autofr%C3%BChling_Ulm_IMG_9349.jpg', duration: '24 hr', price: 1500, category: 'Hatchback' },
 
  { id: 5, name: 'KTM Duke 250', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/155737/duke-250-right-side-view-4.jpeg?isig=0&q=80',duration: '24 hr', price: 1600, category: 'Bike' },
  { id: 6, name: 'Royal enfield 350', image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/183389/classic-350-right-side-view-62.jpeg?isig=0&q=80',duration: '24 hr', price: 1400, category: 'Bike' },
  { id: 7, name: 'RE Himalayan', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/110431/himalayan-right-side-view-6.png?isig=0&q=80',duration: '24 hr', price: 1400, category: 'Bike' },
  { id: 8, name: 'Pulser 220', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/142305/pulsar-220-right-side-view-8.jpeg?isig=0&q=80',duration: '24 hr', price: 1400, category: 'Bike' },
  
  { id: 9, name: 'Breeza', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80',duration: '24 hr', price: 2800, category: 'Compact SUV' },
  { id: 10, name: 'Venue', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80',duration: '24 hr', price: 2800, category: 'Compact SUV' },
  { id: 11, name: 'Punch', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/39015/punch-exterior-right-front-three-quarter-57.jpeg?isig=0&q=80',duration: '24 hr', price: 2800, category: 'Compact SUV' },
  { id: 12, name: 'Tata Nexon', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80',duration: '24 hr', price: 2800, category: 'Compact SUV' },

  { id: 13, name: 'Honda City', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80',duration: '24 hr', price: 2700, category: 'Sedan' },
  { id: 14, name: 'Ciaz', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',duration: '24 hr', price: 2700, category: 'Sedan' },
  { id: 15, name: 'Verna', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80',duration: '24 hr', price: 2700, category: 'Sedan' },
  { id: 16, name: 'Hyundai ', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139133/aura-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80',duration: '24 hr', price: 2700, category: 'Sedan' },

  { id: 17, name: 'Toyota Fortuner', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80',duration: '24 hr', price: 4000, category: 'SUV' },
  { id: 18, name: 'Mahindra Scorpio N', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80',duration: '24 hr', price: 3500, category: 'SUV' },
  { id: 19, name: 'Mahindra Bolero', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/131181/bolero-neo-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',duration: '24 hr', price: 3000, category: 'SUV' },
  { id: 20, name: 'Mahindra xuv 700', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80',duration: '24 hr', price: 3500, category: 'SUV' },


];
const categories = ['Hatchback', 'SUV', 'Compact SUV', 'Sedan', 'Bike'];

const VehicleCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hatchback');

  const filteredVehicles = vehicles.filter(
    (vehicle) => vehicle.category === selectedCategory
  );

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Available Rides</h1>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-10 mb-10 border-b border-gray-600">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-lg pb-2 transition duration-300 hover:text-yellow-400 ${
              selectedCategory === cat
                ? 'text-yellow-400 border-b-4 border-yellow-400 font-bold'
                : 'text-white'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Vehicle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-400/40 transition-transform hover:scale-105 duration-300"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{vehicle.name}</h2>
              <p>{vehicle.duration}</p>
              <p className="text-lg font-semibold mt-2">₹{vehicle.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Car Animation */}
      <div className="flex justify-center my-20 overflow-hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/512/743/743006.png"
          alt="Moving Car"
          className="w-24 animate-carMove"
        />
      </div>

      {/* Footer Section */}
      <div className="bg-zinc-800 text-center py-10 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-8 text-yellow-400 text-2xl mb-4">
          <a href="https://instagram.com/yourid" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://facebook.com/yourid" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
        </div>
        <p className="flex justify-center items-center space-x-2 text-white">
          <FaPhoneAlt /> <span className="ml-2">+91-9876543210</span>
        </p>
        <p className="flex justify-center items-center space-x-2 text-white mt-2">
          <FaEnvelope /> <span className="ml-2">rentmyride@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default VehicleCategories;

