import React from 'react'

function Weather({data}) {

  console.log(data, 'data')

   return (
    <>
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img alt='weather' className='weather-icon' src={`../img/${data?.weather[0].icon}.png`} />
    </div>
    <div className="col-md-8">
      <div className="card-body bg-white">
        <h5 className="card-title">{data?.city}</h5>
        <p className='card-text fs-5'>{data?.main.temp} °C</p>
        <p className='card-text text-capitalize '>{data?.weather[0].description}</p>
       
        <div className=''>
              <span className= 'card-text'>Feels Like</span>
              <span className= 'card-text'> {data?.main.feels_like} °C</span>
            </div>
          
            <div className=''>
              <span className= 'card-text'>Min Temp</span>
              <span className= 'card-text'> {data?.main.temp_min} °C</span>
            </div>
            <div className=''>
              <span className= 'card-text'>Max Temp</span>
              <span className= 'card-text'> {data?.main.temp_max} °C</span>
            </div>
            <div className=''>
              <span className= 'card-text'>Humidity</span>
              <span className= 'card-text'> {data?.main.humidity} % </span>
            </div>
            <div className=''>
              <span className= 'card-text'>Wind</span>
              <span className= 'card-text'> {data?.wind.speed} hPa </span>
            </div>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
     
    </>
  )
}


export default Weather;