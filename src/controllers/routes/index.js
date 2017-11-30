const router = require('express').Router()
const path = require('path')

router.get('/initial', (req, res) => {
  res.json(1)
})

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router
