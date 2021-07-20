import React from "react";
import Background from  "./styles/404_background.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <React.Fragment>
      <div className="Main">
        <p>404: Not Found!</p>
				<img className="Background" src={Background} alt="Imagen 404" />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
