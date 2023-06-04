import { Specification } from '../../model/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  create(props: ICreateSpecificationDTO): Promise<Specification>
  findByIds(ids: string[]): Promise<Specification[]>
}

export { ICreateSpecificationDTO, ISpecificationsRepository }
