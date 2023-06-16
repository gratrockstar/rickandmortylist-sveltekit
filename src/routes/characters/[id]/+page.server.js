import fetchCharacter from '$lib/fetchCharacter.js';

export async function load({ params, fetch }) {
  const data = await fetchCharacter(params.id, fetch);
  return data;
}