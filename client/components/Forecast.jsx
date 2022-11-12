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
        {/*
          Day
          Time
          IMG
          MIN MAX
         */}

      </div>
      {myForecastArray?.map((i, idx) => {
        
        let newDt= new Date(i.dt_txt)
        let str = newDt.toString()
         console.log('str: ', str)
        
         const date = newDt.getDate()
         console.log('date: ', date)
       
        return (
          <>
            <div className='' key={idx}>
              <div className=''>
                <p className=''>{city}</p>
                {/* icon */}
                <figure>
                  <img alt='weather' className='' src={`../img/${i.weather[0].icon}.png`} />
                </figure>
              </div>
              <div className=''>              
                 
                  <div className=''>
                    <span className=''> {}</span>
                  </div>
                  <div className=''>
                    <span className=''> {i.main.feels_like} °C</span>
                  </div>
                  <div className=''>
                    <span className=''> {i.main.temp_min} °C</span>
                  </div>
                  <div className=''>
                    <span className=''>Humidity</span>
                    <span className='parameter-label'> {i.main.humidity} % </span>
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