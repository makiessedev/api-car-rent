import { Specification } from '../../model/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  create(props: ICreateSpecificationDTO): Promise<void>
}

export { ICreateSpecificationDTO, ISpecificationsRepository }
