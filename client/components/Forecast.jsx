import React from 'react'

function Forecast({ data }) {
  
  const f = data.list
  
  // Seelected forecast timestamp
  const myForecastArray = [f[10],f[12],f[18],f[20],f[22],f[26],f[28],f[30]]

  return (
    <>
      <div className='forecast-container'>
        <div className='card-map'>
          {myForecastArray?.map((i, idx) => {

            let newDt = new Date(i.dt_txt)
            let str = newDt.toString().split(' ')

            const newDate = ([str[0], str[1], str[2]]).join(" ")
            const time = ([str[4]])

            return (
              <>
                <div key={idx} className='cards p-4' style={{ width: "1,8rem" }} >
                  <div  key={idx}  className='card-body'>
                    <div >
                      <span className='fs-3 px-2'>{newDate} - </span>
                      <span className='fs-3 '>{time}</span>
                    </div>
                    {/* icon */}
                    <img alt='weather' src={`../img/${i.weather[0].icon}.png`} />
                  </div>
                  <div >
                    <div >
                      <span className='p-4 fs-5 '> {i.main.feels_like} °C</span>
                    </div>
                    <div >
                      <span className=' p-4 fs-5' > {i.main.temp_min} °C</span>
                    </div>
                    <div >
                      <span className='text-muted p-4 fs-5'>Humidity</span>
                      <span className=' text-muted p-4'> {i.main.humidity} % </span>
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