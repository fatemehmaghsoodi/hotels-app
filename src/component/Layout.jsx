import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import MainSection from './MainSection'


function Layout() {
  return (
    <div>
      {/* <Header/> */}
      <MainSection/>
      <Outlet/>
    </div>
  )
}

export default Layout
