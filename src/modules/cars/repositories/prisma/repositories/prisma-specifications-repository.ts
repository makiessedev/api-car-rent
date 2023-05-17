import { prisma as prismaService } from '../../../../../shared/prisma/prisma.service'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../../interfaces/specification-repository'
import { Specification } from '../../../model/Specification'
import { PrismaSpecificationMapper } from '../mappers/prisma-specification-mapper'
import { PrismaClient } from '@prisma/client'

class PrismaSpecificationsRepository implements ISpecificationsRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaService
  }
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification({ name, description })

    const rawSpecification = PrismaSpecificationMapper.toPrisma(specification)

    await this.prisma.specification.create({ data: rawSpecification })
  }
}

export { PrismaSpecificationsRepository }
