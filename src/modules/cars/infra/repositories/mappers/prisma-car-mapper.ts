import { Car as carRaw } from '@prisma/client'
import { Car } from '../../../model/Car'

class PrismaCarMapper {
  static toPrisma({
    available,
    brand,
    categoryId,
    created_at,
    daily_rate,
    description,
    fine_amount,
    id,
    license_plate,
    name,
  }: Car) {
    return {
      available,
      brand,
      categoryId,
      created_at,
      daily_rate,
      description,
      fine_amount,
      id,
      license_plate,
      name,
    }
  }

  static toDomain({
    available,
    brand,
    categoryId,
    created_at,
    daily_rate,
    description,
    fine_amount,
    id,
    license_plate,
    name,
  }: carRaw) {
    return new Car({
      available,
      brand,
      categoryId,
      created_at,
      daily_rate,
      description,
      fine_amount,
      id,
      license_plate,
      name,
      
    })
  }
}

export { PrismaCarMapper }
