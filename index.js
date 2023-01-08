import express from 'express'
import config from './utils/config.js'
import cors from 'cors'
import logger from './utils/logger.js'
import middlelware from './utils/middleware.js'

logger.info('Attempting connectiong ot localhost')

const app =  express()
const PORT = config.PORT

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`)
})

app.use(express.json())
app.use(middlelware.requestLogger)

app.get('/', (req, res) => {
  res.send('Good morning')
})

app.use(middlelware.unknownEndpoint)
