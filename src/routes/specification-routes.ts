import { Router } from 'express'
import 'reflect-metadata'
import { createSpecificationController } from '../modules/cars/use-cases/create-specification/create-category-controller'

const routes = Router()

routes.post('/', createSpecificationController)

export { routes as SpecificationRoutes }
