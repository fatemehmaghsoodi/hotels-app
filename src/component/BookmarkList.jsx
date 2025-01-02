import {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBookmark } from '../context/BookmarkProvider'

function BookmarkList() {
    const {data, isLoading, currentBookmark} = useBookmark()
  return (
      <div>
        {data.map((item)=>{
            return(
                <Link to={item.id} key={item.id}   >
                    <div style={{
                    border:item.id === currentBookmark.id && "1px solid red" 
                }}>{item.cityName}</div>
                </Link>          
            )
        })}
      </div>  
  )
}

export default BookmarkList