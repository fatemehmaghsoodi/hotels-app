import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useHotelContext } from '../context/HotelProvider'

function Hotels() {
const{data, isLoading, currentHotel} = useHotelContext()

  if(!isLoading) return <div>loading data ...</div>
  return (
    <div className="searchList">
       <h2>{data.length}</h2>
       {data.map((item)=>
          <Link
           key={item.id} to={`/hotels/${item.id}?lat=${item.latitude}&lan=${item.longitude}`}>
              <div className={`searchList__item ${item.id === currentHotel.id ?'current_hotel' : ''}`}>
                <img src={item.thumbnail_url} alt="" />
                <div className="searchList__item__desc">
                  <p>{item.name}</p>
                  <span></span>
                </div>
              </div>
          </Link>
       )}
    </div>
  )
}

export default Hotels