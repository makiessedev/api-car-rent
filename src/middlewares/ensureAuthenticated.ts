import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error/app-error'
import { verify } from 'jsonwebtoken'
import { PrismaUsersRepository } from '../modules/accounts/repositories/prisma/prisma-users-repository'

interface IPayload {
  sub: string
}

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization

  if (!authHeader) throw new AppError('Token missing!', 400)

  const [_, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(
      token,
      process.env.TOKEN_SECRETE_KEY
    ) as IPayload

    const usersRepository = new PrismaUsersRepository()

    const user = usersRepository.findById(user_id)

    if (!user) throw new AppError('User does not exists!')

    request.user = { id: user_id }
    next()
  } catch {
    throw new AppError('Invalid token!')
  }
}

export { ensureAuthenticated }
