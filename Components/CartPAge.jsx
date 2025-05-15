import React from 'react';
import { useCart } from '../Components/CartContext';
import {toast} from 'react-toastify';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateDuration } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + (Number(item.totalPrice) || 0),
    0
  );

  const MAX_HOURS = 24;

    const handleIncrement = (index) => {
      const current = cart[index].duration;
      if (current < MAX_HOURS) {
        updateDuration(index, current + 1);
        toast.success('Rental duration updated');
      } else {
        toast.info('Maximum rental duration reached');
      }
    };


  const handleDecrement = (index) => {
    const current = cart[index].duration;
    if (current > 1) {
      updateDuration(index, current - 1);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Rental Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div key={index} className="bg-zinc-900 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={item.vehicle.image}
                    alt={item.vehicle.name}
                    className="w-32 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-bold">{item.vehicle.name}</h2>
                    <p>Category: {item.vehicle.category}</p>
                    <div className="flex items-center gap-2 my-2">
                      <button
                        onClick={() => handleDecrement(index)}
                        className="bg-gray-700 px-2 rounded text-white"
                      >
                        -
                      </button>
                      <span>{item.duration} hour(s)</span>
                      <button
                        onClick={() => handleIncrement(index)}
                        className="bg-gray-700 px-2 rounded text-white"
                      >
                        +
                      </button>
                    </div>
                    <p>Rate: ₹{item.pricePerHour} per hour</p>
                    <p className="text-yellow-400 font-bold">
                      Total: ₹{item.totalPrice}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
              <div className="text-2xl font-bold">
                Grand Total: ₹{totalAmount}
              </div>
              <button
                onClick={clearCart}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg"
              >
                Clear All Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
