import React from "react";
import { useNavigate } from "react-router-dom";
import Ridge from "../../../assets/ridge.jpg";
import Hatu_peak from "../../../assets/Hatu_peak.jpg";
import Kufri from "../../../assets/Kufri.jpg";
import Chadwick_waterfall from "../../../assets/Chadwick_waterfall.jpg";
import Toy_train from "../../../assets/Toy_train.jpg";
import Narkanda from "../../../assets/Narkanda.jpg";

const Shimla = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Ridge",
      img: Ridge,
      decs: "The epicenter of all tourist activities in Shimla, the Ridge is one of the top tourist places in Shimla. Easily connected to all other important spots in Shimla such as the Mall Road, the Scandal Point, and the Lakkar Bazaar, the Ridge also serves as the location for the highly significant Summer Festival held every year in April or May. ",
    },
    {
      name: "Hatu Peak",
      img: Hatu_peak,
      decs: "Hatu Peak is located in the Shimla district. It is one of the highest peaks in the region, standing at an elevation of 3400 meters (11,152 ft) above sea level. The peak is surrounded by a dense forest of conifers, oaks, and maples. At the top of the peak is a small wooden temple called Hatu temple dedicated to Maa Kaali.",
    },
    {
      name: "Kufri",
      img: Kufri,
      decs: "Kufri is known for its tranquil surroundings, breathtaking views, and stunning locales, making it one of the best places to visit in Shimla. Often referred to as the Switzerland of the East, Kufri's mesmerizing beauty attracts tourists throughout the year.Kufri is ideal for adventure activities such as skiing and hiking, which should definitely be tried at least once when visiting.",
    },
    {
      name: "Chadwick Waterfall",
      img: Chadwick_waterfall,
      decs: "One of the most striking Shimla Tourist Places to visit, Chadwick Waterfall is tucked away in an undisturbed corner of Glen Forests. Though the height of the falls is only 100 meters, but the trek through the lush forests surrounding the area makes up for what it lacks in terms of grandeur.",
    },
    {
      name: "Toy Train Shimla",
      img: Toy_train,
      decs: "The Shimla Toy Train, officially the Kalka-Shimla Railway, is a historic narrow-gauge railway and UNESCO World Heritage Site known for its scenic journey through the Shivalik foothills, featuring tunnels, bridges, and charming stations, offering  a slow-paced, breathtaking experience from Kalka (Haryana) to Shimla (Himachal Pradesh)",
    },
    {
      name: "Narkanda",
      img: Narkanda,
      decs: "Narkanda is a town and a hill station. It is a nagar panchayat in Kumarsain subdivision of Shimla district. It is at an elevation of 2708 meters on the Indo-Tibet Road (NH 5) in Himachal Pradesh, India within a fir (abies pindrow) forest. It is surrounded by the Himalayan Range",
    },
  ];
  return (
    <>
      {/* ✅ Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="stats-section">
        <div className="stat-box">
          <h2>11</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>5,131 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>814,010</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>3,400m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Shimla </h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Shimla district, known as Simla district until 1972, is one of the
            twelve districts of the state of Himachal Pradesh in northern India.
            Its headquarters is the state capital of Shimla. Neighbouring
            districts are Mandi and Kullu in the north, Kinnaur in the east,
            Uttarakhand in the southeast, Solan to the southwest and Sirmaur in
            the south. The elevation of the district ranges from 987 metres
            (3,238 ft) to 4,500 metres (14,764 ft). Shimla district culturally
            is part of Mahasu region.
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Shimla's history began as a small village named Shyamala, discovered
            by the British in 1819 and developed into a major hill station,
            becoming the summer capital of British India in 1864, known for its
            colonial architecture and cool climate. Key developments include the
            first British summer home (1822) and the Kalka-Shimla Railway
            (1903). Post-independence, it served as Punjab's capital before
            becoming the capital of Himachal Pradesh. <br />
            <br />
            <h3 className="distric-page-h3">Demographics</h3>
            <br />
            <br />
            According to the 2011 census, the district had a population of
            814,010. This gives it a ranking of 483rd in India (out of a total
            of 640). The district has a population density of 159 inhabitants
            per square kilometre (410/sq mi). Its population growth rate over
            the decade 2001-2011 was 12.67%. Shimla has a sex ratio of 915
            females for every 1000 males, and a literacy rate of 83.64%. 24.74%
            of the population lives in urban areas. Scheduled Castes and
            Scheduled Tribes make up 26.51% and 1.08% of the population
            respectively.
            <br />
            <br />
          </p>{" "}
        </div>
      </div>
      <section>
        <div class="card-container">
          {places.map((places, index) => (
            <div class="card">
              <img src={places.img} alt={places.name} />
              <div class="card-content">
                <h3>{places.name}</h3>
                <p>{places.decs}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Shimla;
