import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY } from "@env";

// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

      const fetchData = async () => {
        setIsLoading(true);
        console.log('FETCH CALLED');
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&language=en-US&page=1&region=US`);
            
            setData(response.data.results);
            setIsLoading(false);
            console.log('Response', response.data.results);

        } catch (error) {
            setError(error);
            alert('There is an error');   
            console.log(error);
        } finally {
            setIsLoading(false);
        }
      } 

    useEffect(() => {
        fetchData();

    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;