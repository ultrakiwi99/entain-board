import {useState} from 'react';
import {useApiLogin} from "../hooks/useApiLogin";
import './LoginForm.css';

export const LoginForm = ({updateName}: { updateName: (name: string) => void }) => {
  const [name, setName] = useState(undefined);
  const apiLogin = useApiLogin();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (name) {
      const loginSuccess = await apiLogin(name);
      if (loginSuccess) {
        localStorage.setItem('entan-board-username', name);
        updateName(name || '');
      }
    }
  };

  return (
    <div className="backdrop">
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username..."
          defaultValue={name}
          onInput={(event: any) => setName(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
