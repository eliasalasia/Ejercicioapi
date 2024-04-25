import { PORT } from './config.js'
import { getUsuarios } from './controller.js'
import express from 'express'

const app = express()

app.use((req, res, next) => {
  const { origin } = req.headers

  console.log('Petición realizada por: ', origin)

  const allowedOrigins = ['http://127.0.0.1:5500']

  if (origin === undefined) next()

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    next()
  }
})

app.get('/api/usuarios', getUsuarios)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
