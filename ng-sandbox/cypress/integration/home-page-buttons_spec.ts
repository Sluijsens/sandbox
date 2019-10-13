describe('Clicking on the Empty Page button', () => {
    it('should navigate to the empty page', () => {
        cy.visit('http://localhost:4200/');

        cy.contains('Empty Page').click();

        cy.contains('THERE IS NOTHING HERE! HENCE THE NAME EMPTY!!!');
    });
});
