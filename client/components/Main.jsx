import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
import { getWeatherData } from '../Apis/weatherApi'

function Main() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const handleOnSearchChange = (searchData) => {
    return getWeatherData(searchData)
      .then((response) => {
        setWeather({ city: searchData.label, ...response.res.currentWeather })
        setForecast({ city: searchData.label, ...response.res.forecast })
        setIsActive(!isActive)
      })
      .catch((err) => {
        console.log('Err message: ' + err)
      })
  }

  return (
    <div>    
        <h1 className="text-primary   font-monospac my-4 ps-3 ">
          My WeatherApp <i className="fa-solid fa-wind"></i>
        </h1>

        <div className="search-container my-5">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <div className="">
          {isActive ? (
            <div>
              <div className="weather-container d-flex justify-content-center my-4">
                {/* check if we have any data if not don't show anything */}
                {Weather && <Weather data={weather} />}
              </div>
              <div className="forecast-container">
                {Forecast && <Forecast data={forecast} />}
              </div>
            </div>
          ) : (
            <div>
              <div className="weather-instructions">
                <span className="m-3 text-center fs-5">
                  {' '}
                  <i className="fa-solid fa-magnifying-glass fa-xs  me-2"></i>
                  Enter a city to start{' '}
                </span>
                <figure>
                  <img src='../img/undefined.png' alt='unknown weather icon'/>
                  {/* <iframe src="https://giphy.com/embed/QRhtqYeEywJI4" width="100%" height="100%"  frameBorder="0" title="giphy-embed" ></iframe> */}
                </figure>
              </div>
            </div>
          )}
        </div>
    
    </div>
 
  )
}
export default Main