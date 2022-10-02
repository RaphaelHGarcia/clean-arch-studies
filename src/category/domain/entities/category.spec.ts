import { omit } from 'lodash'
import { CategoryEntity } from './category.entity'

describe('Category Unit Tests', () => {

  test('constructor of Category', () => {
    let category = new CategoryEntity({ name: 'Movie' })
    const categoryWithoutDesc = omit(category.props, 'created_at')
    expect(categoryWithoutDesc).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
    })

    category = new CategoryEntity({ name: 'Movie', description: 'my desc' })
    const categoryWithDesc = omit(category.props, 'created_at')
    expect(categoryWithDesc).toStrictEqual({
      name: 'Movie',
      description: 'my desc',
      is_active: true,
    })

    category = new CategoryEntity({ name: 'Movie', is_active: false })
    const categoryWithActive = omit(category.props, 'created_at')
    expect(categoryWithActive).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: false,
    })

    category = new CategoryEntity({ name: 'Movie' })
    expect(category.props.created_at).toBeInstanceOf(Date)
  })

  test('id field', () => {
    let category = new CategoryEntity({ name: 'Movie' })
    expect(category.id).not.toBeNull()
  })

  test('getter of name prop', () => {
    const category = new CategoryEntity({ name: 'Movie' })
    expect(category.name).toBe('Movie')
  })

  test('getter and setter of description prop', () => {
    let category = new CategoryEntity({ name: 'Movie' })
    expect(category.description).toBeNull()

    category = new CategoryEntity({ name: 'Movie', description: 'My description' })
    expect(category.description).toBe('My description')

    category['description'] = 'Desc updated'
    expect(category.description).toBe('Desc updated')

    category['description'] = undefined
    expect(category.description).toBeNull()
  })

  test('getter and setter of is_active prop', () => {
    let category = new CategoryEntity({ name: 'Movie' })
    expect(category.is_active).toBeTruthy()

    category = new CategoryEntity({ name: 'Movie', is_active: false })
    expect(category.is_active).toBeFalsy()

    category['is_active'] = undefined
    expect(category.is_active).toBeTruthy()

    category['is_active'] = false
    expect(category.is_active).toBeFalsy()
  })

  test('getter of created_at prop', () => {
    let category = new CategoryEntity({ name: 'Movie' })
    expect(category.created_at).toBeInstanceOf(Date)

    const created_at = new Date()
    category = new CategoryEntity({ name: 'Movie', created_at })
    expect(category.created_at).toBe(created_at)
  })

  test('update name and description of category', () => {
    let category = new CategoryEntity({ name: 'Movie', description: 'desc' })
    category.update('Movie 1', 'updated desc')

    expect(category.name).toBe('Movie 1')
    expect(category.description).toBe('updated desc')

    expect(() => {
      category.update('', 'updated desc')
    }).toThrow('Field name is required')
    
    expect(() => {
      category.update(null, 'updated desc')
    }).toThrow('Field name is required')
    
    expect(() => {
      category.update(undefined, 'updated desc')
    }).toThrow('Field name is required')
  })

  test('activate/deactivate category', () => {
    const category = new CategoryEntity({ name: 'Movie' })
    expect(category.is_active).toBeTruthy()

    category.deactivate()
    expect(category.is_active).toBeFalsy()
    
    category.activate()
    expect(category.is_active).toBeTruthy()
  })
})