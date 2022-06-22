import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()


//get localhost:3000/flights
router.get('/', flightsCtrl.index)



router.get('/new', flightsCtrl.new)

//get localhost:3000 /flights/:id
router.get('/:id', flightsCtrl.show)

//GET localhost:3000 /flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit)


//post Locathost3000/flights
router.post('/', flightsCtrl.create)

//post localhost3000/flights/:id/review
router.post('/:id/reviews', flightsCtrl.createReview)

//DELETE localhost:3000 /flights/:id
router.delete("/:id", flightsCtrl.delete)


//PUT localhost:3000 /flights/:/id
router.put("/:id", flightsCtrl.update)

export {
  router,
}
