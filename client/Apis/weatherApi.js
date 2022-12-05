import request from 'superagent'

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'

export async function getWeatherData(searchData) {

  const lat = searchData.value.lat
  const lon = searchData.value.lon

   const key = process.env.WEATHER_API_KEY
  // API to get Weather data
  const resWeather = await request.get(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  )
   // API to get Forecast data
  const resForecast = await request.get(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    )

  const forecast = resForecast.body
  const currentWeather = resWeather.body

  const res = {
    res: {
      currentWeather: currentWeather,
      forecast: forecast,
    },
  }
  // console.log('res', res)
  return res
}
