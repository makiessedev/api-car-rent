import { Category as rawCategory } from '@prisma/client'
import { Category } from '../../../model/Category'

class PrismaCategoryMapper {
  static toDomain({ id, name, description, createdAt }: rawCategory) {
    return new Category({ id, name, description, createdAt })
  }

  static toPrisma({ id, name, description, createdAt }: Category) {
    return { id, name, description, createdAt }
  }
}

export { PrismaCategoryMapper }
