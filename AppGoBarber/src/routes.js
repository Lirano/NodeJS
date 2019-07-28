const express = require('express')

const routes = express.Router() // Router é uma funçao

routes.get('/', (req, res) => {
  return res.send('Hello World')
})

module.exports = routes
