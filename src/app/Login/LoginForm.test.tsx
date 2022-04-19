import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders form with user name input and login button', () => {
    render(<LoginForm />);

    const form = screen.getByTestId('login-form');
    const input = screen.getByPlaceholderText('Enter username...');
    const saveButton = screen.getByRole('button');

    expect(form).toBeTruthy();
    expect(input).toBeTruthy();
    expect(saveButton).toBeTruthy();
  });

  it('runs updateName handler on submit', () => {
    expect.hasAssertions();

    const newName = 'NewUserName';

    render(
      <LoginForm
        updateName={(name: string) => {
          expect(name).toBe(newName);
        }}
      />,
    );

    const form = screen.getByTestId('login-form');
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: newName } });
    fireEvent.submit(form);
  });
});
