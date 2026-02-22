import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Forests from "../assets/Forests.jpg";
import Snowy_mountains from "../assets/Snowy_mountains.webp";
import Temple from "../assets/Temple.jpg";
import senery from "../assets/senery.jpg";
const Home = () => {
  return (
    <>
      <div className="Main-content">
        <div className="Main-Heading">
          <h1>
            Explore the Beauty of the <br />
            Himachal Pradesh
            <br />
          </h1>
          <p>
            Get ready to know new-new unexplored and explored places of Himachal
            Pradesh.
          </p>
        </div>
      </div>
      {/* area & population & hieast peak & no of districts */}
      <div className="stats-section">
        <div className="stat-box">
          <h2>12</h2>
          <p>Districts</p>
        </div>

        <div className="stat-box">
          <h2>55,673 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>7M+</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>6,816m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* About Himachal Pardesh */}
      <section className="about-section">
        {/* LEFT SIDE IMAGES */}
        <div className="about-images">
          <img src={Forests} alt="Himachal Mountains" />
          <img src={Snowy_mountains} alt="Hill Town" />
          <img src={Temple} alt="Nature" />
          <img src={senery} alt="Snow Trek" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <span className="about-tag">ABOUT HIMACHAL PRADESH</span>

          <h2>Where the Mountains Meet the Sky</h2>

          <p>
            Himachal Pradesh, meaning "Land of Snowy Mountains", is a northern
            Indian state nestled in the western Himalayas. From the bustling
            lanes of Shimla to the serene monasteries of Spiti, every district
            offers a unique glimpse into the magnificent Himalayan life.
          </p>

          <p>
            With its diverse geography spanning from subtropical plains to
            permanent glaciers, Himachal is home to some of the most spectacular
            landscapes on Earth.
          </p>

          <div className="about-features">
            <div className="feature">
              🌲
              <div>
                <h4>Pristine Nature</h4>
                <p>Dense forests, rivers, and meadows.</p>
              </div>
            </div>

            <div className="feature">
              ❄️
              <div>
                <h4>Snow Adventures</h4>
                <p>Skiing, trekking and winter magic.</p>
              </div>
            </div>

            <div className="feature">
              🛕
              <div>
                <h4>Rich Culture</h4>
                <p>Ancient temples and vibrant festivals.</p>
              </div>
            </div>

            <div className="feature">
              📸
              <div>
                <h4>Scenic Beauty</h4>
                <p>Every turn is postcard worthy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About him pradesh endes hare */}

      <section className="explore">
        <p className="explore-tag">WAYS TO EXPLORE</p>
        <h2 className="explore-title">Curated Experiences Await</h2>
        <p className="explore-desc">
          Whether you seek adventure, spirituality, or simply peace – Himachal
          has an experience crafted just for you.
        </p>

        <div className="explore-cards">
          {/* Card 1 */}
          <div className="explore-card  adventure">
            <div className="overlay">
              <h3>Adventure Trails</h3>
              <p>
                Trek through ancient routes, conquer mountain passes, and
                discover hidden valleys.
              </p>
              <Link to="/adventure" className="learn-btn">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="explore-card spiritual">
            <div className="overlay">
              <h3>Spiritual Journeys</h3>
              <p>
                Visit sacred temples, ancient monasteries, and experience the
                divine energy.
              </p>
              <Link to="/Temples" className="learn-btn">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
