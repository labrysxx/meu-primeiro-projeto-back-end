const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())
const porta = 3333

const mulheres = [
  {
    id: '1',
    nome: 'Caroline Gonçalves de Faria',
    imagem: 'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Desenvolvedora Front-End'
  },
  {
    id: '2',
    nome: 'Iana Chan',
    imagem:'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Fundadora da Programaria'
  },
  {
    id: '3',
    nome: 'Nina da Hora',
    imagem: 'https://avatars.githubusercontent.com/u/101073597?v=4',
    minibio: 'Hacker antirracista'
  }
]

function mostraMulheres(request, response) {
  response.json(mulheres)
}

//POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }
  mulheres.push(novaMulher)

  response.json(mulheres)

}

//PATCH
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
    if(mulher.id === request.params.id) {
      return mulher
    }
  }

  const mulherEncontrada = mulheres.find(encontraMulher)
  if(request.body.nome) {
    mulherEncontrada.nome = request.body.nome
  }

  if(request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
  }

  if(request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
  }

  response.json(mulheres)
}

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta ${porta}`)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.listen(porta, mostraPorta)