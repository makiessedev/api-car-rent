import { Specification } from '../model/Specification'

interface ISaveCarDTO {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  available?: boolean
  categoryId: string
  specifications?: Specification[]
  id?: string
}

export { ISaveCarDTO }
