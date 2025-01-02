import axios from 'axios';
import React,{ createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
const HotelContext = createContext();

function HotelProvider({children}) {
  const url ="http://localhost:5000/hotels"
  const[searchParams,setSearchParams] = useSearchParams()
  const room=JSON.parse(searchParams.get('options'))?.room
  const destination = searchParams.get('destination')
  const{data, isLoading} = useFetch(url, `host_name_like=${destination}&accommodates_gte=${room}`)
  const [currentHotel, setCurrentHotel] = useState({});

  async function getCurrentHotel(id) {
    try {
      const {data} = await axios.get(`${url}/${id}`)
      setCurrentHotel(data)
    } catch (error) {
      
    }  
  }
  
  return (

    <HotelContext.Provider value={{data, isLoading, currentHotel, getCurrentHotel}}>
        {children}
    </HotelContext.Provider>
  )
}

export default HotelProvider

export function useHotelContext(){ 
   return useContext(HotelContext)
}