import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDistrictByName } from "../../service/districtApi";
import "./DistrictDetail.css";

const DistrictDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [district, setDistrict] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistrict = async () => {
      try {
        const data = await getDistrictByName(name);
        setDistrict(data);
      } catch (err) {
        setError(err.message || "Failed to load district details");
      } finally {
        setLoading(false);
      }
    };

    fetchDistrict();
  }, [name]);

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!district) return <div className="error-message">District not found</div>;

  return (
    <div className="district-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      {/* Hero Section */}
      <div
        className="detail-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${district.img})` }}
      >
        <div className="detail-hero-content">
          <h1 className="detail-title">{district.name}</h1>
          <p className="detail-subtitle">{district.desc.substring(0, 50)}...</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        {district.tehsils && (
          <div className="stat-card">
            <h3>Tehsils</h3>
            <p>{district.tehsils}</p>
          </div>
        )}
        {district.area && (
          <div className="stat-card">
            <h3>Area</h3>
            <p>{district.area}</p>
          </div>
        )}
        {district.population && (
          <div className="stat-card">
            <h3>Population</h3>
            <p>{district.population}</p>
          </div>
        )}
        {district.highestPeak && (
          <div className="stat-card">
            <h3>Highest Peak</h3>
            <p>{district.highestPeak}</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="detail-content-wrapper">
        <div className="desc-section">
          <h2>Overview</h2>
          <p className="main-desc">{district.desc}</p>
        </div>

        {/* Dynamic Sections */}
        <div className="dynamic-sections">
          {district.sections.map((section, index) => (
            <div key={index} className="info-block">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attractions */}
      {district.attractions && district.attractions.length > 0 && (
        <section className="attractions-section">
          <h2 className="section-heading">Top Attractions</h2>
          <div className="attractions-grid">
            {district.attractions.map((place, index) => (
              <div className="attraction-card" key={index}>
                <div className="attraction-img-wrapper">
                  <img src={place.img} alt={place.name} />
                </div>
                <div className="attraction-info">
                  <h3>{place.name}</h3>
                  <p>{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DistrictDetail;
