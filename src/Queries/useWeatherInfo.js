import { useState, useEffect } from "react";
import axios from "axios";
import envConf from "../conf/env.config";

export default function useWeatherInfo() {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${envConf.weatherApiKey}&q=auto:ip&aqi=no`)
        .then((response)=> {
            if(response.status===200 && response.data) {
                setWeatherData(response.data.current)
            }
            else {
                setError(true)
            };
        })
        .catch((error)=> {
            setError(true);
        })
        .finally(()=> setLoading(false))
    }, [])

    return [weatherData, error, loading];
}