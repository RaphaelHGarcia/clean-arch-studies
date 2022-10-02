import { deepFreeze } from "./object"

describe('object unit tests', () => {
  it('shold not freeze a scalar value', () => {
    const str = deepFreeze('a')
    expect(typeof str).toBe('string')
    
    const bool = deepFreeze(true)
    expect(typeof bool).toBe('boolean')

    const num = deepFreeze(13)
    expect(typeof num).toBe('number')
  })

  it('shold be a immutable object', () => {
    const obj = deepFreeze({
      prop1: 'value 1',
      deep: {
        prop2: 'value 2',
        prop3: new Date()
      }
    })

    expect(() => {
      (obj as any).prop1 = 'Editado'
    }).toThrow(`Cannot assign to read only property 'prop1' of object '#<Object>'`)

    expect(() => {
      (obj as any).deep.prop2 = 'Editado'
    }).toThrow(`Cannot assign to read only property 'prop2' of object '#<Object>'`)

    expect(obj.deep.prop3).toBeInstanceOf(Date)
  })
})