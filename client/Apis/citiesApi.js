import axios from 'axios'

export async function searchCityAPI(inputValue) {
  const options = {
    method: 'GET',
    url: '/cities',
    params: { inputValue: inputValue },
  }

  return axios
    .request(options)
    .then((response) => {
      const citiesArray = response.data

      return {
        options: citiesArray.map((city) => {
          return {
            value: {
              lat: `${city.latitude.toFixed(2)}`,
              lon: `${city.longitude.toFixed(2)}`,
            },
            label: `${city.name}, ${city.countryCode}`,
          }
        }),
      }
    })
    .catch(function (error) {
      console.error(error)
    })
}
