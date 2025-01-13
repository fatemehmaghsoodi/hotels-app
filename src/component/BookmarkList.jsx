import {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBookmark } from '../context/BookmarkProvider'
import ReactCountryFlag from 'react-country-flag'

function BookmarkList() {
    const {data, isLoading, currentBookmark} = useBookmark()
  return (
    <div className="bookmark">
        <h2>bookmarks ({data.length})</h2>
      <div >
      
        {data.map((item)=>{
            return(
                <Link to={item.id} key={item.id}>
                <div className="bookmark_item" style={{
                    border:item.id === currentBookmark.id && "1px solid red" }}>
                <ReactCountryFlag countryCode={item.countryCode} />
                {item.cityName}
                <span>({item.country})</span>
                </div>
                </Link>          
            )
        })}
      </div>  
      </div>
  )
}

export default BookmarkList