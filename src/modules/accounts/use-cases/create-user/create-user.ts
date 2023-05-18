import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'
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

    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driverLicense,
    })
  }
}

export { CreateUser }
