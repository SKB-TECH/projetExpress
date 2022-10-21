const router=require('express').Router()
const controller=require('../controllers/Controllers')



router.use('/',controller.Home)
router.use('/about',controller.Home)
router.use('/',controller.Home)
