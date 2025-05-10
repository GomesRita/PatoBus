const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Serviço Iniciado')
})

app.listen(port, () => {
  console.log(`Exemplo de app rodando em http://localhost:${3000}`)
})