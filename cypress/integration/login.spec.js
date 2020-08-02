const sizes = ["iphone-x", "ipad-2", [1200, 800]]

describe("Vis regression login page", () => {
	before(() => {
		cy.visit("http://zero.webappsecurity.com/index.html")
		cy.get("#signin_button").click()
		cy.get("#user_login").type("test")
		cy.get("#user_password").type("test")
		cy.get("#user_remember_me").click()
	})

	sizes.forEach((size) => {
		it(`snapshot for ${size} should match`, () => {
			cy.setResolution(size)
			cy.matchImageSnapshot()
		})
	})
})
