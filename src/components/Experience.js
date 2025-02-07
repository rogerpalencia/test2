import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.nombre_seccion.experiencia;

      // Diccionario de iconos según la tecnología principal
      const techIcons = {
        "PHP": "fab fa-php",
        "JavaScript": "fab fa-js",
        "React": "fab fa-react",
        "Angular": "fab fa-angular",
        "Python": "fab fa-python",
        "MySQL": "fas fa-database",
        "PostgreSQL": "fas fa-database",
        "WordPress": "fab fa-wordpress",
        "Bootstrap": "fab fa-bootstrap",
        "Laravel": "fab fa-laravel",
        "Figma": "fab fa-figma",
      };

      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.tecnologias;
        const mainTechnologies = work.tecnologia_principal;

        // Seleccionar icono basado en la primera tecnología principal
        const mainTechIcon =
          techIcons[mainTechnologies[0]] || "fas fa-laptop-code"; 

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.anos}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className={`${mainTechIcon} experience-icon`}></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.titulo}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.empresa}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
