import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext';

const RentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!state?.vehicle) {
    return <div>Vehicle not found</div>;
  }

  const { vehicle, price, duration } = state;

  const handleConfirmRent = () => {
    addToCart(vehicle, duration, price);
    navigate('/cart');
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Rent {vehicle.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full rounded-lg"
            />
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{vehicle.name}</h2>
            <p className="text-lg mb-2">Category: {vehicle.category}</p>
            <p className="text-lg mb-2">Duration: {duration} hour(s)</p>
            <p className="text-2xl font-bold mb-6">Price: ₹{price * duration}</p>

            <div className="space-y-4">
              <button
                onClick={handleConfirmRent}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg"
              >
                Confirm Rental
              </button>

              <Link
                to="/rent-out"
                className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg text-center"
              >
                Back to Vehicles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentPage;
