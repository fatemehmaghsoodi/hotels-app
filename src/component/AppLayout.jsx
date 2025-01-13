import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Map from './Map'
import { useHotelContext } from '../context/HotelProvider'
import Header from './Header'
import PageInfo from './PageInfo'

function AppLayout() {
  const{data, isLoading}= useHotelContext();
  const [info, setInfo] = useState(true);
  return (
    <>
    {info && <PageInfo onClose={()=>setInfo(false)}>
          1-با کلیک روی هر آیتم به صفحه اطلاعات بیشتر هتل مورد نظر هدایت میشوید
          <br/>
          2- با کلیک بر روی هر نقطه از نقشه اطلاعات مکان مورد نظر برای افزودن به لیست مکان های نشانه گذاری شده  نمایش داده میشود 
          </PageInfo>
     }
    <div className="appLayout">
        <div className="sidebar">
            <Outlet/>
        </div>
        
        <div className="mapContainer"><Map markerLocations={data}/></div>
    </div> 
    </>
  )
}

export default AppLayout