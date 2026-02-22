import React from "react";
import "./Home.css";
import Forests from "../assets/Forests.jpg";
import Snowy_mountains from "../assets/Snowy_mountains.webp";
import Temple from "../assets/Temple.jpg";
import senery from "../assets/senery.jpg";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
