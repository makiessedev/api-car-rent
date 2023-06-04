import { Router } from 'express'
import 'reflect-metadata'

import { createSpecificationController } from '../../../../modules/cars/use-cases/create-specification/create-specification-controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'

const routes = Router()

routes.use(ensureAuthenticated, ensureAdmin)
routes.post('/', createSpecificationController)

export { routes as specificationRoutes }
