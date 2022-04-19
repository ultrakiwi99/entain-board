import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {LoginForm} from './LoginForm';

jest.mock("../hooks/useApiLogin", () => ({
  useApiLogin: () => () => true
}));

describe('LoginForm', () => {
  it('renders form with user name input and login button', () => {
    render(<LoginForm updateName={(() => {
    })}/>);

    const form = screen.getByTestId('login-form');
    const input = screen.getByPlaceholderText('Enter username...');
    const saveButton = screen.getByRole('button');

    expect(form).toBeTruthy();
    expect(input).toBeTruthy();
    expect(saveButton).toBeTruthy();
  });

  it('runs updateName handler on submit', async () => {
    const newName = 'NewUserName';
    let updated: string;

    render(
      <LoginForm
        updateName={(name: string) => {
          updated = name;
        }}
      />,
    );

    fireEvent.input(screen.getByRole('textbox'), {target: {value: newName}});
    await waitFor(async () => {
      fireEvent.submit(screen.getByTestId('login-form'));
      await waitFor(() => expect(updated).toBe(newName));
    });

  });
});
