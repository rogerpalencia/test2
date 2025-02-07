import React, { Component } from "react";
import Typical from "react-typical";

class Encabezado extends Component {
  titulos = [];

  constructor() {
    super();
    this.establecerTema();
  }

  establecerTema() {
    document.body.setAttribute("data-theme", "dark");
  }

  render() {
    if (this.props.datosCompartidos) {
      var nombre = this.props.datosCompartidos.nombre;
      this.titulos = this.props.datosCompartidos.titulos.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const AnimacionTipoTituloEncabezado = React.memo(() => {
      return <Typical className="estilos-titulo" steps={this.titulos} loop={50} />;
    }, (props, prevProp) => true);

    return (
      <header id="inicio" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="fila alineador" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <span className="iconify icono-encabezado" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[nombre]} wrapper="p" />
              </h1>
              <div className="contenedor-titulo">
                <AnimacionTipoTituloEncabezado />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Encabezado;
