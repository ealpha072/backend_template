import logger from './logger.js'

const requestLogger = (req, res, next) => {
	logger.info('Method:', req.method)
	logger.info('Path:', req.path)
	logger.info('Body:', req.body)
	logger.info('-------------')

	next()
}

const unknownEndpoint = (req, res) => {
	res.status(400).json({error:'Unknownendpoint'})
}

export default {requestLogger, unknownEndpoint}

