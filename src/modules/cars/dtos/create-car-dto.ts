interface ICreateCarDTO {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  categoryId: string
}

export { ICreateCarDTO }
