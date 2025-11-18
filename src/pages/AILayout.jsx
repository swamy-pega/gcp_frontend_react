import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'

const AILayout = () => {
  return (
    <div className='flex flex-col h-screen'>
     

     <div className='flex flex-1 w-full h-[calc(100vh-64px)]'>
       <Sidebar />

         {/* This Outlet component will render the child routes defined in App.jsx 
         className='flex-1 w-full flex h-[calc(100vh-64px)]*/}
    <Outlet />
     </div>
    </div>
  )
}

export default AILayout