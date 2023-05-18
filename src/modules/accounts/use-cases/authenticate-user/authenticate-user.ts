import { inject, injectAll, injectable } from 'tsyringe'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { IUsersRepository } from '../../repositories/users-repository'
import { AppError } from '../../../../error/app-error'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: { name: string; email: string }
  token: string
}

@injectable()
class AuthenticateUser {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ password, email }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new AppError('Email or password invalid!')

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) throw new AppError('Email  or password invalid!')

    const token = sign({}, process.env.TOKEN_SECRETE_KEY, {
      subject: user.id,
      expiresIn: '1d',
    })

    return { token, user: { name: user.name, email: user.email } } as IResponse
  }
}

export { AuthenticateUser }
