import { render, screen } from '@testing-library/react'
import ShowProduct from '../components/ShowProduct'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

describe('ShowProduct', () => {
	vi.mock('react-router-dom', async () => {
		const actual = await vi.importActual('react-router-dom')
		return {
			...actual,
			useOutletContext: () => ({
				cart: [],
				setCart: () => {},
			}),
		}
	})
	it('renders the product details', async () => {
		const product = {
			id: 1,
			name: 'Product 1',
			category: 'Category 1',
			price: 100,
		}
		render(<ShowProduct product={product} />)
		expect(screen.findByText('Product 1')).toBeInTheDocument()
		expect(screen.findByText('Category: Category 1')).toBeInTheDocument()
		expect(screen.findByText('$100')).toBeInTheDocument()
		expect(screen.findByText('Free Shipping')).toBeInTheDocument()
	})
})
