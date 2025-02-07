import React, { Component } from "react";

class Habilidades extends Component {
  render() {
    if (this.props.habilidadesCompartidas && this.props.infoBasicaCurriculum) {
      var nombreSeccion = this.props.infoBasicaCurriculum.nombre_seccion.habilidades;
      var habilidades = this.props.habilidadesCompartidas.iconos.map(function (habilidad, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <div className="text-center skills-tile">
              <i className={habilidad.clase} style={{ fontSize: "220%" }}></i>
              <p
                className="text-center"
                style={{
                  fontSize: "60%",
                  marginTop: "8px",
                  fontWeight: "600",
                  color: "#ffffff",
                }}
              >
                {habilidad.nombre}
              </p>
            </div>
          </li>
        );
      });
    }

    return (
      <section id="habilidades">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{nombreSeccion}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{habilidades}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Habilidades;
