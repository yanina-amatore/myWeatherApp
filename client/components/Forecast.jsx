import React from 'react'

function Forecast({ data }) {

  const city = data.city
  
  
  const f = data.forecast.list
  console.log('f: ', f)

   // check the icons for the forecast
  const myForecastArray = [
    f[10],
    f[12],
    f[14],
    f[18],
    f[20],
    f[22],
    f[26],
    f[28],
    f[30],
  ]
  console.log(myForecastArray, 'forecast')

  return (
    <>
    <div className='title'>
      <h1>Forecast </h1>

    </div>
      {myForecastArray?.map((i, idx) => {
        return (
          <>
            <div className='weather' key={idx}>
              <div className='top'>
                <p className='city'>{city}</p>
                <figure>
                  <img alt='weather' className='weather-icon' src={`../img/${i.weather[0].icon}.png`} />
                </figure>
              </div>
              <div className='bottom'>
                <div className='details'>
                  <div className='parameter-row'>
                    <span className='parameter-label'>{i.weather[0].description}</span>
                  </div>
                  <div className='parameter-row'>
                    <span className='parameter-label'>Details</span>
                  </div>
                  <div className='parameter-row'>
                    <span className='parameter-label'>Day & Time</span>
                    <span className='parameter-label'> {i.dt_txt}</span>

                  </div>
                  <div className='parameter-row'>

                    <span className='parameter-label'> {i.main.temp} °C</span>
                  </div>
                  <div className='parameter-row'>

                    <span className='parameter-label'>Feels Like</span>
                    <span className='parameter-label' > {i.main.feels_like} °C</span>
                  </div>
                  <div className='parameter-row'>
                    <span className='parameter-label'>Min Temp</span>
                    <span className='parameter-label'> {i.main.temp_min } °C</span>
                  </div>
                  <div className='parameter-row'>
                    <span className='parameter-label'>Max Temp</span>
                    <span className='parameter-label'> {i.main.temp_max } °C</span>
                  </div>
                  <div className='parameter-row'>
                    <span className='parameter-label'>Humidity</span>
                    <span className='parameter-label'> { i.main.humidity} % </span>
                  </div>
                  <div className='parameter-row'>
                    <span className='parameter-label'>Wind</span>
                    <span className='parameter-label'> {i.wind.speed } hPa </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}

    </>
  )
}

export default Forecast