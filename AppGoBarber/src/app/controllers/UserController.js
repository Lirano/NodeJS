const { User } = require('../models') //Aqui é importado a pasta, pois se quisermos importar mais modulos é so colocar a virgula e continuar inserindo novos modules

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    await User.create(req.body)

    return res.redirect('/')
  }
}

module.exports = new UserController()
