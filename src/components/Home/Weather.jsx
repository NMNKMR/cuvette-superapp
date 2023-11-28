import React, { useEffect, useState } from 'react'
import envConf from '../../conf/env.config';
import axios from 'axios'
import '../css/Weather.scss'

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherError, setWeatherError] = useState(false);
    
    useEffect(()=> {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${envConf.weatherApiKey}&q=auto:ip&aqi=no`)
        .then((response)=> {
            if(response.status===200 && response.data) setWeatherData(response.data.current);
            else setWeatherError(true);
        })
        .catch((error)=> {
            setWeatherError(true);
        })
    }, [])

  return (
    <div className='weather'>
        <div className="date-time"><h3>Date</h3><h3>Time</h3></div>
          {!weatherError ?
              <div className="weather-data">
                  {weatherData &&
                      <div>
                          <div className='weather-condition'>
                              <img src={weatherData.condition.icon} alt="weather-icon" />
                              <p style={weatherData.condition.text.length > 15? {fontSize:"1rem"} : null}>{weatherData.condition.text}</p>
                          </div>
                          <hr />
                          <div className='weather-temp'>
                              <h3>{weatherData.temp_c}°C</h3>
                              <p><img src="../../src/assets/images/pressure.png" alt="pressure" />{weatherData.pressure_mb} mbar<br />Pressure</p>
                          </div>
                          <hr />
                          <div className='weather-extras'>
                              <p><img src="../../src/assets/images/wind.png" alt="wind"/>{weatherData.wind_kph} km/h <br />Wind</p>
                              <p><img src="../../src/assets/images/humidity.png" alt="humidity" />{weatherData.humidity}% <br />Humidity</p>
                          </div>
                      </div>}
              </div> : <div className='weather-data'>
                  Error Occured!
              </div>}
    </div>
  )
}
