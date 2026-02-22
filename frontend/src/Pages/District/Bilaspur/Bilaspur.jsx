import React from "react";
import { useNavigate } from "react-router-dom";
import NaninaDevi from "../../../assets/NaninaDevi.jpg";
import GovindSagar from "../../../assets/GovindSagar.jpg";
import Markandeya from "../../../assets/Markandeya.webp";
import VyashCave from "../../../assets/VyashCave.jpg";
import KolDam from "../../../assets/KolDam.webp";
import Dholra from "../../../assets/Dholra.jpg";
import LakshmiNarayan from "../../../assets/LakshmiNarayan.jpg";
import Bandla from "../../../assets/Bandla.jpeg";
import Panyala from "../../../assets/Panyala.jpg";
import Rukmai_kund from "../../../assets/Rukmai_kund.webp";
import Water_sports_b from "../../../assets/Water_sports_b.webp";
import Paragliding from "../../../assets/Paragliding.avif";

const Bilaspur = () => {
  const navigate = useNavigate(); // ✅ back navigation

  const places = [
    {
      name: "Shri Naina Devi ji",
      img: NaninaDevi,
      decs: "Located in the Shivalik Hills of Bilaspur district in Himachal Pradesh, the Naina Devi Temple is a famous Shaktipeeth, where the eyes of Goddess Sati fell. The temple is located at an altitude of 3,535 feet above sea level and offers cable car access. It draws huge crowds during the Chaitra, Shravan, and Ashwin Navratris. ",
    },
    {
      name: "Gobind Sagar Lake",
      img: GovindSagar,
      decs: "Govind Sagar Jheel (Lake) in Bilaspur, Himachal Pradesh, is a vast, man-made reservoir on the Sutlej River, formed by the iconic Bhakra Dam, known for its stunning scenery, vital role in irrigation/power, and water sports like boating, kayaking, and water skiing, attracting tourists with its serene waters, rich biodiversity, and opportunities for adventure and relaxation amidst rolling hills.",
    },
    {
      name: "Markandeya",
      img: Markandeya,
      decs: "The Markandeya Temple, located about 20–25 km from Bilaspur in Himachal Pradesh (near Ghagus-Brahmpukhar road in Markand village), is a revered shrine dedicated to the sage Markandeya. It is famously associated with the legend of Rishi Markandeya, who worshipped Lord Shiva to overcome his destined short life. ",
    },
    {
      name: "Vyas Cave",
      img: VyashCave,
      decs: "Vyas Cave is another famous destination in Bilaspur that holds significant importance and attracts a large number of tourists from every corner of the country. This cave is situated at the foot of the city and is famous for the revered sage Vyasa, who has meditated in this cave for several years. Saint Vyas wrote the epic Mahabharat and the name of the town Bilaspur can be traced to the name of Rishi Vyas, who was originally called Vyaspur.",
    },
    {
      name: "Koldam",
      img: KolDam,
      decs: "Koldam Dam in Bilaspur, Himachal Pradesh is an 800-megawatt hydroelectric project built by NTPC Limited on the Satluj River, roughly 18 km from Bilaspur town. Operational since 2015, this facility is a significant tourist attraction offering scenic views of blue waters surrounded by mountains. ",
    },
    {
      name: "Baba Nahar Singh Temple, Dholra",
      img: Dholra,
      decs: "The Baba Nahar Singh Temple, located in Dholra village near Bilaspur, Himachal Pradesh, is a revered shrine dedicated to a local deity known as a Pratyaksh Devta (living god). Instead of an idol, the temple enshrines Baba Nahar Singh’s Kharaun (sacred wooden slippers), with major, lively fairs held on Tuesdays from mid-May to mid-June. ",
    },
    {
      name: "Bandla Dhar",
      img: Bandla,
      decs: "Bandla Dhar is a prominent, scenic hilltop in Bilaspur, Himachal Pradesh, located at an altitude of approximately \(1,350\) to \(2,100\) meters. It is renowned for its panoramic views of the Dhauladhar ranges, Gobind Sagar Lake, and Bilaspur town. It serves as a major paragliding site in the region, often compared for its potential to top sites in Turkey",
    },
    {
      name: "Laxmi Narayan Temple",
      img: LakshmiNarayan,
      decs: "The Laxmi Narayan Temple in Bilaspur, Himachal Pradesh, located opposite the ISBT, is a prominent 18th-century shrine built in the Shikhara style with white marble. Dedicated to Lord Vishnu and Goddess Lakshmi, it features, manicured gardens, and peaceful surroundings, offering a spiritual retreat near the Bilaspur bus stand. ",
    },
    {
      name: "Dwadash Jyotirling Shiv Dham, Panyala",
      img: Panyala,
      decs: "Dwadash Jyotirling Shiv Dham in Panyala, near Ghumarwin (Bilaspur district, Himachal Pradesh), is a unique temple complex that replicates all 12 major Jyotirlingas of Lord Shiva in one location. It serves as a significant, accessible spiritual center for devotees to experience the essence of the primary Indian Jyotirlinga sites. ",
    },
    {
      name: "Rukmani Kund",
      img: Rukmai_kund,
      decs: "Shri Rukmani Kund is a mythological and natural water reservoir located in the Bilaspur district of Himachal Pradesh. The site was selected for the 2012-2013 HGKK (Every Village Story) program. Located 28 km from Bilaspur, it offers a unique blend of spiritual tranquility and natural beauty. ",
    },
    {
      name: "Water Sports",
      img: Water_sports_b,
      decs: "Bilaspur, Himachal Pradesh, is a hub for water sports, primarily centered around the expansive Gobind Sagar Lake, a reservoir of the Bhakra Dam. Offering activities like jet skiing, speed boating, kayaking, surfing, and houseboats, it operates heavily in October-November. The Regional Water Sports Centre and local adventure groups provide training in kayaking, rowing, and water skiing. ",
    },
    {
      name: "Paragliding",
      img: Paragliding,
      decs: "Paragliding in Bilaspur, Himachal Pradesh, centers around the Bandla Dhar (Bandla top), offering exceptional, safe, and long-duration flights, often considered superior for training due to the nearby Govind Sagar Lake, say Kahlur Adventures and the Government of Himachal Pradesh. ",
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
          <h2>4</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>1,167 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>381,956</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>1980m</h2>
          <p>Highest Peak</p>
        </div>
      </div>

      <div>
        <div className="dist-page-head">
          <h1>Bilaspur</h1>
        </div>

        <div className="distic-page">
          <p>
            Bilaspur district is a district of Himachal Pradesh, India. Its capital is in the town of Bilaspur. The district has an area of 1,167 km2, and a population of 381,956. As of 2011 it is the third least populous district of Himachal Pradesh (out of 12), after Lahul and Spiti and Kinnaur.
            <br /><br />
            <h3 className="distric-page-h3">History</h3>
            <br /><br />
            The area that is now Bilaspur District was formerly known as Kahlur, a princely state of British India. The ruler acceded to the Government of India on 12 October 1948, and Bilaspur was made an Indian state under a chief commissioner. The state of Bilaspur was merged with Himachal Pradesh on 1 July 1954 and became Bilaspur District.
            <br /><br />
            <h3 className="distric-page-h3">Geography</h3>
            <br /><br />
            Bilaspur district has a total area of 1,161 square kilometers, making it the smallest district in Himachal Pradesh. It covers the same territory as the princely state did in 1947, and there have been no changes in its boundaries since then.
          </p>
        </div>
      </div>

      <section>
        <div className="card-container">
          {places.map((place, index) => (
            <div className="card" key={index}>
              <img src={place.img} alt={place.name} />
              <div className="card-content">
                <h3>{place.name}</h3>
                <p>{place.decs}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Bilaspur;
