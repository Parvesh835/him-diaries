import React from "react";
import { useNavigate } from "react-router-dom";
import baba_balak_nath from "../../../assets/baba_bakal_nath.webp";
import Sujanpur_fort from "../../../assets/Sujanpur_fort.jpeg";
import Santoshi_mata from "../../../assets/Santoshi_mata.avif";
import River_Rafting from "../../../assets/River_Rafting.webp";
import Shani_dev_h from "../../../assets/Shani_dev_h.jpg";
import abv_stadium from "../../../assets/abv_stadium.png";
import Gasota_Mahadev_Mandir from "../../../assets/Gasota_Mahadev_Mandir.webp";
import Mattan_Sidh_hanuman_mandir from "../../../assets/Mattan_Sidh_hanuman_mandir.avif";
import Swimming_pool_gasota from "../../../assets/Swimming_pool_gasota.jpg";

const Hamirpur = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: " Baba Balak Nath, Deothsidh",
      img: baba_balak_nath,
      decs: "The main shrine ofBaba Balak Nath Templein Himachal Pradesh (HP) is located in a natural cave on the hill of Chakramoh village in Deothsidh, Hamirpur district, which is a famous pilgrimage center dedicated to Baba Balak Nath Ji, and another major temple.",
    },
    {
      name: "Sujanpur Tira Fort",
      img: Sujanpur_fort,
      decs: "Sujanpur Tira Fort is a historic palace-fort in Sujanpur, Hamirpur District, Himachal Pradesh, built by Raja Abhay Chand of the  Katoch dynasty in 1748 AD, known for its miniature painting heritage under Raja Sansar Chand and housing the Gauri Shankar Temple, offering cultural insights and views.",
    },
    {
      name: " Santoshi Mata, Ladraur",
      img: Santoshi_mata,
      decs: "Santoshi Mata temple is situated in Ladraur is a very famous temple among neighboring distric of Hamirpur. In this temple Santoshi Mata who is venerated as 'the Mother of Satisfaction' is worshiped there is also a statue of Lord Shiva. Santoshi Mata is  grand daughter of Lord Shiva. Santoshi mata is daughter of Lord Ganesha.",
    },
    {
      name: "River Rafting, Nadaun",
      img: River_Rafting,
      decs: "Nadaun is not very famous for River Rafting due to lack of knowledge that river rafting is available in Nadaun. In Nadaun river rafting is done on the Beas River which originates from the Vyas Kund glacier, near the Rohtang Pass in the Pir Panjal Range of the Himalayas.",
    },
    {
      name: "Shri Shani Dev Mandir, Lambloo",
      img: Shani_dev_h,
      decs: "In this temple is dedicated to Shani Dev who personifying the planet Saturn.known as the god of karma (actions), justice, time, and retribution, delivering consequences for deeds, and a key figure among the Navagrahas.Son of Surya  and Chhaya. In this temple there is two big Statue of Lord Hanuman and Shani Dev. Lord Hanuman helped Shani escape Ravana.",
    },
    {
      name: "Gasota Mahadev Mandir",
      img: Gasota_Mahadev_Mandir,
      decs: "Gasota Mahadev Mandir is an ancient and revered Hindu temple located in the quiet village of Gasota, approximately 8 km from Hamirpur town in Himachal Pradesh. The temple, dedicated to Lord Shiva, is known for its serene atmosphere and historical significance, with a naturally formed, self-manifested shivling",
    },
    {
      name: "Mattan Sidh hanuman mandir",
      img: Mattan_Sidh_hanuman_mandir,
      decs: "Mattan Siddha Hanuman Temple, locally known as Mattan Siddha Hanuman Temple View (Lambloo, Hamirpur), is a famous and Siddha Hanuman temple located in the Lambloo area of ​​Hamirpur district in Himachal Pradesh. The temple is known for its serene and pleasant atmosphere, where devotees come to have darshan of Hanumanji. ",
    },
    {
      name: "Swimming pool gasota",
      img: Swimming_pool_gasota,
      decs: "A swimming pool is located at the Gasota Mahadev Temple in the Hamirpur district of Himachal Pradesh. The temple is famous for its location, where, according to local legend, a Shiva lingam was found by a farmer. Information regarding the pool is associated with a past incident of a minor drowning at the site. ",
    },
    {
      name: "Atal Bihari Vajpayee Stadium",
      img: abv_stadium,
      decs: "Atal Bihari Vajpayee Stadium or Nadaun Stadium or Amtar Ground is a cricket stadium in Nadaun, Himachal Pradesh, India. The ground first held a List A match in January 2005 when Himachal Pradesh played the Services in the 2004/05 Ranji  Trophy one-day competition.",
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
          <h2>8</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>1,118 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>580,320</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>1,250m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Hamirpur</h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Hamirpur district is of Himachal Pradesh. The headquarters of the
            district are in the town of Hamirpur. With an area of 1,118 square
            kilometres or 432 square miles, it is the smallest district of
            Himachal Pradesh.The Army is the largest employer for residents of
            Hamirpur, who form large bulks of the Dogra Regiment, Jammu and
            Kashmir Rifles regiment, the Grenadiers, the Rajput regiment,
            Hodson's Horse and Scinde Horse.
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Carved out from Kangra District in 1972, Hamirpur District is
            closely associated with the Katoch dynasty. It was part of the old
            Jalandhar-Trigarta empire. Panin referred to the people of this
            kingdom as great warriors and fighters. The Katoch dynasty
            predominated during the period of Raja Hamir Chand, who ruled from
            1700 to 1740 and built the fort at Hamirpur The present town derived
            its name from this ruler. <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            Hamirpur district is situated between 31°25′N and 31°52′N and
            between 76°18′E and 76°44′E. Hamirpur (town), the district
            headquarters, is situated at an altitude of 780 m with the highest
            point being the Awah Devi peak at an altitude of 1250 m. The
            district shares borders with the neighboring districts of Mandi to
            the east, Bilaspur to the south, Una to the west, and Kangra to the
            north. The River Beas separates Hamirpur from Kangra and is a parent
            river to two tributaries, namely Maan Khad and Kunah Khad
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

export default Hamirpur;
