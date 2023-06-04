import { inject, injectable } from 'tsyringe'
import { ISpecificationsRepository } from '../../repositories/interfaces/specification-repository'
import { Specification } from '../../model/Specification'

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
  async execute({ name, description }: IRequest): Promise<Specification> {
    const specifications = await this.specificationsRepository.create({
      name,
      description,
    })

    return specifications
  }
}

export { CreateSpecification }
