import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '../components/Products'
import { describe, it, expect, vi, afterEach } from 'vitest'
import '@testing-library/jest-dom'

describe('Products', () => {
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
	it('should render Products component', async () => {
		render(
			<MemoryRouter>
				<Products />
			</MemoryRouter>
		)
		expect(
			await screen.findByText(
				'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
			)
		).toBeInTheDocument()
	})
})
