import { inject, injectable } from 'tsyringe'
import { ISpecificationsRepository } from '../../repositories/interfaces/specification-repository'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecification {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecification }
