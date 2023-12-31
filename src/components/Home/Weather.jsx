import React from 'react'
import useWeatherInfo from '../../Queries/useWeatherInfo'
import { pressureImg, windImg, humidityImg } from '../../assets/images/images.index';
import '../css/Weather.scss'

export default function Weather({dateNTime}) {
    const [weatherData, error, loading] = useWeatherInfo();

  return (
    <div className='weather'>
        <div className="date-time"><h3>{dateNTime.date}</h3><h3>{dateNTime.time}</h3></div>
          {loading ? <div className='loading'>Loading...</div> :
              !error ?
                  <div className="weather-data">
                      {weatherData &&
                          <div>
                              <div className='weather-condition'>
                                  <img src={weatherData.condition.icon} alt="weather-icon" />
                                  <p style={weatherData.condition.text.length > 15 ? { fontSize: "0.65rem" } : null}>{weatherData.condition.text}</p>
                              </div>
                              <hr />
                              <div className='weather-temp'>
                                  <h3>{weatherData.temp_c}°C</h3>
                                  <p><img src={pressureImg} alt="pressure" />{weatherData.pressure_mb} mbar<br />Pressure</p>
                              </div>
                              <hr />
                              <div className='weather-extras'>
                                  <p><img src={windImg} alt="wind" /><span>{weatherData.wind_kph} km/h <br />Wind</span></p>
                                  <p><img src={humidityImg} alt="humidity" /><span>{weatherData.humidity}% <br />Humidity</span></p>
                              </div>
                          </div>}
                  </div> : <div className='weather-data api-error'>
                      Error Occured!
                  </div>
          }
    </div>
  )
}
