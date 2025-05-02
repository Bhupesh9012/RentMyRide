import React from 'react'
import { vehicle } from './Cars'
import { Link } from 'react-router-dom'

function BrowseVehicle() {
  return (
    <div className='relative'>
        <img src='../src/assets/pexels-eberhardgross-640783.jpg' alt="Background" className="w-full h-auto object-cover"/>
       <div  className='absolute inset-0 '> <h1 className='flex justify-center text-3xl font-bold text-gray-800'>Available Cars</h1>
       <div className='' ><Link to="/" className="text-gray-800 hover:text-gray-600">Cars</Link>
       <div className='grid grid-cols-5 gap-1'>
        {vehicle.map((cars, ind)=>(
            <div key={ind} className='shadow rounded-xl bg-gray-200 mx-2 my-2 w-60 '>
                <img src={cars.carImage} alt="img" className='h-50 w-full '/>
                <h4 className='text-sm ml-2 font-semibold'>{cars.Company}</h4>
                <h4 className='text-sm ml-2 font-semibold'>{cars.CarName}</h4>
                <h4 className='text-sm ml-2 font-semibold'>Rs. {cars.price}</h4>
                <h4 className='text-sm ml-2 font-semibold'>Rs. {cars.model}</h4>
                <div className='flex justify-center'>
                <button className='bg-blue-600 rounded-xl px-12 text-white hover:bg-violet-300 cursor-pointer py-1 mb-2'>Rent</button>
                </div>
            </div>  
        ))}
    </div>
</div>
</div>
</div>
  )
}
export default BrowseVehicle