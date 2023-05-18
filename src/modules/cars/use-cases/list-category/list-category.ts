import { inject, injectable } from 'tsyringe'
import { ICategoriesRepository } from '../../repositories/interfaces/categories-repository'
import { Category } from '../../model/Category'

@injectable()
class ListCategory {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list()
  }
}

export { ListCategory }
