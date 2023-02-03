import React from "react";
import { useEffect, useState } from "react";
import Personaje from "./Personaje";

const NavegacionPagina = ({pagina, setPagina}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Pagina: {pagina}</p>
      <button className="btn btn-primary btn-sm" onClick={() => setPagina(pagina+1)}>Pagina {pagina+1}</button>
    </div>
  );
};

const PersonajesList = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
      const data = await response.json();
      setPersonajes(data.results);
      setLoading(false);
    };
    fetchData();
  }, [pagina]);

  return (
    <div className="container">
      <NavegacionPagina pagina={pagina} setPagina={setPagina}/>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {personajes.map((personaje) => {
            return (
              <div className="col-md-4">
                <Personaje key={personaje.id} personaje={personaje} />
              </div>
            );
          })}
        </div>
      )}
      <NavegacionPagina pagina={pagina} setPagina={setPagina}/>
    </div>
  );
};

export default PersonajesList;
