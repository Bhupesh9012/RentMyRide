import React from 'react'
import Contact from './Contact'
import Services from './Services'
import BrowseVehicle from './BrowseVehicle'
import{Link} from "react-router-dom"
import Login from './Login'

const Home = () => {
  return (
    <div className='bg-green-400 h-fit'>
      {/* <img alt="image" src='../src/assets/img.jpg' className='h-full w-full'/> */}

    <div className="min-h-screen bg-gradient-to-r from-black via-blue-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('/supercar.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-pulse">Unleash Your Beast</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto animate-fade-in">Step into the fast lane. Premium supercars ready to rev up your adventure.</p>
          <button className="bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-full text-lg font-bold transition duration-300 animate-bounce">Start Driving</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-700 to-blue-900">
        <h3 className="text-3xl font-bold mb-4">Ready to Ride?</h3>
        <p className="mb-6 text-gray-100">Sign up now and take your pick from our high-octane collection.</p>
        <Link to ="/log-in">
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Join the Ride </button>
        </Link>
      </section>
    </div>
        <Services/>
        <BrowseVehicle/>
        <Contact/>
    </div>
  )
}

export default Home