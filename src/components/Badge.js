import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css"; //se esta trayendo el .css pero no se asigna a ninguna variable.

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="" alt="Avatar" />
          <h1>
            Antonio
            <br />
            Berardi
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>Estudiante de Ingenieria</p>
          <div>Twitter @anto9_berar5</div>
        </div>

        <div className="Badge__footer">Platzi Conf</div>
      </div>
    );
  }
}

export default Badge;
