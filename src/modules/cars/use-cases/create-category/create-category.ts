import { inject, injectable } from 'tsyringe'
import { ICategoriesRepository } from '../../repositories/interfaces/categories-repository';
import { AppError } from '../../../../error/app-error';

interface IRequest {
  name: string;
  description: string;
} 

@injectable()
class CreateCategory {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({name, description}: IRequest): Promise<void> {
    const categoryAlredyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlredyExists) throw new AppError('Category alredy exists!')

    await this.categoriesRepository.create({name, description})
  }
}

export { CreateCategory }