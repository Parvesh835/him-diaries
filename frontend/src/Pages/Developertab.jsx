import React from "react";
import "./Developertab.css";
import Parvesh from "../assets/Parvesh.jpeg";
import APSir from "../assets/A.PSir.jpeg";
import Piyush from "../assets/Piyush.jpeg";
import Tamanna from "../assets/Tamanna.jpeg";
import {Mail} from "lucide-react";
const Developertab = () => {
  return (
    <div className="dev-page">
      <div className="dev-container">
        <div className="dev-card">
          <img src={APSir} alt="Guide" />
          <h2>Er.Amar Paul Singh</h2>
          <p className="role"> Guide</p><br />
          <p> <Mail size={18} /> <p >Singhamarpaul1@gmail.com</p></p>

        </div>

        <div className="dev-card">
          <img src={Parvesh} alt="Developer" />
          <h2>Parvesh Sharma</h2>
          <p className="role"> Developer</p><br />
          <p> <Mail size={18} /> <p >Parveshsharma835@gmail.com</p></p>

        </div>

        <div className="dev-card">
          <img src={Piyush} alt="Developer" />
          <h2>Piyush Malik</h2>
          <p className="role">Developer</p><br />
          <p> <Mail size={18} /> <p >Piyushmalik870@gmail.com</p></p>

        </div>

        <div className="dev-card">
          <img src={Tamanna} alt="Developer" />
          <h2>Tamanna Dhiman</h2>
          <p className="role">Developer</p><br />
          <p> <Mail size={18} /> <p>Tamannadhiman19@gmail.com</p> </p>
        </div>
      </div>
      <div className="dev-description">
        <h3>Thank you for visiting Him-Diaries. Your support and love inspire us to explore and share more beautiful places.</h3>
        </div>
    </div>
  );
};

export default Developertab;
