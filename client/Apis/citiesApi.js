

// console.log ('key', process.env.CITIES_KEY)

export const geoApiOptions = {
  method: 'GET',
  headers: {
    // need to hode key in .env
    'X-RapidAPI-Key': `${process.env.CITIES_KEY}`,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'


