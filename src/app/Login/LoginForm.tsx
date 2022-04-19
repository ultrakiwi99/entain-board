import {useState} from 'react';

export const LoginForm = ({updateName}: { updateName: (name: string) => void }) => {
  const [name, setName] = useState(undefined);

  const handleSubmit = async () => {
    updateName(name || '');
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
