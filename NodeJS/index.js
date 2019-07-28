const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true, // Faz autoscape dos arquivos automaticamente
  express: app, // Recebe a variavel que tem o servidor express
  watch: true // Faz com que todas as alteracoes em arquivos NUNJUCKS funcionem como o nodemon
})

/*
const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  req.appName = "GoNode";
  return next();
};

app.use(logMiddleware);
*/
app.use(express.urlencoded({ extended: false })) // Avisa ao Express que faremos utilizacao da leitura de corpo
app.set('view engine', 'njk') // O set dentro do app faz setar configuraçoes globais

const users = ['Lincoln Irano', 'Isabela Scherrer', 'Graci Irano']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new') // Criaçao de uma nova rota de cadastro de usuarios
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

/*
app.get("/login/:name", (req, res) => {
  return res.send(`Bem vindo ao ${req.appName}, ${req.params.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Welcome ao ${req.appName}, ${req.params.name}`
  });
});
*/

app.listen(3000)
