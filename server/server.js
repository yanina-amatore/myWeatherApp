const path = require('path')

const express = require('express')


const cors = require('cors')
const axios = require ('axios')
const server = express()

server.use(cors())

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.urlencoded({ extended: true }))


// api call weather

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'


server.get(`/weather`, async (req,res) => {
     
  const weatherNow = `${WEATHER_API_URL}/weather?lat=${req.query.latitud}&lon=${req.query.longitud}&appid=${req.query.key}&units=metric`  ;    
  
  const forecast =  `${WEATHER_API_URL}/forecast?lat=${req.query.latitud}&lon=${req.query.longitud}&appid=${req.query.key}&units=metric`  ;  
  
  const reqWeather = axios.get(weatherNow)

  const reqForecast = axios.get(forecast)

  axios .all([reqWeather, reqForecast])
  .then(
    axios.spread ((... responses) => {
     const respWeather = responses[0]
     const respForecast = responses[1]
     const data = {
        weatherNow: respWeather.data,
        forecast: respForecast.data      
     }
    
     res.json(data)

  })).catch((error) => {
      console.error(error)
  })  
})

module.exports = server
