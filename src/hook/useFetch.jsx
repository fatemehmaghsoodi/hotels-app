import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url, query="" ) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchData(){
            try {
                setIsLoading(true)
                const {data} =await axios.get(`${url}?${query}`)
                setData(data) 
            } catch (error) {
                setIsLoading(false)
                throw new Error(error.response.message)
            }
            }
        fetchData()
        return () => {};
    }, [url, query]);

    return{ data, isLoading}
}

export default useFetch