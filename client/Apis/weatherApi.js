import request from 'superagent'

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';


export async function getWeatherData(searchData) {
  const lat = searchData.value.lat 
  const lon = searchData.value.lon
 
  const resWeather = await request.get(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  )
  const resForecast = await request.get (
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      )

  const res = { 'resWeather': resWeather.body, 'resForecast': resForecast.body }
  
  return res
}



   
