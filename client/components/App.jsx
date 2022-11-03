import React, { useState} from 'react'
import Search from './Search'
import Weather from './Weather'
import { getWeatherData} from '../Apis/weatherApi'


function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    return getWeatherData(searchData)
    .then ((res) => {
      console.log( 'res: ',res)
      setWeather({ city: res.weatherResponse.label, ...res.weatherResponse });
      setForecast({ city: res.forcastResponse.label, ...res.forcastResponse });
    } )
    // .catch(console.log);
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

