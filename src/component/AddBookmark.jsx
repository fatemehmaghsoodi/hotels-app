import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const BASE_URL = "https://6776555d12a55a9a7d0b4c7c.mockapi.io/hotel/v1"
const URL = "https://api-bdc.net/data/reverse-geocode-client"

function AddBookmark() {
  const [geoLocation, setGeoLocation] = useState({})
  const [cityName, setCityName] = useState(geoLocation?.city);
  const [country, setCountry] = useState(geoLocation? geoLocation.countryName: "");

  const navigate = useNavigate()
    const [search, setsearch] = useSearchParams();
    const lat= JSON.parse(search.get("lat"))
    const lng= JSON.parse(search.get("lng"))

   useEffect(() => {
      async function getGeoLocation(){
        try {
            const {data} = await axios.get(`${URL}?latitude=${lat}&longitude=${lng}`)
            setGeoLocation(data)
        } catch (error) {
          
        }
        
      }
      getGeoLocation()
   }, [lat, lng]);

   const handleAddBookmark = (e)=>{
    e.preventDefault()
    const locationInfo={
      cityName:geoLocation.city,
      country:geoLocation.countryName,
      countryCode: geoLocation.countryCode,
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude,
      host_location: geoLocation.locality	,

    }
    axios.post(`${BASE_URL}/bookmarks`, locationInfo)
    .then((res)=>{toast.success(`'${res.data.cityName}' added to bookmark list`)})
    .catch((err)=>{toast.error("new bookmark added")})
}
  return (
    <form onSubmit={handleAddBookmark} className="addBookmarkForm">
        <div className="addBookmarkForm_input">
          <label htmlFor='cityName'>city name</label>
          <input 
          value={geoLocation.city} 
          type="text" id="cityName" 
          onChange={(e)=>setCityName(e.target.value)} 
          />
        </div>
        <div className="addBookmarkForm_input">
          <label htmlFor='country'>country name</label>
          <input 
          value={geoLocation.countryName} 
          type="text" 
          id="country" 
          onChange={(e)=>setCountry(e.target.value)} 
          />
        </div>
        <div className="addBookmarkForm_btn">
          <button onClick={()=>navigate(-1)} type='button'>&larr; back </button>
          <button type="submit">add new bookmark</button>
        </div>
    </form>
  )
}

export default AddBookmark