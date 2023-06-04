import { Router } from 'express'
import multer from 'multer'
import 'reflect-metadata'

import { createCategoryController } from '../../../../modules/cars/use-cases/create-category/create-category-controller'
import { listCategoryController } from '../../../../modules/cars/use-cases/list-category/list-category-controller'
import { importCategoryController } from '../../../../modules/cars/use-cases/import-category/import-category-controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'

const routes = Router()

const upload = multer({ dest: './tmp' })

routes.get('/', listCategoryController)

routes.use(ensureAuthenticated, ensureAdmin)
routes.post('/', createCategoryController)
routes.post('/import', upload.single('file'), importCategoryController)

export { routes as categoryRoutes }
