import { PrismaClient } from '@prisma/client'
import { prisma as prismaService } from '../../../../shared/lib/prisma.service'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/interfaces/categories-repository'
import { Category } from '../../model/Category'
import { PrismaCategoryMapper } from './mappers/prisma-category-mapper'

class PrismaCategoriesRepository implements ICategoriesRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaService
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category({ name, description })

    const rawCategory = PrismaCategoryMapper.toPrisma(category)

    await this.prisma.category.create({ data: rawCategory })
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.prisma.category.findUnique({ where: { name } })

    if (!category) return null

    return PrismaCategoryMapper.toDomain(category)
  }

  async list(): Promise<Category[]> {
    const category = await this.prisma.category.findMany()

    return category.map(PrismaCategoryMapper.toDomain)
  }
}

export { PrismaCategoriesRepository }
