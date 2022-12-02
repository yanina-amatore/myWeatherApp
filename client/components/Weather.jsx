import React from 'react'

function Weather({ data }) {
  return (
    <>
    <div>
      {/* <div className="instructions d-flex flex-column justify-content-center">
        
          <p className="text-secondary px-3 fs-6">
            
            Click on the search bar again to check the weather in a different city
          </p> */}

        <div className="">
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
                    {data?.name}
                  </h5>
                  <p className="card-text fs-5 text-secondary">
                    {data?.main.temp} °C
                  </p>
                  <p className="card-text text-capitalize text-primary fst-italic  ">
                    {data?.weather[0].description}
                  </p>

                  <div className="">
                    <span className="card-text text-secondary">Feels Like: </span>
                    <span className="card-text"> {data?.main.feels_like} °C</span>
                  </div>

                  <div className="">
                    <span className="card-text text-secondary">Min Temp: </span>
                    <span className="card-text"> {data?.main.temp_min} °C</span>
                  </div>
                  <div className="">
                    <span className="card-text text-secondary">Max Temp: </span>
                    <span className="card-text"> {data?.main.temp_max} °C</span>
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
