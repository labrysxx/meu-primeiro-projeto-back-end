const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
  response.json({
    nome: 'Caroline Gonçalves de Faria',
    imagem: 'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Desenvolvedora Front-End'
  })
}

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)