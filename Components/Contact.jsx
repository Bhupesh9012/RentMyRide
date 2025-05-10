import React, { useState, useEffect } from 'react';
import { vehicle } from './Cars';  // Ensure you have this data in Cars.js file

function BrowseVehicle() {
  const [category, setCategory] = useState('cars'); // Default category is 'cars'
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image in the slideshow

  // Filter vehicles based on the selected category
  const filteredVehicles = vehicle.filter(item => item.category === category);

  // Change the current image index automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVehicles.length);
    }, 3000);
    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, [category, filteredVehicles.length]);

  // Check if we have vehicles in the selected category
  if (filteredVehicles.length === 0) {
    return <div>No vehicles available in this category.</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Category Buttons */}
      <div className="flex justify-center space-x-8 mt-10">
        <button
          onClick={() => setCategory('cars')}
          className={`bg-blue-600 text-white rounded-xl px-8 py-3 hover:bg-blue-500 ${category === 'cars' ? 'bg-blue-800' : ''}`}
        >
          Cars
        </button>
        <button
          onClick={() => setCategory('bikes')}
          className={`bg-blue-600 text-white rounded-xl px-8 py-3 hover:bg-blue-500 ${category === 'bikes' ? 'bg-blue-800' : ''}`}
        >
          Bikes
        </button>
      </div>

      {/* Slideshow for the selected category */}
      <div className="relative w-full h-screen">
        {/* Image slideshow */}
        <img
          src={filteredVehicles[currentIndex].carImage}
          alt={filteredVehicles[currentIndex].CarName}
          className="w-full h-full object-cover"
        />

        {/* Left arrow button for navigation */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-4 rounded-r-xl"
          onClick={() => setCurrentIndex((currentIndex - 1 + filteredVehicles.length) % filteredVehicles.length)}
        >
          &#8249;
        </button>

        {/* Right arrow button for navigation */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-4 rounded-l-xl"
          onClick={() => setCurrentIndex((currentIndex + 1) % filteredVehicles.length)}
        >
          &#8250;
        </button>

        {/* Vehicle Information */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <h2 className="text-2xl font-bold">{filteredVehicles[currentIndex].CarName}</h2>
          <p className="text-xl">{filteredVehicles[currentIndex].Company}</p>
          <p className="text-lg">Price: Rs. {filteredVehicles[currentIndex].price}/hr</p>
          <p className="text-lg">Model: {filteredVehicles[currentIndex].model}</p>
        </div>
      </div>
    </div>
  );
}

export default BrowseVehicle;
