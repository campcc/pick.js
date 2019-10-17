import pick from '../src'

describe('pick', () => {
	test('should create a shallow copy', () => {
		const campcc = { name: 'campcc' }
		const shallowCopy = pick(campcc, [])
		expect(shallowCopy).toStrictEqual(campcc)
		expect(shallowCopy).not.toBe(campcc)
	})
	
	test('should pick one property which is passed in', () => {
		const campcc = { name: 'campcc', age: 18 }
		expect(pick(campcc, 'age')).toStrictEqual({ age: 18 })
	})

	test('should pick properties which are passed in', () => {
		const campcc = { name: 'campcc', age: 18, career: 'engineer' }
		expect(pick(campcc, ['name', 'career'])).toStrictEqual({ name: 'campcc', career: 'engineer' })
	})

	test('should throw a type error', () => {
		const campcc = { name: 'campcc' }
		expect(() => {
			pick(campcc, {})
		}).toThrow('properties expect an array or a string.')
	})
})
