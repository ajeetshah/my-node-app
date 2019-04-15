const http = require('http')
const url = require('url')
const fs = require('fs')
const dt = require('./modules/dateTime')
const users = require('./modules/users')

const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {

  let log = `Requested ${req.url} at ${dt.myDateTime()}`

  let u = url.parse(req.url, true)
  let pathname = u.pathname
  let query = u.query
  let result;

  let fileName = `${dt.getDate_YYYYMMDD()}.log`
  fs.appendFile(`./logs/${fileName}`, log + '\n', function (err) {
    if (err) throw err;
  }); 

  switch(pathname) {
    case '/':
      result = `Hello, World!`
      break
    case '/users':
      if (query.id) {
        result = users.getUser(query.id)
      } else {
        result = users.getUsers()
      }
      result = Buffer.from(JSON.stringify(result))
      break
    case '/index':
      fs.readFile('./files/index.html', function(err, data) {
        result = data
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.end(result)
      })
      return
    default:
      result = ''
  }

  if (result) {
    res.statusCode = 200
  } else {
    result = 'Bad Request'
    res.statusCode = 400
  }

  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.end(result)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
