import React from "react";

function Contact() {
  return (
    // <div className='bg-blue-500'>
    // <p>this is contact section</p>
    //</div>
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <img
        src="../src/assets/contact-us-communication-support-service-assistance-concept.jpg"
        className="h-full w-full"
      />
      <h1 className="flex justify-center text-3xl font-bold text-gray-800 p-2">
        Let's Start a Conversation
      </h1>
      <div className=" mx-auto bg-white shadow-xl rounded-2xl p-8 items-center justify-center flex">
        {/* Left side: Contact Form */}
        <div className="">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you shortly.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-[500px] px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-[500px] px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="mt-1 block w-[500px] px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">RentMyRide</h4>
            <p>
              Your premium car rental service. Unleash your beast with every
              ride.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact Us</h5>
            <p>Email: support@rentmyride.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Pithoragarh, India</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          © 2025 RentMyRide. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Contact;
