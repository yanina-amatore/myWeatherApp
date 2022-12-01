import nock from 'nock'
import{ WEATHER_API_URL} from './weatherApi'

import {getWeatherData }from './weatherApi'

// I'm practicing unir test Yay!!! -- Failing ATM  :(


describe('getWeatherData', () => {
  let mockAPI;
  const fakeSearchData = {
    label: 'Kabul, AF',
    value: {
      lat: '34.53',
      lon: '69.17',
    },
  }
  const lat = fakeSearchData.value.lat
  const lon = fakeSearchData.value.lon

  const fakeResWeather = [
    {
      body: {
        base: 'stations',
        clouds: {
          all: 0,
        },
        code: 200,
        coord: {
          lon: 55.31,
          lat: 25.27,
        },
        dt: 1669587185,
        id: 292223,
        main: {
          temp: 23,
          feels_like: 23.26,
          temp_min: 20.14,
          temp_max: 23.97,
          pressure: 1010,
        },
        name: 'Dubai',
        sys: {
          type: 1,
          id: 7537,
          country: 'AE',
          sunrise: 1669603509,
          sunset: 1669642108,
        },
        weather: {
          0: {
            description: 'clear sky',
            icon: '`01n`icon',
          },
        },
      },
    },
  ]
  // const fakeResForecast = [
  //   {
  //     body: {
  //       city: 'city',
  //       list: [1, 2, 3]
  //     }
  //   }
  // ]

  const scope = nock('http://localhost')
    .get(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    )
    .reply(200, fakeResWeather)

  test.skip('returns the body resWeather', () => {
    expect.assertions(2)
    return getWeatherData()
      .then((res) => {
        expect(res.res.currentWeather).toBe(true)
        expect.arrayContaining(fakeResWeather)
        expect(scope.isDone()).toBe(true)

      })
  })
})
