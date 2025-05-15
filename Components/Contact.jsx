import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


function BrowseVehicle() {
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
        <p className="flex justify-center items-center text-white">
          <FaPhoneAlt /> <span className="ml-2">+91-9876543210</span>
        </p>
        <p className="flex justify-center items-center text-white mt-2">
          <FaEnvelope /> <span className="ml-2">rentmyride@gmail.com</span>
        </p>
      </div>
}

export default BrowseVehicle;
