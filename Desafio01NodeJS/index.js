const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true, // Faz autoscape dos arquivos automaticamente
  express: app, // Recebe a variavel que tem o servidor express
  watch: true // Faz com que todas as alteracoes em arquivos NUNJUCKS funcionem como o nodemon
});

app.set("view engine", "njk"); // O set dentro do app faz setar configuraçoes globais

app.use(express.urlencoded({ extended: false })); // Avisa ao Express que faremos utilizacao da leitura de corpo

const checkAgeQueryParams = (req, res, next) => {
  const { age } = req.query;

  if (!age) {
    return res.redirect("/");
  }
  return next();
}; // Aqui verifica se a idade foi digitada, caso não redireciona para a pagina principal

app.get("/", (req, res) => {
  return res.render("inputAge");
});

app.get("/major", checkAgeQueryParams, (req, res) => {
  const { age } = req.query;

  return res.render("major", { age });
});

app.get("/minor", checkAgeQueryParams, (req, res) => {
  const { age } = req.query;

  return res.render("minor", { age });
});

app.post("/check", (req, res) => {
  const { age } = req.body;

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`);
  } else {
    return res.redirect(`/minor?age=${age}`);
  }
});

app.listen(3000);
