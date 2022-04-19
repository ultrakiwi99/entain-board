export const useApiLogin = async (name: string) => {
  const result = await fetch('http://localhost:3999', {
    method: 'POST',
    body: JSON.stringify({name})
  });

  return result.ok;
}
