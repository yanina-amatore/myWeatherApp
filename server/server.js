const path = require('path')

const express = require('express')

const axios = require('axios')
const server = express()

require('dotenv').config()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.urlencoded({ extended: true }))

//  Weather & Forecast Api calls

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'

server.get(`/weather`, async (req, res) => {
  const weatherNow = `${WEATHER_API_URL}/weather?lat=${req.query.latitud}&lon=${req.query.longitud}&appid=${process.env.WEATHER_API_KEY}&units=metric`

  const forecast = `${WEATHER_API_URL}/forecast?lat=${req.query.latitud}&lon=${req.query.longitud}&appid=${process.env.WEATHER_API_KEY}&units=metric`

  const reqWeather = axios.get(weatherNow)

  const reqForecast = axios.get(forecast)

  axios
    .all([reqWeather, reqForecast])
    .then(
      axios.spread((...responses) => {
        const respWeather = responses[0]
        const respForecast = responses[1]
        const data = {
          weatherNow: respWeather.data,
          forecast: respForecast.data,
        }
        res.json(data)
      })
    )
    .catch((error) => {
      console.error(error)
    })
})

// Cities Api call

server.get('/cities', async (req, res) => {
  const inputValue = req.query.inputValue

  const options = {
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=5000&namePrefix=${inputValue}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.CITIES_KEY}`,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

module.exports = server
