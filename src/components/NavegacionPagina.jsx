import './NavegacionPagina.css'
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const NavegacionPagina = () => {
  const { pagina, setPagina } = useContext(GlobalContext);

  let estiloBotonPagina = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="d-flex align-items-center">
      {pagina === 1 ? (
        <div className="col-3 text-center">
          <p></p>
        </div>
      ) : (
        <div className="col-3 text-center">
          <button
            className="botones"
            style={estiloBotonPagina}
            onClick={() => setPagina(pagina - 1)}
          >
            Pagina {pagina - 1}
          </button>
        </div>
      )}
      <div className="col-6 text-center">
        <p className="mt-3">Pagina: {pagina}</p>
      </div>
      {pagina === 42 ? (
        <div className="col-3 text-center">
          <p></p>
        </div>
      ) : (
        <div className="col-3 text-center">
          <button
            className="botones"
            style={estiloBotonPagina}
            onClick={() => setPagina(pagina + 1)}
          >
            Pagina {pagina + 1}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavegacionPagina;
