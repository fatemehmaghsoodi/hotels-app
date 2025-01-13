import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../component/Map'
import { Toaster } from 'react-hot-toast'

function BookmarkLayout() {

  return (
    <div className="appLayout">
       <Toaster />
      <div className="sidebar">
          <Outlet/>
      </div>
      
      <div className="mapContainer" >
        <Map markerLocations={[]}/>
        </div>
    </div>
  )
}

export default BookmarkLayout