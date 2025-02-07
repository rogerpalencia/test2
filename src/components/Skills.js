import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.nombre_seccion.habilidades;
      var skills = this.props.sharedSkills.iconos.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <div className="text-center skills-tile">
              <i className={skills.clase} style={{ fontSize: "220%" }}></i>
              <p
                className="text-center"
                style={{
                  fontSize: "60%",
                  marginTop: "8px",
                  fontWeight: "600",
                  color: "#ffffff",
                }}
              >
                {skills.nombre}
              </p>
            </div>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
