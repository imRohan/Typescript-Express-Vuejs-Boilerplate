const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req ,res) => {
  res.send('Hello World!')
})

app.get('/sample', (req ,res) => {
  res.send('Hello from Express!')
})

app.listen(3000, () => {
  console.log('Express Server Started on port 3000')
})
