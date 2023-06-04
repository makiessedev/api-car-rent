import { Router } from 'express'
import { createCarController } from '../../../../modules/cars/use-cases/create-car/create-car-controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { listAvailableCarsController } from '../../../../modules/cars/use-cases/list-available-cars/list-available-cars-controller'
import { createCarSpecificationsController } from '../../../../modules/cars/use-cases/create-car-specification/create-car-specification-controller'

const routes = Router()

routes.get('/available', listAvailableCarsController)

routes.use(ensureAuthenticated, ensureAdmin)
routes.post('/', createCarController)
routes.patch('/specifications/:id', createCarSpecificationsController)

export { routes as carRoutes }
