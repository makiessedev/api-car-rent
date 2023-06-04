import { prisma } from '../../../../shared/lib/prisma.service'
import { Car } from '../../model/Car'
import { ICarsRepository } from '../../repositories/interfaces/cars-repository'
import { PrismaCarMapper } from './mappers/prisma-car-mapper'
import { ISaveCarDTO } from '../../dtos/save-car-dto'

class PrismaCarsRepository implements ICarsRepository {
  async update({
    available,
    brand,
    categoryId,
    daily_rate,
    description,
    fine_amount,
    id,
    license_plate,
    name,
    specifications,
  }: ISaveCarDTO): Promise<Car> {
    const car = await prisma.car.update({
      where: { id },
      data: {
        available,
        brand,
        categoryId,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name,
        specifications: {
          connect: specifications.map((specification) => ({
            id: specification.id,
          })),
        },
      },
      include: {
        specifications: true,
      },
    })

    return PrismaCarMapper.toDomain(car)
  }

  async findById(id: string): Promise<Car> {
    return PrismaCarMapper.toDomain(
      await prisma.car.findUnique({ where: { id } })
    )
  }
  async create({
    name,
    brand,
    description,
    fine_amount,
    daily_rate,
    license_plate,
    categoryId,
  }: ISaveCarDTO): Promise<Car> {
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

  async findByAvailable(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Car[] | null> {
    const cars = await prisma.car.findMany({
      where: {
        available: true,
        categoryId: category_id,
        brand,
        name,
      },
    })

    if (!cars) return null

    return cars.map(PrismaCarMapper.toDomain)
  }

  async findByLacensePlate(license_plate: string): Promise<Car | null> {
    const car = await prisma.car.findUnique({ where: { license_plate } })

    if (!car) return null

    return PrismaCarMapper.toDomain(car)
  }
}

export { PrismaCarsRepository }
