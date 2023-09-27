import { render, screen } from '@testing-library/react'
import ShowProduct from '../components/ShowProduct'
import { describe, it, expect, vi, afterEach } from 'vitest'
import '@testing-library/jest-dom'

describe('ShowProduct', () => {
	const product = {
		id: 1,
		name: 'Product 1',
		category: 'Category 1',
		price: 100,
	}
	it('renders the product details', () => {
		// vi.mock('react-router-dom', async () => {
		// 	const actual = await vi.importActual('react-router-dom')
		// 	return {
		// 		...actual,

		// 		error: null,
		// 		loading: false,
		// 		data: product,
		// 		useOutletContext: () => ({
		// 			cart: [],
		// 			setCart: () => {},
		// 		}),
		// 	}
		// })
		vi.mock('../useFetch', async () => {
			const actual = await vi.importActual('../useFetch')
			return {
				...actual,
				useFetch: () => ({
					error: null,
					loading: false,
					data: product,
					useOutletContext: () => ({
						url: 'https://fakestoreapi.com/products/',
						cart: [{}],
						setCart: () => {},
					}),
				}),
			}
		})
		afterEach(() => {
			vi.resetAllMocks()
		})
		render(<ShowProduct product={product} />)
		expect(screen.getByText('Product 1')).toBeInTheDocument()
		expect(screen.getByText('Category: Category 1')).toBeInTheDocument()
		expect(screen.getByText('$100')).toBeInTheDocument()
		expect(screen.getByText('Free Shipping')).toBeInTheDocument()
	})
})
