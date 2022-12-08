
const axios = require ('axios')


export async function getWeatherData(lat, lon, secret) {

  const options = {
    method: 'GET',
    url: '/weather',
    params: {latitud: lat, longitud: lon, key:secret},
}

   return axios.request(options)
    .then( (response) => {
      return response.data
    })
    .catch((error) => {
      console.error('opps', error)
    })    
  
}
