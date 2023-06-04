import { describe, expect, it } from 'vitest'
import { Car } from './Car'

describe('Create car', () => {
  it('Should be able to create a new car', () => {
    const car = new Car({
      brand: 'kia',
      categoryId: '3456789',
      daily_rate: 50,
      description: 'kia rio bonito',
      fine_amount: 20,
      license_plate: '6g6',
      name: 'rio',
    })

    console.log(car)

    expect(car).toHaveProperty('id')
  })
})
