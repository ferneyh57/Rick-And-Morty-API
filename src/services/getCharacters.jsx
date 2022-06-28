// Peticion fetch a la api, recibe el numero de la pagina.
export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
    (res) => res.json()
  );
};
