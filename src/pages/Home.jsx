import React from 'react'
import Banner from '../component/Banner'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full'>
      
       <Hero />
       
       <Outlet />
       
      
    </div>
  )
}

export default Home