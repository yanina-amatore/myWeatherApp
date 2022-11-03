import React, { useState} from 'react'
import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
import { getWeatherData} from '../Apis/weatherApi'


function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    return getWeatherData(searchData)
    .then ((res) => {
     
      setWeather({ city: searchData.label, ...res.resWeather });
      setForecast({ city: searchData.label, ...res.resForecast});
    } )
    .catch((err) => {
      console.log('Err message: ' + err)
    })
  }
  

  return (
    <div className='app-container'>
      <div className='search-container'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <br/>
      <div className='weather-container'>
        {/* check if we have any data if not don't show anything */}
          {Weather && <Weather data={weather}/>}
      </div>
      <div className='forecast-container'>
        {/* check if we have any data if not don't show anything */}
          {Forecast && <Forecast data={forecast}/>}
      </div>
    </div>
  )
}
export default App

