const express = require('express')
const path = require('path')
const router = require('./controllers/routes')

const server = express()
const PORT = process.env.PORT || 3000

server.use(express.static(path.join(__dirname, 'public')))
server.use(router)

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
