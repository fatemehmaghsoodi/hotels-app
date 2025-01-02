import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Map from '../component/Map'
import { useHotelContext } from '../context/HotelProvider'

function AppLayout() {
  const{data, isLoading}= useHotelContext()
  return (
    <div className="appLayout">
        <div className="sidebar">
            <Outlet/>
        </div>
        
        <div className="mapContainer"><Map markerLocations={data}/></div>
    </div> 
  )
}

export default AppLayout