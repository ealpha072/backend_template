import express from 'express'

const appRoute = express.Router()

appRoute.get('/', (req, res) => {
  res.status(200).json({content:'Server works'})
})

export default appRoute
