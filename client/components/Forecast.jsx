import React from 'react'

function Forecast({ data }) {
  const f = data.list
  console.log('forecast', f)

  // Selected forecast timestamp
  const myForecastArray = [
    f[9],
    f[11],
    f[13],
    f[17],
    f[19],
    f[21],
    f[25],
    f[27],
    f[29]
  ]

  return (
    <>
      <div className="forecast-container">
        <div className="forecast-title my-3 text-center fs-3 text-secondary">
          Forecast for next 3 days
        </div>
        <hr />
        <div className="card-map">
          {myForecastArray?.map((i, idx) => {
            let newDt = new Date(i.dt_txt)
            let str = newDt.toString().split(' ')

            const newDate = [str[0], str[1], str[2]].join(' ')
            const time = [str[4]]

            return (
              <div
                key={idx}
                className="cards p-4 bg-white"
                style={{ width: '1,6rem' }}
              >
                <div className="card-body">
                  <div>
                    <p className="fs-3 text-center text-primary ">
                      <b>{newDate}</b>
                    </p>
                    <p className="fs-3 text-center text-secondary">{time}</p>
                  </div>
                  <hr />
                </div>
                  <div >
                    <span className="p-4 fs-3 text-centered">
                      {Math.round(i.main.temp)} °C
                      <i className="fa-solid fa-temperature-half ms-3 "></i>
                    </span>
                  </div>
                <figure className="d-flex justify-content-center">
                  <img
                    className="text-center"
                    alt="weather"
                    src={`../img/${i.weather[0].icon}.png`}
                  />
                </figure>
                <p className="card-text text-capitalize text-primary fst-italic fs-5 ">
                  {i.weather[0].description}
                </p>
                <div>
                  <div className='py-4'>
                    <span className="text-muted fs-5 text-centered">
                      {Math.round(i.main.feels_like)}°C Feels like 
                    </span>
                    <br/>                    
                    <span className=" text-muted  fs-5 text-centered">
                      {Math.round(i.main.humidity)} %  Humidity 
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <a className="text-center fs-4 p-3 m-3" href="#top">
          <i className="fa-solid fa-arrow-up fa-l m-2 text-primary"></i>Back
        </a>
      </div>
    </>
  )
}

export default Forecast
