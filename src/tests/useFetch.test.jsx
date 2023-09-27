import { describe, it, expect, vi, afterEach } from 'vitest'
import useFetch from '../useFetch'

describe('useFetch', () => {
	vi.mock('react-router-dom', async () => {
		const actual = await vi.importActual('react-router-dom')
		return {
			...actual,
			useOutletContext: () => ({
				url: 'https://fakestoreapi.com/products/',
			}),
		}
	})
	afterEach(() => {
		vi.resetAllMocks()
	})

	it('fetches data from the API', async () => {
		const mockData = [
			{ id: 1, name: 'Product 1' },
			{ id: 2, name: 'Product 2' },
		]
		vi.mock('../useFetch', async () => {
			const actual = await vi.importActual('../useFetch')
			return {
				...actual,
				useFetch: () => ({
					data: mockData,
					loading: false,
					error: null,
				}),
			}
		})
		const { data, loading, error } = useFetch(
			'https://fakestoreapi.com/products'
		)
		expect(useFetch).toHaveBeenCalledWith('https://fakestoreapi.com/products')
		expect(data).toEqual(mockData)
		expect(loading).toBe(false)
		expect(error).toBe(null)
	})

	// it('handles errors when fetching data', async () => {
	// 	const mockError = 'An error occurred'
	// 	axios.get.mockRejectedValueOnce(new Error(mockError))
	// 	const { data, loading, error } = useFetch(
	// 		'https://fakestoreapi.com/products'
	// 	)
	// 	expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products')
	// 	expect(data).toBe(null)
	// 	expect(loading).toBe(false)
	// 	expect(error).toBe(mockError)
	// })
})
