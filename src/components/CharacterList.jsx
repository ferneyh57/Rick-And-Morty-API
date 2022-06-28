import { useState, useEffect } from "react";
import { getCharacters } from "../services/getCharacters";
import { Character } from "./Character";
import { NavPage } from "./navbar";

//Esta funcion carga la lista de personajes.
export function CharacterList() {
  const [loading, setLoading] = useState();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  // Peticion a la API y seteo de los datos.
  async function getData() {
    setLoading(true);
    const { results } = await getCharacters(page);
    setCharacters(results);
    setLoading(false);
  }
  // Funcion para el boton de back.
  const onBackClick = () => {
    page > 1 ? setPage(page - 1) : null;
  };
  // Funcion para el boton de next.
  const onNextClick = () => {
    page < 42 ? setPage(page + 1) : null;
  };

  /* Se llama a la funcion para cargar los datos
 Esto se hace cuando carga la pagina o existe un cambio en la paginacion */
  useEffect(() => {
    getData();
  }, [page]);

  return (
    // Llamado al navbar, recibe los callback para manipular el estado de la pagina.
    <div className="container">
      <NavPage
        page={page}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
      {loading ? (
        <div className="text-center display-1 py-1 bg-dark ">Loading...</div>
      ) : (
        // Se cargan los datos de los personajes
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-3" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                status={character.status}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
