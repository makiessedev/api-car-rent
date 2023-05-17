import { container } from 'tsyringe'
import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/categories-repository'
import { PrismaCategoriesRepository } from '../../modules/cars/repositories/prisma/repositories/prisma-categories-repository'
import { PrismaSpecificationsRepository } from '../../modules/cars/repositories/prisma/repositories/prisma-specifications-repository'
import { PrismaUsersRepository } from '../../modules/accounts/repositories/prisma/prisma-users-repository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/interfaces/specification-repository'
import { IUsersRepository } from '../../modules/accounts/repositories/users-repository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  PrismaCategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  PrismaSpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  PrismaUsersRepository
)
