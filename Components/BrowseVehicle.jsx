import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const vehicles = [
  {
    id: 1,
    name: 'SWIFT 2018',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/38987/swift-exterior-right-front-three-quarter-2.jpeg',
    duration: '24 hr',
    price: 1800,
    category: 'Hatchback',
  },
  {
    id: 2,
    name: 'Baleno 2020',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45113/baleno-exterior-right-front-three-quarter.jpeg',
    duration: '24 hr',
    price: 2200,
    category: 'Hatchback',
  },
  {
    id: 3,
    name: 'HYUNDAI I20 N LINE',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141169/i20-n-line-exterior-right-front-three-quarter.jpeg',
    duration: '24 hr',
    price: 2500,
    category: 'Hatchback',
  },
  {
    id: 4,
    name: 'HYUNDAI I10',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/46417/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg',
    duration: '24 hr',
    price: 1500,
    category: 'Hatchback',
  },
  {
    id: 5,
    name: 'KTM Duke 250',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/106215/duke-250-right-side-view.jpeg',
    duration: '24 hr',
    price: 1300,
    category: 'Bike',
  },
  {
    id: 6,
    name: 'RE Himalayan',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44785/himalayan-right-side-view.jpeg',
    duration: '24 hr',
    price: 1400,
    category: 'Bike',
  },
  {
    id: 7,
    name: 'Tata Nexon',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/143407/nexon-exterior-right-front-three-quarter.jpeg',
    duration: '24 hr',
    price: 2600,
    category: 'SUV',
  },
  {
    id: 8,
    name: 'Kia Seltos',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/143063/seltos-exterior-right-front-three-quarter.jpeg',
    duration: '24 hr',
    price: 2800,
    category: 'Compact SUV',
  },
  {
    id: 9,
    name: 'Honda City',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/129103/city-exterior-right-front-three-quarter.jpeg',
    duration: '24 hr',
    price: 2700,
    category: 'Sedan',
  },
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
