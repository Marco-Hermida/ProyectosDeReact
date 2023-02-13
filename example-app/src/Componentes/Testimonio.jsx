import React from "react";
import "../css/Testimonio.css"

function Testimonio(){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require("../imagenes/testimonio-emma.png")}
      alt="Foto de Emma"/>

      <div className="contenedor-texto-testimonio">
        <p className="Nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de software en Spotify</p>
        <p className="texto-testimonio">Siempre he tenido pobremas para aprender javascript pero gracias a slapchop ahora my vida is more facinante</p>
      </div>


    </div>
  );

}

export default Testimonio;