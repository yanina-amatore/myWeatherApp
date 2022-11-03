import React, { useState} from 'react'
import Search from './Search'
import Weather from './Weather'
import {WEATHER_API_URL, WEATHER_API_KEY} from '../Apis/weatherApi'


function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const lat = searchData.value.lat 
    const lon = searchData.value.lon
    
    const weatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([weatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  }
  
 console.log('weather', weather)
 console.log('forecast', forecast)

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
    </div>
  )
}
export default App

