import axios from 'axios';
import React,{ createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import toast from 'react-hot-toast';
const HotelContext = createContext();

function HotelProvider({children}) {
  const url ="https://6776555d12a55a9a7d0b4c7c.mockapi.io/hotels"
  const[searchParams,setSearchParams] = useSearchParams()
  if(!searchParams) return null
  const room= JSON.parse(searchParams.get('options'))?.room
  const destination = searchParams.get('destination')
  const{data, isLoading} = useFetch(url, `search=${destination || null}&accommodates=${room || 1}`)
  const [currentHotel, setCurrentHotel] = useState({});
  async function getCurrentHotel(id) {
    try {
      const {data} = await axios.get(`${url}/${id}`)
      setCurrentHotel(data)
    } catch (error) {
      toast.error(error.maessage)
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