import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/users-repository'
import { AppError } from '../../../../error/app-error'
import { deleteFile } from '../../../../utils/file'

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
class UpdateUserAvatar {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const user = await this.usersRepository.findById(user_id)

    if (user.avatar) deleteFile(`./tmp/avatar/${user.avatar}`)

    user.avatar = avatar_file

    await this.usersRepository.update(user)
  }
}

export { UpdateUserAvatar }
