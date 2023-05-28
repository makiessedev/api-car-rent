import { prisma } from '../../../../shared/lib/prisma.service'
import { ICreateCarDTO } from '../../dtos/create-car-dto'
import { Car } from '../../model/Car'
import { ICarsRepository } from '../../repositories/interfaces/cars-repository'
import { PrismaCarMapper } from './mappers/prisma-car-mapper'

import { PrismaClient } from '@prisma/client'
import { prisma as prismaService } from '../../../../shared/lib/prisma.service'

class PrismaCarsRepository implements ICarsRepository {
  async create({
    name,
    brand,
    description,
    fine_amount,
    daily_rate,
    license_plate,
    categoryId,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car({
      name,
      brand,
      description,
      fine_amount,
      daily_rate,
      license_plate,
      categoryId,
    })

    const carRaw = await prisma.car.create({
      data: PrismaCarMapper.toPrisma(car),
    })

    return PrismaCarMapper.toDomain(carRaw)
  }
}

export { PrismaCarsRepository }
