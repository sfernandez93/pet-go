/* eslint-disable no-undef */


it('adds a todo', () => {
    cy.visit('https://pet-go-9200b.web.app');
    cy.get('[data-cy=login-button]').click()
    // cy.get('.task-input').type('hacer mas test{enter}');
    // cy.get('.task-item').should('have.length', 1)
  })
  
//   it('check task', () => {
//     cy.get('.task-status').click();
//     cy.get('.task-filters > button:nth-child(3)').click();
//     cy.get('.task-item').should('have.length', 1);
//   })
  