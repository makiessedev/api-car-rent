import { container } from 'tsyringe'
import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/categories-repository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/interfaces/specification-repository'
import { IUsersRepository } from '../../modules/accounts/repositories/users-repository'
import { PrismaCategoriesRepository } from '../../modules/cars/infra/repositories/prisma-categories-repository'
import { PrismaSpecificationsRepository } from '../../modules/cars/infra/repositories/prisma-specifications-repository'
import { PrismaUsersRepository } from '../../modules/accounts/infra/repositories/prisma-users-repository'
import { ICarsRepository } from '../../modules/cars/repositories/interfaces/cars-repository'
import { PrismaCarsRepository } from '../../modules/cars/infra/repositories/prisma-cars-repository'
import { ICarsImagesRepository } from '../../modules/cars/repositories/interfaces/cars-images-repository'
import { PrismaCarsImagesRepository } from '../../modules/cars/infra/repositories/prisma-cars-images-repository'

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

container.registerSingleton<ICarsRepository>(
  'CarsRepository',
  PrismaCarsRepository
)

container.registerSingleton<ICarsImagesRepository>(
  'CarsImageRepository',
  PrismaCarsImagesRepository
)