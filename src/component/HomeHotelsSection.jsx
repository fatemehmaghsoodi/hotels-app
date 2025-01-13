import React from 'react'
import useFetch from '../hook/useFetch'
function HomeHotelsSection() {
    const{data, isLoading} = useFetch("https://6776555d12a55a9a7d0b4c7c.mockapi.io/hotels")
    
  return (
    <div className="hotels">
        {data.map((item)=> 
            <div className="hotel" key={item.id}>
                <img className="hotel-img" src={item.medium_url} alt="" />
                <div className="hotel__description">
                    <p className="location">{item.smart_location}</p>
                    <p className="name">{item.name}</p>
                    <p className="price">{item.price} $</p>
                </div>
            </div>
        )}
        </div>
  )
}

export default HomeHotelsSection
