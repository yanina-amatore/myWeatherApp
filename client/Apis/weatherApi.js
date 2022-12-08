
const axios = require ('axios')


export async function getWeatherData(lat, lon) {

  const options = {
    method: 'GET',
    url: '/weather',
    params: {latitud: lat, longitud: lon},
}

   return axios.request(options)
    .then( (response) => {
      return response.data
    })
    .catch((error) => {
      console.error('opps', error)
    })    
  
}
