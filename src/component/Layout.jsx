import React from 'react'
import { Outlet } from 'react-router-dom'
import MainSectionLayout from './MainSectionLayout'
import { Toaster } from 'react-hot-toast'


function Layout() {
  return (
    <div>
    
      <Outlet/>
    </div>
  )
}

export default Layout
