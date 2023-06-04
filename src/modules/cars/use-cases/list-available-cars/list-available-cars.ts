import { inject, injectable } from 'tsyringe'
import { ICarsRepository } from '../../repositories/interfaces/cars-repository'
import { Car } from '../../model/Car'

interface IRequest {
  category_id?: string
  name?: string
  brand?: string
}

@injectable()
class ListAvailableCars {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findByAvailable(
      category_id,
      brand,
      name
    )

    return cars
  }
}

export { ListAvailableCars }
