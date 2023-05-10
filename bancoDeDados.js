const mongoose = require('mongoose')

async function conectaBancoDeDados() {
  try {
    console.log('conexão com o banco de dados inciou')

    await mongoose.connect('mongodb+srv://carolinegdfaria:Kbq2u5UML5rrVGXH@clustermulheres.bhmb6zc.mongodb.net/?retryWrites=true&w=majority')

    console.log('conexão com o banco de dados feita com sucesso!')
  } catch(erro) {
    console.log(erro)
  }
}

module.exports = conectaBancoDeDados