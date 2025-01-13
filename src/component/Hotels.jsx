import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useHotelContext } from '../context/HotelProvider'

function Hotels() {
const{data, isLoading, currentHotel} = useHotelContext()
  
  // if(!isLoading) return <div>loading data ...</div>
  return (
    <div className="searchList">
      <div className="searchList-header">
        <h2> search result ({data.length})</h2>
        <Link to={`/bookmark`}>go to bookmarks list</Link>
      </div>
       {data.map((item)=>
          <Link
           key={item.id} to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
              <div className={`searchList__item ${item.id === currentHotel.id ?'current_hotel' : ''}`}>
                <img src={item.thumbnail_url} alt="" />
                <div className="searchList__item__desc">
                  <p>{item.name}</p>
                  <p className="location">{item.smart_location}</p>
                  <span>{item.price} $</span>
                </div>
              </div>
          </Link>
       )}
    </div>
  )
}

export default Hotels