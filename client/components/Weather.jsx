import React from 'react'

function Weather({ data }) {

  return (
    <>
      <div className='weather-section' id='weather-section'>
        <div className="instructions mb-3 ">
          <p className=" px-3 fs-6">
          <i className="fa-solid fa-magnifying-glass fa-l mx-1 text-primary"></i>
            Click on the search bar for a <b>different
            city</b>.
          </p>
        </div>
        <div className='align-self-center'>
          <div className="card mb-3 p-3 " style={{ maxWidth: '350px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  alt="weather"
                  className="img-fluid img-thumbnail"
                  src={`../img/${data?.weather[0].icon}.png`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body bg-white">
                  <h5 className="card-title fw-semibold fs-3 text-primary">
                    {data?.city}
                  </h5>
                  <p className="card-text fs-5 text-secondary">
                    {Math.round(data?.main.temp)} °C
                  </p>
                  <p className="card-text text-capitalize text-primary fst-italic  ">
                    {data?.weather[0].description}
                  </p>

                  <div className="">
                    <span className="card-text text-secondary">Feels Like: </span>
                    <span className="card-text"> {Math.round(data?.main.feels_like)} °C</span>
                  </div>

                  <div className="">
                    <span className="card-text text-secondary">Min Temp: </span>
                    <span className="card-text"> {Math.round(data?.main.temp_min)} °C</span>
                  </div>
                  <div className="">
                    <span className="card-text text-secondary">Max Temp: </span>
                    <span className="card-text"> {Math.round(data?.main.temp_max)} °C</span>
                  </div>
                  <div className="">
                    <span className="card-text text-secondary">Humidity: </span>
                    <span className="card-text"> {data?.main.humidity} % </span>
                  </div>
                  <div className="">
                    <span className="card-text text-secondary">Wind: </span>
                    <span className="card-text"> {data?.wind.speed} hPa </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Weather
