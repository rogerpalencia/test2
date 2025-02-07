import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.setTheme();
  }

  setTheme() {
    document.body.setAttribute("data-theme", "dark");
  }

  render() {
    if (this.props.sharedData) {
      var nombre = this.props.sharedData.nombre;
      this.titles = this.props.sharedData.titulos.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />;
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[nombre]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
