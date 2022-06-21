import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

router.get('/new', flightsCtrl.new)

// Locathost3000/flights
router.post('/', flightsCtrl.create)

export {
  router,
}
