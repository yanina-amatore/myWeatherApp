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
      <div style={{border: '1px solid green'}}>
        <div className='p-1 m-1 d-flex flex-wrap justify-content--around'>
          {myForecastArray?.map((i, idx) => {

            let newDt = new Date(i.dt_txt)
            let str = newDt.toString()
            console.log('str: ', str)

            const date = newDt.getDate()
            console.log('date: ', date)

            return (
              <>
                <div className='card ' key={idx}>
                  <div className='card-body'>
                    <p className='card-title'>{city}</p>
                    {/* icon */}
                    <figure>
                      <img alt='weather' className='' src={`../img/${i.weather[0].icon}.png`} />
                    </figure>
                  </div>
                  <div className=''>
                    <div className=''>
                      <span className='card-text'> { }</span>
                    </div>
                    <div className=''>
                      <span className='card-subtitle p-3 '> {i.main.feels_like} °C</span>
                    </div>
                    <div className=''>
                      <span className='card-subtitle p-3'> {i.main.temp_min} °C</span>
                    </div>
                    <div className=''>
                      <span className='card-text text-muted p-3'>Humidity</span>
                      <span className='card-text text-muted p-3'> {i.main.humidity} % </span>
                    </div>

                  </div>
                </div>
              </>
            )
          })}
        </div>

      </div>



    </>
  )
}

export default Forecast