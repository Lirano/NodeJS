const express = require('express')

const routes = express.Router() // Router é uma funçao

const UserController = require('./app/controllers/UserController')

routes.get('/signup', UserController.create) //Rota para criar o novo User
routes.post('/signup', UserController.store) //Rota para pegar os dados e inserir no banco de dados

module.exports = routes
