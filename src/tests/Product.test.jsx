import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Product from '../components/Product'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'

describe('Product', () => {
	const product = {
		id: 1,
		title: 'Product 1',
		image: 'https://example.com/product1.jpg',
		rating: {
			count: 10,
			rate: 4,
		},
	}

	it('renders the product image', () => {
		render(
			<MemoryRouter>
				<Product product={product} />
			</MemoryRouter>
		)
		const image = screen.getByAltText('Product 1')
		expect(image).toBeInTheDocument()
		expect(image).toHaveAttribute('src', 'https://example.com/product1.jpg')
	})

	it('renders the product title', () => {
		render(
			<MemoryRouter>
				<Product product={product} />
			</MemoryRouter>
		)
		expect(screen.getByText('Product 1')).toBeInTheDocument()
	})

	it('renders the product rating votes', () => {
		render(
			<MemoryRouter>
				<Product product={product} />
			</MemoryRouter>
		)
		expect(screen.getByText('Votes: 10')).toBeInTheDocument()
	})

	it('links to the product details page', () => {
		render(
			<MemoryRouter>
				<Product product={product} />
			</MemoryRouter>
		)
		expect(screen.getByRole('link')).toHaveAttribute('href', '/products/1')
	})
})
