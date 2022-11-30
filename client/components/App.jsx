import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
import { getWeatherData } from '../Apis/weatherApi'


function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null);
  const [isActive, setIsActive] = useState(false)


  const handleOnSearchChange = (searchData) => {
    return getWeatherData(searchData)
      .then((response) => {
        setWeather({ city: searchData.label, ...response.res.currentWeather });
        setForecast({ city: searchData.label, ...response.res.forecast });
        setIsActive(!isActive)
      })
      .catch((err) => {
        console.log('Err message: ' + err)
      })
  }


  return (

    <div className='container-sm bg-light'>
      <span className='m-4 text-primary' >
        
        <h1 className='title my-3 font-monospace'><i className="fa-solid fa-umbrella mx-3"></i>My WeatherApp </h1>
        
      </span>
      <div className='search-container'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className=''>
        {isActive ?
          <div>
            <div className='weather-container d-flex justify-content-center my-4'>
              {/* check if we have any data if not don't show anything */}
              {Weather && <Weather data={weather} />}
            </div>
            <div className='forecast-container'>
              {Forecast && <Forecast data={forecast} />}
            </div>
          </div>
          :
          <div>
            <div className='weather-instructions d-flex justify-content-center p-3' >
              <i className=" align-self-center fa-solid fa-magnifying-glass mr-2"></i>
              <span className='lead m-3'> Enter a city on the search bar</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default App

