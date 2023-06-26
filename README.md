# Meu Primeiro Projeto Back-End

Este é o repositório do meu primeiro projeto de back-end. O objetivo deste projeto é demonstrar minhas habilidades e conhecimentos no desenvolvimento de um back-end básico para uma aplicação web.

## Visão Geral

Este projeto foi criado como parte do meu aprendizado de desenvolvimento back-end. Ele consiste em um servidor back-end simples que oferece recursos básicos para manipulação de dados, como criação, leitura, atualização e exclusão (CRUD) de mulheres inspiradoras da tecnologia.

## Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas neste projeto:

- Node.js: um ambiente de execução JavaScript que permite executar código JavaScript no servidor.
- Express.js: um framework para Node.js que facilita o desenvolvimento de aplicativos web e APIs.
- MongoDB: um banco de dados NoSQL orientado a documentos usado para armazenar os dados dos usuários.
- Mongoose: uma biblioteca do Node.js que fornece uma camada de abstração para interagir com o MongoDB.

## Configuração do Ambiente

Siga as etapas abaixo para configurar o ambiente de desenvolvimento e executar o projeto localmente:

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
2. Clone este repositório em seu computador.
3. Abra um terminal na pasta raiz do projeto.
4. Execute o seguinte comando para instalar as dependências do projeto:

```npm install```

5. Crie um arquivo ```.env``` na pasta raiz do projeto e defina as seguintes variáveis de ambiente:

```
PORT=3000
MONGODB_URI=mongodb://localhost/meu-primeiro-projeto
```
Certifique-se de substituir ```mongodb://localhost/meu-primeiro-projeto``` pela URL correta do seu banco de dados MongoDB.
6. Inicie o servidor localmente executando o comando:
```npm start```
O servidor será iniciado e estará ouvindo na porta definida no arquivo ```.env```.

## Uso

Após configurar e iniciar o servidor, você pode usar um cliente REST, como o [Postman](https://www.postman.com/)
ou o [curl](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjqq__V6-H_AhXLI7kGHS0iBBYQFnoECA8QAQ&url=https%3A%2F%2Fcurl.se%2F&usg=AOvVaw0oc3LfIV2zPzc8rVOg4kq6&opi=89978449), para interagir com a API fornecida pelo servidor.

A API possui os seguintes endpoints:

- ```GET /mulheres```: retorna todos os usuários cadastrados.
- ```GET /mulheres/:id```: retorna os detalhes de um usuário específico com base no ID fornecido.
- ```POST /mulheres```: cria um novo usuário com base nos dados fornecidos no corpo da solicitação.
- ```PUT /mulheres/:id```: atualiza os detalhes de um usuário específico com base no ID fornecido e nos dados fornecidos no corpo da solicitação.
- ```DELETE /mulheres/:id```: exclui um usuário específico com base no ID fornecido.

Certifique-se de fornecer os dados necessários no corpo da solicitação em formato JSON.

## Contribuição

Este projeto foi desenvolvido com o objetivo de aprendizado pessoal, portanto, não aceitaremos contribuições externas. No entanto, sinta-se à vontade para bifurcar o projeto e adaptá-lo às suas necessidades ou usá-lo como ponto de partida para seus próprios projetos.

## Agradecimentos

Agradeço por verificar meu primeiro projeto de back-end! Se você tiver alguma sugestão ou feedback construtivo, fique à vontade para entrar em contato.