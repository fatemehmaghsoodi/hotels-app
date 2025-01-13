import {useState, useEffect} from 'react'
import 'leaflet/dist/leaflet.css'
// import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { useHotelContext } from '../context/HotelProvider'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup, useMapEvent } from 'react-leaflet'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useGeoLocation from '../hook/useGeoLocation'

function Map({markerLocations}) {
    
    const [searchParams, setSearchPArams] = useSearchParams()
    const lng = Number(searchParams.get('lng'))
    const lat = Number(searchParams.get('lat'))

    const handleMyPosition = ()=> {
      // useGeoLocation()
    }
  return (
    <MapContainer id="map" center={[lat || 40, lng || -3]} zoom={13} scrollWheelZoom={true}>
      <button onClick={handleMyPosition} className="getLocation">your location</button>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
    <DetectClick/>
    {markerLocations.map((item)=>
    <>
    <ChangeMapCenter position={[lat || item.latitude, lng ||  item.longitude]} />
      <Marker key={item.id} position={[item.latitude, item.longitude]}>
        <Popup>
         {item.name}
        </Popup>
      </Marker>
      </>
    )}
    
  </MapContainer>
  )
}

export default Map

function ChangeMapCenter({position}){
  const map = useMap()
  map.setView(position)
  return null;
}

function DetectClick(){
  const navigate = useNavigate()
  useMapEvent({
    click :e =>navigate(`/bookmark/add/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
  return null
}