import { Router } from 'express'
import { createUserController } from '../../../../modules/accounts/use-cases/create-user/create-user-controller'
import { updateUserAvatarController } from '../../../../modules/accounts/use-cases/update-user-avatar/update-user-avatar-controller'
import multer from 'multer'
import uploadConfig from '../../../../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const routes = Router()

const upload = multer(uploadConfig.upload('./tmp/avatar'))

routes.post('/', createUserController)

routes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateUserAvatarController
)

export { routes as userRoutes }
