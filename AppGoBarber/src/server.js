const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
  }

  views (){
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      autoescape: true, // Faz autoscape dos arquivos automaticamente
      express: this.express, // Recebe a variavel que tem o servidor express
      watch: this.isDev // Faz com que todas as alteracoes em arquivos NUNJUCKS funcionem como o nodemon
    });

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')

  }

  routes () {
    this.express.use(require('./routes')) // Informando o arquivo de rotas
  }
}

module.exports = new App().express
