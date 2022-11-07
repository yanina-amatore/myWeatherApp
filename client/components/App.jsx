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
        setForecast({ city: searchData.label, ...response.res.resforecast });
        setIsActive(!isActive)
      })
      .catch((err) => {
        console.log('Err message: ' + err)
      })
  }


  return (

    <div className='app-container'>
      <div className='search-container'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <br />
      <div>
        {isActive ?
          <div>
            <div className='weather-container'>
              {/* check if we have any data if not don't show anything */}
              {Weather && <Weather data={weather} />}
            </div>
            <div className='forecast-container'>
              {Forecast && <Forecast data={forecast} />}
            </div>
          </div>
          :
          <div>
            <div className='weather-instructions' >
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className='instructions-text'> Enter a city on the serch bar</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default App

