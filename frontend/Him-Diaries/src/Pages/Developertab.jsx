import React from "react";
import "./Developertab.css";
import Parvesh from "../assets/Parvesh.jpeg";
import APSir from "../assets/A.PSir.jpeg";
import Piyush from "../assets/Piyush.jpeg";
import Tamanna from "../assets/Tamanna.jpeg";
const Developertab = () => {
  return (
    <div className="dev-page">
      <div className="dev-container">
        <div className="dev-card">
          <img src={APSir} alt="Guide" />
          <h2>Er.Amar Paul Singh</h2>
          <p className="role"> Guide</p>
        </div>

        <div className="dev-card">
          <img src={Parvesh} alt="Developer" />
          <h2>Parvesh Sharma</h2>
          <p className="role"> Developer</p>
        </div>

        <div className="dev-card">
          <img src={Piyush} alt="Developer" />
          <h2>Piyush Malik</h2>
          <p className="role">Developer</p>
        </div>

        <div className="dev-card">
          <img src={Tamanna} alt="Developer" />
          <h2>Tamanna Dhiman</h2>
          <p className="role">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Developertab;
