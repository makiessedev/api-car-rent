import 'reflect-metadata'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateCategory } from './create-category'
import { InMemoryCategoryRepository } from '../../repositories/in-memory/in-memory-categories-repository'
import { ICategoriesRepository } from '../../repositories/interfaces/categories-repository'
import { AppError } from '../../../../shared/error/app-error'

let createCategory: CreateCategory
let categoriesRepository: ICategoriesRepository

describe('Crete category', () => {
  beforeEach(() => {
    categoriesRepository = new InMemoryCategoryRepository()
    createCategory = new CreateCategory(categoriesRepository)
  })

  it('Should be able to create a category', async () => {
    const category = { name: 'name teste', description: 'description teste' }

    await createCategory.execute(category)

    const categoryCreated = await categoriesRepository.findByName(category.name)

    expect(categoryCreated).toHaveProperty('id')
  })

  it('Should not be able to create category with name exists', async () => {
    const category = { name: 'name teste', description: 'description teste' }

    expect(async () => {
      await createCategory.execute(category)
      await createCategory.execute(category)
    }).rejects.toBeInstanceOf(AppError)
  })
})
