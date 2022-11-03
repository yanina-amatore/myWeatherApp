
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export function getWeatherData(searchData){
  
  const lat = searchData.value.lat 
  const lon = searchData.value.lon

  const weatherFetch = fetch(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  );
  const forecastFetch = fetch(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  );
  
  Promise.all([weatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();
      
      const resAPI ={ weatherResponse: weatherResponse, forcastResponse: forcastResponse}
      console.log('resapi', resAPI)
      return resAPI
    })
    .catch(console.log);

   
}