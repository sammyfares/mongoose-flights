import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

//Get localhost:3000/new
router.get('/new', mealsCtrl.new)

// post localhost3000: /meals
router.post('/', mealsCtrl.create)


export { 
  router
}