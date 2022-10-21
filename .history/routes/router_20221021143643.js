const router=require('express').Router()
const controller=require('../controllers/Controllers')



router.use('/',controller.Home)
router.use('/about',controller.About)
router.use('/contact',controller.Contact)
