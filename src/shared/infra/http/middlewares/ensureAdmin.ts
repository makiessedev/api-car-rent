import { NextFunction, Request, Response } from 'express'
import { PrismaUsersRepository } from '../../../../modules/accounts/infra/repositories/prisma-users-repository'
import { AppError } from '../../../error/app-error'

async function ensureAdmin(
  request: Request,
  _,
  next: NextFunction
) {
  const { id } = request.user

  const usersRepository = new PrismaUsersRepository()

  const user = await usersRepository.findById(id)

  if (!user.isAdmin) throw new AppError('User must be admin!')

  return next()
}

export { ensureAdmin }
