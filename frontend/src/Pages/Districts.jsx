import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { getAllDistricts } from "../service/districtApi";
import "./District.css"; // Ensure this CSS file exists and is updated

const Districts = () => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const data = await getAllDistricts();
        setDistricts(data);
      } catch (error) {
        console.error("Failed to fetch districts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDistricts();
  }, []);

  const handleExplore = (districtName) => {
    if (!user) {
      toast.error("Please log in to explore districts.");
      navigate("/Login");
    } else {
      navigate(`/District/${districtName}`);
    }
  };

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="districts-page">
      <div className="districts-hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Himachal</h1>
          <p className="hero-subtitle">
            Land of Gods, majestic mountains, and timeless beauty.
          </p>
        </div>
      </div>

      <div className="districts-intro">
        <div className="intro-text">
          <p>
            Himachal Pradesh is a tapestry of diverse landscapes, from the
            snow-clad peaks of Kinnaur and Lahaul-Spiti to the lush green valleys
            of Kangra and Chamba. Each of its 12 districts offers a unique story,
            waiting to be explored.
          </p>
        </div>
      </div>

      <section className="districts-grid-section">
        <h2 className="section-heading">The 12 Districts</h2>
        <div className="districts-grid">
          {districts.map((district, index) => (
            <div
              className="district-card"
              key={index}
              onClick={() => handleExplore(district.name)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-image-wrapper">
                <img
                  src={district.img}
                  alt={district.name}
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="explore-text">Explore</span>
                </div>
              </div>
              <div className="card-details">
                <h3 className="card-title">{district.name}</h3>
                <p className="card-desc">{district.desc.substring(0, 80)}...</p>
                <div className="card-meta">
                  <span>🏔️ {district.highestPeak || "Peaks"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Districts;
