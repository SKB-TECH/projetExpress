const router = require('express').Router()
const controller = require('../controllers/Controllers')



router.get('/', controller.Home)
router.get('/about', controller.About)
router.use('/contact', controller.Contact)

module.exports = router