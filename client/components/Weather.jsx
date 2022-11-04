import React from 'react'

function Weather({data}) {

   return (
    <>
      <div className='weather'>
        <div className='top'>
          <p className='city'>{data?.city}</p>
          <p className='weather-description'>{data?.weather[0].description}</p>
          <figure>
            <img alt='weather' className='weather-icon' src={`../img/${data?.weather[0].icon}.png`} />
          </figure>
        </div>
        <div className='bottom'>
          <p className='temperture'>{data?.main.temp} °C</p>
          <div className='details'>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Details</span>
            </div>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Feels Like</span>
              <span className= 'parameter-label'> {data?.main.feels_like} °C</span>
            </div>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Feels Like</span>
              <span className= 'parameter-label'> {data?.main.feels_like} °C</span>
            </div>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Min Temp</span>
              <span className= 'parameter-label'> {data?.main.temp_min} °C</span>
            </div>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Max Temp</span>
              <span className= 'parameter-label'> {data?.main.temp_max} °C</span>
            </div>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Humidity</span>
              <span className= 'parameter-label'> {data?.main.humidity} % </span>
            </div>
            <div className='parameter-row'>
              <span className= 'parameter-label'>Wind</span>
              <span className= 'parameter-label'> {data?.wind.speed} hPa </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Weather;