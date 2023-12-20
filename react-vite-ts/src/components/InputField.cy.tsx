import InputField from './InputField';

describe('InputField', () => {
  it('should mount with label', () => {
    cy.mount(
      <InputField
        name="name"
        label="Name"
        requiredMessage="Name is required"
        submitted={false}
      />
    );
  });

  it('when there is no value and form is submitted, should show a required message', () => {
    cy.mount(
      <InputField
        name="name"
        label="Name"
        value={''}
        requiredMessage="Name is required"
        submitted={true}
        onChange={cy.spy()}
      />
    );
  });
});
