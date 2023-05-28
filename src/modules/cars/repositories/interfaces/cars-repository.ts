import { ICreateCarDTO } from '../../dtos/create-car-dto'
import { Car } from '../../model/Car'

interface ICarsRepository {
  create(datas: ICreateCarDTO): Promise<Car>
}

export { ICarsRepository }
