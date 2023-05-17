import { describe, expect, it } from 'vitest'
import { Category } from './Category'

describe('Create Category', () => {
  it('Should be able to create a category', () => {
    const category = new Category({ name: 'Kia', description: 'Luxos' })

    console.log(category)

    expect(category).toHaveProperty('id')
    expect(category).toHaveProperty('created_at')
  })
})
