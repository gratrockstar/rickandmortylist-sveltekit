import { PUBLIC_API_URL } from '$env/static/public';

const fetchCharacters = async (page, fetch) => {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query CharacterQuery($page: Int) {
        characters(page: $page) {
          results {
            gender
            id
            image
            name
            species
            status
            type
          }
          info {
            count
            next
            pages
            prev
          }
        }
      }
      `, 
      variables: {
        page: page
      }
    }),
  };
  const response = await fetch(PUBLIC_API_URL, options);
  const data = await response.json();

  return data;

}

export default fetchCharacters;