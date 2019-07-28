const express = require('express')

const routes = express.Router() // Router é uma funçao

routes.get('/', (req, res) => res.render('auth/signup.njk'))

module.exports = routes
