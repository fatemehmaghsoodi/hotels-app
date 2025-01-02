import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fromAddress } from 'react-geocode';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
const BASE_URL = "http://localhost:5000"
const URL = "https://api-bdc.net/data/reverse-geocode-client"
function AddBookmark() {
  const [geoLocation, setGeoLocation] = useState({})
  
  const [cityName, setCityName] = useState(geoLocation?.city);
  const [country, setCountry] = useState(geoLocation? geoLocation.countryName: "");
  console.log(country);
    const navigate = useNavigate()
    const [search, setsearch] = useSearchParams();
    const lan= JSON.parse(search.get("lan"))
    const lng= JSON.parse(search.get("lng"))

   useEffect(() => {
      async function getGeoLocation(){
        try {
            const {data} = await axios.get(`${URL}?latitude=${lan}&longitude=${lng}`)
            setGeoLocation(data)
        } catch (error) {
          
        }
        
      }
      getGeoLocation()
   }, [lan, lng]);

   const handleAddBookmark = (e)=>{
    e.preventDefault()
    const locationInfo={
      cityName:cityName,
      country,
      countryCode: geoLocation.countryCode,
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude,
      host_location: geoLocation.locality	,

    }
    axios.post(`${BASE_URL}/bookmarks`, locationInfo).
    then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
}
  return (
    <form onSubmit={handleAddBookmark}>
        <div>
          <label htmlFor='cityName'>city name</label>
          <input 
          value={geoLocation.city} 
          type="text" id="cityName" 
          onChange={(e)=>setCityName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='country'>country name</label>
          <input 
          value={geoLocation.countryName} 
          type="text" 
          id="country" 
          onChange={(e)=>setCountry(e.target.value)} 
          />
        </div>
        <button >add new bookmark</button>
        <button onClick={()=>navigate(-1)}>&larr; back </button>
    </form>
  )
}

export default AddBookmark