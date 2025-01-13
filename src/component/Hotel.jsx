import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHotelContext } from '../context/HotelProvider'

function Hotel() {
  const {id} =useParams()
  const{getCurrentHotel, currentHotel:data} =  useHotelContext()

  useEffect(() => {
    getCurrentHotel(id)
  }, [id]);

  return (
    <div className="+">
      <div className="searchList__item" style={{alignItems:'center'}} >
        <img style={{height:'100px', width:'100px'}} src={data.thumbnail_url} alt="" />
        <div className="searchList__item__desc">
          <p>{data.name}</p>
          <span>{data?.description}</span>
        </div>
      </div>
    </div>
  )
}

export default Hotel