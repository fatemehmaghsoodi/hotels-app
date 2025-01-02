import React from 'react'
import useFetch from '../hook/useFetch'

function Home() {
    const{data, isLoading} = useFetch("http://localhost:5000/hotels")
    
    return (
    <div className="hotels">
        {data.map((item)=> 
            <div className="hotel" key={item.id}>
                <img src={item.thumbnail_url} alt="" />
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

export default Home