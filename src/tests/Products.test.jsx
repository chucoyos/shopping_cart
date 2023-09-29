import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '../components/Products'
import { describe, it, expect, vi, afterEach } from 'vitest'
import '@testing-library/jest-dom'
import axios from 'axios'

// describe('Real fetched Products', () => {
// 	afterEach(() => {
// 		vi.resetAllMocks()
// 	})

// 	vi.mock('react-router-dom', async () => {
// 		const actual = await vi.importActual('react-router-dom')
// 		return {
// 			...actual,
// 			useOutletContext: () => ({
// 				url: 'https://fakestoreapi.com/products/',
// 			}),
// 		}
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

////////////////////////// 3rd try //////////////////////////
describe('Mocked Products', () => {
	afterEach(() => {
		vi.resetAllMocks()
	})
	it('fetches and renders mock products', async () => {
		const products = [
			{
				id: 1,
				title: 'First mock product',
				description: 'First mock product description',
				category: 'mock category',
				price: 100,
				rating: {
					rate: 4.5,
					count: 100,
				},
			},
			{
				id: 2,
				title: 'Second mock product',
				description: 'Second mock product description',
				category: 'mock category',
				price: 200,
				rating: {
					rate: 4.5,
					count: 100,
				},
			},
		]
		vi.mock('react-router-dom', async () => {
			const actual = await vi.importActual('react-router-dom')
			return {
				...actual,
				useOutletContext: () => ({
					url: 'https://fakestoreapi.com/products/',
				}),
			}
		})
		vi.mock('axios')
		axios.get.mockImplementationOnce(() => Promise.resolve({ data: products }))
		render(
			<MemoryRouter>
				<Products />
			</MemoryRouter>
		)
		const items = await screen.findAllByRole('heading')
		expect(items).toHaveLength(2)
		expect(await screen.findByText('First mock product')).toBeInTheDocument()
		expect(await screen.findByText('Second mock product')).toBeInTheDocument()
		screen.debug()
	})
})
