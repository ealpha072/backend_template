import express from 'express'
import config from './utils/config.js'
import logger from './utils/logger.js'
import middleware from './utils/middleware.js'
import cors from 'cors'

logger.info('hello')

const app = express()
app.use(middleware.requestLogger)

app.listen(config.PORT, ()=>{logger.info(`Server listening on port ${config.PORT}`)})

app.use(cors())
app.use(express.json())
app.use(middleware.ignoreFavicon)
app.use(middleware.unknownEndpoint)
