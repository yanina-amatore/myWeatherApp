import React from 'react'

function Forecast({ data }) {
  const f = data.list

  // Selected forecast timestamp
  const myForecastArray = [
    f[10],
    f[12],
    f[14],
    f[18],
    f[20],
    f[22],
    f[26],
    f[28],
    f[30]
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
                <figure className="d-flex justify-content-center">
                  <img
                    className="text-center"
                    alt="weather"
                    src={`../img/${i.weather[0].icon}.png`}
                  />
                </figure>
                <p className="card-text text-capitalize text-primary fst-italic  ">
                  {i.weather[0].description}
                </p>

                <div>
                  <div>
                    <i className="fa-solid fa-temperature-arrow-up text-danger"></i>

                    <span className="p-4 fs-5 ">
                      {' '}
                      {Math.round(i.main.temp_max)} °C
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-temperature-arrow-down text-primary"></i>
                    <span className=" p-4 fs-5">
                      {' '}
                      {Math.round(i.main.temp_min)} °C
                    </span>
                  </div>
                  <div className="py-3">
                    <span className="text-muted fs-5 ">Humidity</span>
                    <span className=" text-muted  fs-5">
                      {' '}
                      {Math.round(i.main.humidity)} %{' '}
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
