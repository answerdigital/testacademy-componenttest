import Welcome from './Welcome';

describe('Welcome', () => {
  it('should mount with greeting', () => {
    cy.mount(
      <Welcome username="Test User" onLogout={cy.spy().as('onLogout')} />
    );
  });

  it('when the log out button is clicked, onLogout should be called', () => {
    cy.mount(
      <Welcome username="Test User" onLogout={cy.spy().as('onLogout')} />
    );
  });
});
