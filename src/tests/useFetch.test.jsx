import { describe, it, expect, vi } from 'vitest'
import useFetch from '../useFetch'
import axios from 'axios'

describe('useFetch', () => {
	axios.get = vi.fn()
	vi.mock('axios', async () => {
		const actual = await vi.importActual('axios')
		return {
			...actual,
			get: vi.fn(),
		}
	})

	it('fetches data from the API', async () => {
		const products = [
			{ id: 1, name: 'Product 1' },
			{ id: 2, name: 'Product 2' },
		]
		// vi.mock('axios')
		axios.get.mockImplementationOnce(() => Promise.resolve({ data: products }))
		// axios.get.mockResolvedValue({ data: products })
		const { data, loading, error } = useFetch(
			'https://fakestoreapi.com/products'
		)
		expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products')
		expect(data).toEqual(products)
		expect(loading).toBe(false)
		expect(error).toBe(null)
	})

	// it('handles errors when fetching data', async () => {
	// 	const mockError = 'An error occurred'
	// 	axios.get.mockRejectedValueOnce(new Error(mockError))
	// 	axios.get.mockImplementationOnce(() => Promise.reject(mockError))
	// 	const { data, loading, error } = useFetch(
	// 		'https://fakestoreapi.com/products'
	// 	)
	// 	expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products')
	// 	expect(data).toBe(null)
	// 	expect(loading).toBe(false)
	// 	expect(error).toBe(mockError)
	// })
})
