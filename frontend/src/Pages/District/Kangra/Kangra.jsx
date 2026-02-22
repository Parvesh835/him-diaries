import React from "react";
import { useNavigate } from "react-router-dom";
import Jwala_devi from "../../../assets/Jwala_devi.jpg";
import kangra_fort from "../../../assets/kangra_fort.webp";
import Chamunda_devi from "../../../assets/Chamunda_devi.jpg";
import Baijnath from "../../../assets/Baijnath.jpg";
import Rock_Cut_Temple from "../../../assets/Rock_Cut_Temple.webp";
import Triund_Trek from "../../../assets/Triund_Trek.webp";
import Kareri_lake from "../../../assets/Kareri_lake.webp";
import Guna_devi from "../../../assets/Guna_devi.jpg";
import McLeod_Ganj from "../../../assets/McLeod_Ganj.jpg";
import Bir_Billing from "../../../assets/Bir_Billing.jpg";
import Baglamukhi_temple from "../../../assets/Baglamukhi_temple.jpg";
import Dhauladhar_national_park from "../../../assets/Dhauladhar_national_park.avif";

const Kangra = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: " Jwala Devi Temple",
      img: Jwala_devi,
      decs: "The Jwalamukhi temple dedicated to the goddess Jwala Devi, located in the Jawalamukhi town. It is known for its eternal flame emanating from a rock fissure on top of which the main shrine has been built. It is considered one of the major Shakti pitha shrines. ",
    },
    {
      name: " Kangra Fort ",
      img: kangra_fort,
      decs: "The Kangra Fort, also known as Nagarkot, is India's largest Himalayan fort, built by the Katoch dynasty, dating back to ancient times (linked to Mahabharata's Trigarta Kingdom), located on a cliff between the Manjhi and Banganga rivers in Himachal Pradesh..",
    },
    {
      name: "Chamunda Devi Temple",
      img: Chamunda_devi,
      decs: "The Chamunda Devi Temple in Kangra, is a revered Hindu shrine dedicated to Chamunda, a fierce form of Goddess Durga,  located amidst the Himalayas near Palampur and Dharamshala, known for its ancient history, spiritual significance as a Shakti Peetha where the Goddess slew demons, and its serene setting on the Baner River, attracting pilgrims and nature lovers alike.",
    },
    {
      name: " Baijnath Temple",
      img: Baijnath,
      decs: "Baijnath Temple is a Nagara style Hindu temple situated in a small town of Baijnath located in Kangra District,  and was built in 1204 AD by two local merchants named Ahuka and Manyuka. It is dedicated to Shiva as Vaidyanath , meaning  ‘the lord of physicians’. The temple is protected and conserved by the Archaeological Survey of India (ASI).",
    },
    {
      name: "Masroor Rock-cut Temple",
      img: Rock_Cut_Temple,
      decs: "The Masrur Temples, also referred to as Masroor Temples or Rock-cut Temples at Masrur, is an early 8th-century complex  of rock-cut Hindu temples in the Kangra Valley of Beas River in Himachal Pradesh, India. The temples face northeast, towards the Dhauladhar range of the Himalayas.",
    },
    {
      name: "Triund Trek",
      img: Triund_Trek,
      decs: "Triund is a meadow in the mountains above McLeodganj, in the Kangra district of Himachal Pradesh, India. Triund is  located on a spur along the southern aspect of the Dhauladhar range, and is at a height of about 2,800-2,900 m. It is known as a scenic spot, the end point of a popular trek, and a stage in climbing mountains and passes of the Dhauladhar range.",
    },
    {
      name: "Kareri Lake Trek",
      img: Kareri_lake,
      decs: "Kareri Lake is at elevation 2,934 metres (9,626 ft) above the sea level. Snow melting from the Dhauladhar range serves as the source of the lake and a stream, Nyund is the outflow. Since the source is fresh melting snow and the lake is shallow, water visibility is very high and in most places, the lake bed can be seen.",
    },
    {
      name: "Guna Devi Temple Trek",
      img: Guna_devi,
      decs: "The Guna Devi Temple trek near McLeod Ganj is a beautiful, easy-to-moderate day hike through deodar forests, offering panoramic views of the Dhauladhar mountains and the Kangra Valley, starting typically from Naddi village or  Dharamkot; it's a spiritual journey to a sacred Goddess Kali shrine, perfect for nature lovers, photographers, and spiritual seekers seeking peace amidst nature.",
    },
    {
      name: "McLeod Ganj",
      img: McLeod_Ganj,
      decs: "McLeod Ganj or McLeodganj is a suburb of Dharamshala, in the Kangra district of Himachal Pradesh, India. It is  known as 'Little Lhasa' as the Tibetan government-in-exile is headquartered here and there is a significant population of Tibetans in the region.",
    },
    {
      name: "Bir-Billing",
      img: Bir_Billing,
      decs: "Bir Billing in Himachal Pradesh, India, is globally famous as the 'Paragliding Capital of India,' offering thrilling aerial sports from Billing (take-off) to Bir (landing) alongside ecotourism, Tibetan culture (monasteries), tea plantations, and trekking, attracting adventure seekers and spiritual tourists with its stunning Dhauladhar Himalayan views.",
    },
    {
      name: "Baglamukhi Temple",
      img: Baglamukhi_temple,
      decs: "The Bagalamukhi Temple is a Hindu temple located in Bankhandi, Kangra district. It is dedicated to the Hindu goddess Bagalamukhi, one of the ten Tantric Mahavidya goddesses. The goddess, also known as Peetambhara, is associated with the colour yellow.",
    },
    {
      name: "Dhauladhar National Park",
      img: Dhauladhar_national_park,
      decs: " Dhauladhar National Park is situated in Gopalpur village, Kangra district, Himachal Pradesh in India, en route the Dharmshala – Palampur road. It is surrounded by Dhauladhar Range of the Himalayas. The zoo is adorned with maple trees, horse chestnut trees, chil and greenery.",
    },
  ];
  return (
    <>
      {/* ✅ Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {/* Population Ext. section. */}
      <div className="stats-section">
        <div className="stat-box">
          <h2>12</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>5,739 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>1,510,075</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>5,982m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Kangra </h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Kangra District is the most populous district of Himachal Pradesh,
            India, with Dharamshala serving as its administrative headquarters.
            Known for its scenic beauty, rich history, and spiritual
            significance, the district is nestled in the Dhauladhar mountain
            ranges of the Himalayas
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Kangra is known for having one of the oldest serving Royal Dynasty
            in the world, the Katoch of the Kangra State. In 1758, Raja Ghamand
            Chand was appointed nazim or governor of Jullundur Doab under the
            Afghans. Ghamand Chand was a brave and strong ruler who restored the
            prestige of Kangra. As he was unable to capture Kangra Fort, he
            built another fort at Tira Sujanpur on the left bank of the Beas,
            almost opposite to Alampur on a hill overlooking the town. <br />
            <br />
            <h3 className="distric-page-h3">Demographics</h3>
            <br />
            <br />
            According to the 2011 census, Kangra district had a population of
            1,510,075. The district has a population density of 263 inhabitants
            per square kilometre (680/sq mi). Its population growth rate over
            the decade 2001-2011 was 12.77%. 5.71% of the population lives in
            urban areas. Kangra district has a sex ratio of 1012 females per
            1000 males and a literacy rate of 85.67%. Scheduled Castes and
            Scheduled Tribes made up 21.15% and 5.60% of the population
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

export default Kangra;
