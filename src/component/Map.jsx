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
    
    const [mapCenter, setMapCenter] = useState([50,4]);
    const [searchParams, setSearchPArams] = useSearchParams()
    const lat = Number(searchParams.get('lat'))
    const lan = Number(searchParams.get('lan'))
    useEffect(() => {
      if(lan && lat) {
        setMapCenter([lat, lan])
      }
      return () => {};
    }, [lat, lan]);

    const handleMyPosition = ()=> {
      // useGeoLocation()
    }
  return (
    <MapContainer id="map" center={mapCenter} zoom={13} scrollWheelZoom={false}>
      <button onClick={handleMyPosition} className="getLocation">your location</button>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <ChangeMapCenter position={mapCenter} />
    <DetectClick/>
    {markerLocations.map((item)=>
      <Marker key={item.id} position={[item.latitude, item.longitude]}>
        <Popup>
         {item.name}
        </Popup>
      </Marker>
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
    click :e => navigate(`/bookmark/add/?lan=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
  return null
}