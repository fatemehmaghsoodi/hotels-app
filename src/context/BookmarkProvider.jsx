import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import useFetch from '../hook/useFetch';

const BASE_URL = "https://6776555d12a55a9a7d0b4c7c.mockapi.io/hotel/v1"
const BookmarkContext= createContext()

function BookmarkProvider({children}) {
    // const [bookmarks, setBookmarks] = useState([]);
    const {data, isLoading} = useFetch(`${BASE_URL}/bookmarks`)
    const [currentBookmark, setCurrentBookmark] = useState({});
    const [isLoadingCurrBookmark, setIsLoadingCurrBookmark] = useState(false);

    function getCurrentBookmark(id){
        async function getData (){
            try {
                setIsLoadingCurrBookmark(true)
                const{data} = await axios.get(`${BASE_URL}/bookmarks/${id}`)
                setCurrentBookmark(data)
                setIsLoadingCurrBookmark(false)
            } catch (error) {
                toast.error(error.message)
                setIsLoadingCurrBookmark(false)
            }
        }
        getData()
        
    }

    
  return(
      <BookmarkContext.Provider
       value={{
           data,
           isLoading, 
           getCurrentBookmark, 
           currentBookmark,
           isLoadingCurrBookmark}}>
          {children}
      </BookmarkContext.Provider>
  )
}

export default BookmarkProvider

export function useBookmark(){
    return useContext(BookmarkContext)
}