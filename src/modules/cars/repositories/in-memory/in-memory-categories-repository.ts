import { Category } from '../../model/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../interfaces/categories-repository'

class InMemoryCategoryRepository implements ICategoriesRepository {
  public categories: Category[]

  constructor() {
    this.categories = []
  }

  async create(props: ICreateCategoryDTO): Promise<void> {
    const category = new Category(props)
    this.categories.push(category)
  }

  async list(): Promise<Category[]> {
    return this.categories
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name)

    return category
  }
}

export { InMemoryCategoryRepository }
