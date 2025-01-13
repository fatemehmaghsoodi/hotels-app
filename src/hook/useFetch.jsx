import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function useFetch(url, query="" ) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchData(){
            try {
                setIsLoading(true)
                setIsLoading(true)
                const {data} =await axios.get(`${url}?${query}`)
                setData(data) 
            } catch (error) {
                setIsLoading(false)
                toast.error("Something is wrong.")
            }
            }
        fetchData()
        return () => {};
    }, [url, query]);

    return{ data, isLoading}
}

export default useFetch