import React from 'react'
import Contact from './Contact'
import Services from './Services'
import BrowseVehicle from './BrowseVehicle'

const Home = () => {
  return (
    <div className='bg-green-400 h-fit'>
      <img alt="image" src='../src/assets/img.jpg' className='h-full w-full'/>
        <Services/>
        <BrowseVehicle/>
        <Contact/>
    </div>
  )
}

export default Home