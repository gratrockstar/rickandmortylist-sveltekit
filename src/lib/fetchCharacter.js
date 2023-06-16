import { PUBLIC_API_URL } from '$env/static/public';

const fetchCharacter = async (id) => {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query CharacterQuery($characterId: ID!) {
        character(id: $characterId) {
          gender
          id
          image
          location {
            dimension
            name
          }
          name
          origin {
            dimension
            name
          }
          species
          status
          type
          episode {
            name
            episode
            air_date
          }
        }
      }
      `, 
      variables: {
        characterId: id
      }
    }),
  };
  const response = await fetch(PUBLIC_API_URL, options);
  const data = await response.json();

  return data;

}

export default fetchCharacter;