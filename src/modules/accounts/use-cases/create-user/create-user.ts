import { inject, injectable } from 'tsyringe'
import { ICreateUserDTO } from '../../dtos/create-user-dto'
import { IUsersRepository } from '../../repositories/users-repository'
import { AppError } from '../../../../error/app-error'

@injectable()
class CreateUser {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, email, password, driverLicense }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) throw new AppError('User already exists!')

    await this.usersRepository.create({ name, email, password, driverLicense })
  }
}

export { CreateUser }
