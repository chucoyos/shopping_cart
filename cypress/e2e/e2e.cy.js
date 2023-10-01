/* eslint-disable no-undef */

describe('Shopping cart', () => {
	it('adds products to cart and checkout', () => {
		cy.visit('http://localhost:5173/')
		cy.contains('Mens Casual').click()
		cy.contains('button', 'ADD TO CART').click()
		cy.contains('1')
		cy.contains('button', 'CONTINUE SHOPPING').click()
		cy.contains(/Sandisk/i).click()
		cy.contains('button', 'ADD TO CART').click()
		cy.contains('2')
		cy.contains('button', 'CONTINUE SHOPPING').click()

		cy.contains(/opna/i).click()
		cy.contains('button', 'ADD TO CART').click()
		cy.contains('3')
		cy.contains('button', 'CONTINUE SHOPPING').click()

		cy.contains(/categories/i).click()
		cy.contains(/jewelry/i).click()
		cy.contains('Solid Gold').click()
		cy.contains('button', 'ADD TO CART').click()
		cy.contains('4')

		cy.contains('button', 'VIEW CART').click()
		cy.contains('h4', 'My Cart').should('be.visible')
		cy.wait(1000)

		cy.contains(/remove/i).click()
		cy.contains('3')
		cy.wait(1000)

		cy.contains('button', 'CHECKOUT').click()
	})
})
