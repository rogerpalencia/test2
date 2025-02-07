import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  aplicarIdiomaSeleccionado(idiomaSeleccionado, idIconoIdiomaOpuesto) {
    this.cambiarIdiomaActivo(idIconoIdiomaOpuesto);
    document.documentElement.lang = idiomaSeleccionado;
    var rutaCurriculum =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.cargarCurriculumDesdeRuta(rutaCurriculum);
  }

  cambiarIdiomaActivo(idIconoIdiomaOpuesto) {
    var idIconoIdiomaSeleccionado =
      idIconoIdiomaOpuesto === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(idIconoIdiomaOpuesto)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(idIconoIdiomaSeleccionado)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.cargarDatosCompartidos();
    this.aplicarIdiomaSeleccionado(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  cargarCurriculumDesdeRuta(ruta) {
    $.ajax({
      url: ruta,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  cargarDatosCompartidos() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.aplicarIdiomaSeleccionado(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
             <span
      className="iconify language-icon mr-5"
      data-icon="twemoji-flag-for-flag-united-states"
      data-inline="false"
      id={window.$primaryLanguageIconId}
    ></span>
          </div>
          <div
            onClick={() =>
              this.aplicarIdiomaSeleccionado(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-venezuela"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
