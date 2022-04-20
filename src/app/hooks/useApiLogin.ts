export const useApiLogin = () => {
  return async (name: string) => {
    const result = await fetch('http://localhost:3999/login', {
      method: 'POST',
      body: JSON.stringify({name}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return result.ok;
  }
}
