import React from 'react'

//function Services() {
  const services = [
    {
      title: "Luxury Car Rentals",
      description: "Choose from a wide range of premium cars including sports, sedans, and SUVs to suit your style and occasion.",
      icon: "🚗",
    },
    {
      title: "Hourly & Daily Booking",
      description: "Flexible rental options that work by the hour or day. Perfect for city trips or quick getaways.",
      icon: "🕒",
    },
    {
      title: "Doorstep Delivery",
      description: "We deliver and pick up the car at your preferred location for complete convenience.",
      icon: "🏠",
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden costs. Great value for every ride.",
      icon: "💰",
    },
    {
      title: "24/7 Roadside Assistance",
      description: "Travel stress-free with round-the-clock support and breakdown assistance.",
      icon: "🛠️",
    },
    {
      title: "Self Drive & Chauffeur Options",
      description: "Whether you want to drive or be driven, we’ve got you covered.",
      icon: "🧑‍✈️",
    },
  ];
  
  const Services = () => {
    return (
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg mb-12">Experience seamless and reliable car rental solutions tailored for you.</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Services