import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
import { getWeatherData } from '../Apis/weatherApi'
import Carousel from './Carousel'
import Footer from './Footer'

function Main() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const handleOnSearchChange = async (searchData) => {
    const lat = searchData.value.lat
    const lon = searchData.value.lon

    return getWeatherData(lat, lon)
      .then((response) => {
        setWeather({ city: searchData.label, ...response.weatherNow })
        setForecast({ city: searchData.label, ...response.forecast })
        setIsActive(true)
      })

      .catch((err) => {
        console.log('Err message: ' + err)
      })
  }

  const clearHome = ()=> setIsActive(false)

  return (
    <section className="main" id="top">
      <div>
        <button className='btn-clear-main' onClick={clearHome}>
          <h1 className="text-primary   font-monospac mb-4 ps-3 ">
            My WeatherApp <i className="fa-solid fa-wind"></i>
          </h1>
        </button>
      </div>
      <div className="search-container my-5">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="weather-alt-text">
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
              <div>
                <Carousel />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  )
}
export default Main
