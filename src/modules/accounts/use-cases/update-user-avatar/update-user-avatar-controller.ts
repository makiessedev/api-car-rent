import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserAvatar } from './update-user-avatar'

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user
    const avatar_file = request.file.filename

    console.log(user_id)

    const updateUserAvatar = container.resolve(UpdateUserAvatar)

    await updateUserAvatar.execute({ user_id, avatar_file })

    return response.status(204).send()
  }
}

export const updateUserAvatarController = new UpdateUserAvatarController()
  .handle
