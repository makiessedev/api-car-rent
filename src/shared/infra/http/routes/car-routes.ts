import { Router } from 'express'
import { createCarController } from '../../../../modules/cars/use-cases/create-car/create-car-controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { listAvailableCarsController } from '../../../../modules/cars/use-cases/list-available-cars/list-available-cars-controller'
import { createCarSpecificationsController } from '../../../../modules/cars/use-cases/create-car-specification/create-car-specification-controller'
import multer from 'multer'
import uploadConfig from '../../../../config/upload'
import { uploadCarImagesController } from '../../../../modules/cars/use-cases/upload-car-images/upload-car-images-controller'

const upload = multer(uploadConfig.upload('./tmp/car'))

const routes = Router()

routes.get('/available', listAvailableCarsController)

routes.use(ensureAuthenticated, ensureAdmin)
routes.post('/', createCarController)
routes.patch('/specifications/:id', createCarSpecificationsController)
routes.post('/images/:id', upload.array('image'), uploadCarImagesController)

export { routes as carRoutes }
