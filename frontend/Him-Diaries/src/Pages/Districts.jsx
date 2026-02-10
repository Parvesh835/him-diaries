import React from "react";
import { Link } from "react-router-dom";
import Bilaspur from "../assets/Bilaspur.jpg";
import Mandi from "../assets/Mandi.jpeg";
import Chamba from "../assets/Chamba.jpg";
import Hamirpur from "../assets/Hamirpur.jpg";
import Kangra from "../assets/Kangra.jpg";
import Kinnaur from "../assets/Kinnaur.jpg";
import Kullu from "../assets/Kullu.jpg";
import Sirmaur from "../assets/Sirmaur.jpg";
import Shmila from "../assets/Shmila.jpg";
import Solan from "../assets/Solan.jpg";
import Una from "../assets/Una.jpg";
import Lahaul_Spiti from "../assets/Lahaul_Spiti.jpg";
const Districts = () => {
  const districts = [
    {
      name: "Bilaspur",
      img: Bilaspur,
      desc: "Bilaspur is a serene town known for Gobind Sagar Lake, temples, rich culture, and scenic natural beauty.",
      area: "1,167 sq km",
      population: "3.82 Lakh",
      link: "/District/Bilaspur",
    },
    {
      name: "Mandi",
      img: Mandi,
      desc: "Mandi is a historic town famous for ancient temples, river view, vibrant culture, and its spiritual and natural charm.",
      area: "3,950 sq km",
      population: "10.0 Lakh",
      link: "/District/Mandi",
    },
    {
      name: "Chamba",
      img: Chamba,
      desc: "Chamba is a picturesque town known for ancient temples, rich heritage, traditional art, and breathtaking mountain landscapes.",
      area: "6,522 sq km",
      population: "5.19 Lakh",
      link: "/District/Chamba",
    },
    {
      name: "Hamirpur",
      img: Hamirpur,
      desc: "Hamirpur is covered by Shivalik Ranges and is located in the Lower West Central Outer Himalayas.",
      area: "1,118 sq km",
      population: "4.55 Lakh",
      link: "/District/Hamirpur",
    },
    {
      name: "Kangra",
      img: Kangra,
      desc: "Kangra, also known as Nagarkot, extends from the Jalandhar Doab into the southern Himalayan ranges.",
      area: "5,739 sq km",
      population: "15.10 Lakh",
      link: "/District/Kangra",
    },
    {
      name: "Kinnaur",
      img: Kinnaur,
      desc: "Kinnaur is an entirely mountainous district drained by tributaries of the Sutlej River.",
      area: "6,401 sq km",
      population: "0.84 Lakh",
      link: "/District/Kinnaur",
    },
    {
      name: "Kullu",
      img: Kullu,
      desc: "Kullu lies on the bank of the Beas River at an average elevation of 1,278 m.",
      area: "5,503 sq km",
      population: "4.38 Lakh",
      link: "/District/Kullu",
    },
    {
      name: "Sirmaur",
      img: Sirmaur,
      desc:"Sirmaur is a serene, largely rural, and mountainous district in southern Himachal Pradesh, known for its, temples, trekking spots, and offbeat scenic beauty.",
      area: "2,825 sq km",
      population: "5.30 Lakh",
      link: "/District/Sirmour",
    },
    {
      name: "Shimla",
      img: Shmila,
      desc: "Shimla is the capital of Himachal Pradesh and a former summer capital of British India.",
      area: "5,131 sq km",
      population: "8.14 Lakh",
      link: "/District/Shimla",
    },
    {
      name: "Solan",
      img: Solan,
      desc: "Solan lies between Chandigarh and Shimla on NH-5 at an elevation of 1,550 m.",
      area: "1,936 sq km",
      population: "5.80 Lakh",
      link: "/District/Solan",
    },
    {
      name: "Una",
      img: Una,
      desc: "Una has an average elevation of 369 metres and experiences high summer temperatures.",
      area: "1,540 sq km",
      population: "5.21 Lakh",
      link: "/District/Una",
    },
    {
      name: "Lahul Spiti",
      img: Lahaul_Spiti,
      desc: "Lahaul and Spiti is a high-altitude district connected to Manali via Rohtang Pass.",
      area: "13,835 sq km",
      population: "0.19 Lakh",
      link: "/District/LahulSpiti",
    },
  ];

  return (
    <>
      <div className="distict-sec1">
        <div className="dist-head"> Districts of Himachal Pradesh </div>
        <div className="dist-cont">
          <p>
            {" "}
            Himachal Pradesh is a picturesque hilly state in India. This state
            has mountains, rivers, temples, and a rich cultural heritage. The
            state has many districts, and every district has something different
            in terms of its nature, mountains, and traditions.
            <br />
            <br />
            Shimla and Solan are known for colonial flavor and favorable
            climatic conditions. Kullu and Manali are preferred by visitors due
            to snow-capped mountains and adventure sports. Chamba and Kangra are
            recognized by their temples, art, and history. Mandi and Bilaspur
            are situated on river valleys and possess great significance from
            the point of culture.
            <br />
            <br />
            The districts of Lahaul and Spiti, as well as Kinnaur, exhibit the
            cold deserts, Buddhist monasteries, and breathtaking mountain
            scenery. The districts of Hamirpur, Una, and Bilaspur portray the
            lower hills with an amalgam of the past and the modern.
            <br />
            <br />
            There is a uniqueness for every district of the state of Himachal
            Pradesh; hence, the state is a diverse and very alluring place.{" "}
          </p>{" "}
        </div>
      </div>

      <section>
        <div className="district-section-heading">Districts</div>
        <div class="card-container">
          {districts.map((district, index) => (
            <div class="card">
              <img src={district.img} alt={district.name} />

              <div class="card-content">
                <h3>{district.name}</h3>
                <p>{district.desc}</p>

                <p className="meta">
                  <b>📐:</b> {district.area}
                </p>
                <p className="meta">
                  <b>👥:</b> {district.population}
                </p>

                <Link to={district.link}>
                  <button>Explore</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Districts;
