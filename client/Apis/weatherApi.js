
const axios = require ('axios')


export async function getWeatherData(lat, lon, secret) {

  const options = {
    method: 'GET',
    url: '/weather',
    params: {latitud: lat, longitud: lon, key:secret},
}

axios.request(options).then((response) => {
  const dataApi= response.data
  return dataApi

})
.catch((error) => {
    console.error('opps', error)
})


}

//querystring

//REST
