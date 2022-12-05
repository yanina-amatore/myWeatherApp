
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

export const geoApiOptions = {
  method: 'GET',
  headers: {
 
    'X-RapidAPI-Key': `{process.env.CITIES_KEY}`,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export async function searchCityAPI (inputValue){
  return  fetch(
    `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)    
    .then((response) => response.json())  
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: {
              lat: `${city.latitude.toFixed(2)}`,
              lon: `${city.longitude.toFixed(2)}`
            },
            label: `${city.name}, ${city.countryCode}`,
          }
        })
      }
    })
}
  

