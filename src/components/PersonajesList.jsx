import {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import NavegacionPagina from "./NavegacionPagina";
import Personaje from "./Personaje";

const PersonajesList = () => {
  const {personajes, loading} = useContext(GlobalContext)

  return (
    <div className="container">
      <NavegacionPagina />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {personajes.map((personaje) => {
            <hr />
            return (
              <div key={personaje.id} className="col-md-6 col-xl-4">
                <Personaje  personaje={personaje} />
              </div>
            );
          })}
        </div>
      )}
      <NavegacionPagina />
    </div>
  );
};

export default PersonajesList;
