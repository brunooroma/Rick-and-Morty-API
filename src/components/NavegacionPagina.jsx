import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const NavegacionPagina = () => {
  const { pagina, setPagina } = useContext(GlobalContext);

  return (
    <div className="d-flex align-items-center">
      {pagina === 1 ? (
        <div className="col-3 text-center">
        <p className="col-3"></p>
</div>
      ) : (
        <div className="col-3 text-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPagina(pagina - 1)}
        >
          Pagina {pagina - 1}
        </button>
</div>
      )}
<div className="col-6 text-center">
      <p className="mt-3">Pagina: {pagina}</p>
      </div>
<div className="col-3 text-center">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPagina(pagina + 1)}
      >
        Pagina {pagina + 1}
      </button>
      </div>
    </div>
  );
};

export default NavegacionPagina;
