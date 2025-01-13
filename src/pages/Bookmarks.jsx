import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../component/Map'

function BookmarkLayout() {

  return (
    <div className="appLayout">
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