// Navbar de la pagina, recibe el numero de pagina y los eventos de los botones.
export function NavPage({ page, onBackClick, onNextClick }) {
  return (
    <header className={"navbar sticky-top bg-dark "}>
      <button className="btn btn-light " onClick={() => onBackClick()}>
        Back
      </button>
      <p>page: {page}</p>
      <button className="btn btn-light " onClick={() => onNextClick()}>
        Next
      </button>
    </header>
  );
}
export default NavPage;
