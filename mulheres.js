const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
  {
    nome: 'Caroline Gonçalves de Faria',
    imagem: 'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Desenvolvedora Front-End'
  },
  {
    nome: 'Iana Chan',
    imagem:'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Fundadora da Programaria'
  },
  {
    nome: 'Nina da Hora',
    imagem: 'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Hacker antirracista'
  }
]

function mostraMulheres(request, response) {
  response.json(mulheres)
}

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)