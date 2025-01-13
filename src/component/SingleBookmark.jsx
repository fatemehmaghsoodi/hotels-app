import {useEffect} from 'react'
import { Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { useBookmark } from '../context/BookmarkProvider'
import useFetch from '../hook/useFetch'
import Loader from './Loader'
const BASE_URL = "https://6776555d12a55a9a7d0b4c7c.mockapi.io"

function SingleBookmark() {
    const {id} = useParams()
    const navigate = useNavigate()
   
    const {getCurrentBookmark, currentBookmark, isLoadingCurrBookmark} = useBookmark()

    useEffect(() => {
      getCurrentBookmark(id) 
       return () => {};
   }, [id]);
   if(isLoadingCurrBookmark) return <Loader/>

  return (
    <div>
        {currentBookmark.cityName}
        <button onClick={()=>navigate(-1)}> &larr; back</button>
    </div>
  )
}

export default SingleBookmark
