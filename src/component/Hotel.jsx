import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHotelContext } from '../context/HotelProvider'
import Loading from './Loader'

function Hotel() {
  const {id} =useParams()
  // if (!isLoading) return <Loading />
  const{getCurrentHotel, currentHotel:data} =  useHotelContext()

useEffect(() => {
  getCurrentHotel(id)
}, [id]);

  return (
    <div className="searchList">
      <div className="searchList__item" >
        <img src={data.thumbnail_url} alt="" />
        <div className="searchList__item__desc">
          <p>{data.name}</p>
          <span>{data.description}</span>
        </div>
      </div>
    </div>
  )
}

export default Hotel