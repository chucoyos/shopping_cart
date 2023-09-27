import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '../components/Products'
import { describe, it, expect, vi, afterEach } from 'vitest'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

// describe('Real fetched Products', () => {
// 	vi.mock('react-router-dom', async () => {
// 		const actual = await vi.importActual('react-router-dom')
// 		return {
// 			...actual,
// 			useOutletContext: () => ({
// 				url: 'https://fakestoreapi.com/products/',
// 			}),
// 		}
// 	})
// 	afterEach(() => {
// 		vi.resetAllMocks()
// 	})
// 	it('should render real fetched products', async () => {
// 		render(
// 			<MemoryRouter>
// 				<Products />
// 			</MemoryRouter>
// 		)
// 		expect(
// 			await screen.findByText(
// 				'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
// 			)
// 		).toBeInTheDocument()
// 	})
// })

////////////////////////// 1st try //////////////////////////

// describe('Mocked Products', () => {
// 	vi.mock('react-router-dom', async () => {
// 		const actual = await vi.importActual('react-router-dom')
// 		return {
// 			...actual,
// 			useOutletContext: () => ({
// 				url: 'https://fakestoreapi.com/products/',
// 			}),
// 		}
// 	})
// 	vi.mock('../useFetch', async () => {
// 		const actual = await vi.importActual('../useFetch')

// 		return {
// 			...actual,

// 			useFetch: () => ({
// 				data: [
// 					{
// 						id: 1,
// 						title: 'First mock product',
// 						description: 'First mock product description',
// 						category: 'mock category',
// 					},
// 				],
// 				loading: false,
// 				error: null,
// 			}),
// 		}
// 	})
// 	afterEach(() => {
// 		vi.resetAllMocks()
// 	})

// 	it('should render mock products', async () => {
// 		render(
// 			<MemoryRouter>
// 				<Products />
// 			</MemoryRouter>
// 		)
// 		expect(await screen.findByText('First mock product')).toBeInTheDocument()
// 	})
// })

////////////////////////// 2nd try //////////////////////////

describe('Mocked Products', () => {
	vi.mock('react-router-dom', async () => {
		const actual = await vi.importActual('react-router-dom')
		return {
			...actual,
			useOutletContext: () => ({
				url: 'https://fakestoreapi.com/products/',
			}),
		}
	})
	vi.mock('../useFetch', async () => {
		const products = [
			{
				id: 1,
				title: 'First mock product',
				description: 'First mock product description',
				category: 'mock category',
				price: 100,
			},
		]
		const actual = await vi.importActual('../useFetch')

		return {
			...actual,

			useFetch: () => ({
				loading: false,
				error: null,
				data: products,
			}),
		}
	})
	afterEach(() => {
		vi.resetAllMocks()
	})

	it('should render mock products', async () => {
		render(
			<MemoryRouter>
				<Products />
			</MemoryRouter>
		)
		expect(await screen.findByText('First mock product')).toBeInTheDocument()
	})

	// it('links to product page', async () => {
	// 	const user = userEvent.setup()
	// 	render(
	// 		<MemoryRouter>
	// 			<Products />
	// 		</MemoryRouter>
	// 	)
	// 	const link = await screen.findByText(
	// 		'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
	// 	)
	// 	await user.click(link)
	// })
})
