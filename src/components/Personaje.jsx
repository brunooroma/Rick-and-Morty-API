import React from "react";

const Personaje = ({personaje}) => {
  return (
      <div className="text-center mt-4">
        <h3 className="tituloPersonaje pt-3">{personaje.name}</h3>
        <img className='img-fluid rounded-pill' src={personaje.image} alt={personaje.name} />
        <div>
        {personaje.species === 'unknown' ? <p>Desconocido</p> : <p>{personaje.species}</p>}
        {personaje.status === 'unknown' ? <p>Desconocido</p>:<p>{personaje.status}</p>}
      </div>
      </div>
  );
};

export default Personaje;
