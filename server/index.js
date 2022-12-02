// node modules used to set up .env file
const path = require ('path')
const dotenv = require ('dotenv')

// get the path of .env
const envPath = path.join(__dirname, '..','.env')

// tell dotenv node module where to look for .env file

dotenv.config({path: envPath})


const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
  // console.log(process.env.CITIES_KEY)
})
