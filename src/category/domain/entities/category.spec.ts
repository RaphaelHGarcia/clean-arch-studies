import { CategoryEntity, CategoryEntityProps } from './category.entity'

describe('Category Unit Tests', () => {

  test('constructor of Category', () => {
    const created_at = new Date()
    const props: CategoryEntityProps = {
      name: 'Movie',
      description: 'desc',
      is_active: true,
      created_at
    }

    const category = new CategoryEntity(props)

    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'desc',
      is_active: true,
      created_at
    })
  })

})