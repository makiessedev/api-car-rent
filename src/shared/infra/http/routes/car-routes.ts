import { Router } from 'express'
import { createCarController } from '../../../../modules/cars/use-cases/create-car/create-car-controller'

const routes = Router()

routes.post('/', createCarController)

export { routes as carRoutes }
