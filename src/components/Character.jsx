// Esta funcion carga cada personaje.
export function Character(character) {
  return (
    <div className="text-center p-6">
      <h5 className="">{character.name}</h5>
      <img src={character.image} alt={character.name} className="img-fluid " />
      <p>{`Status: ${character.status}`}</p>
    </div>
  );
}
export default Character;
