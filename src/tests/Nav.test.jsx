import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Nav from '../components/Nav'

describe('App', () => {
	it('renders App component', () => {
		render(<Nav />)
		expect(screen.getByText('Hello World')).toBeInTheDocument()
	})
})
