import fetchCharacters from '$lib/fetchCharacters.js';

export async function load({ fetch }) {
  const data = await fetchCharacters(1, fetch);
  return data.data.characters;
}