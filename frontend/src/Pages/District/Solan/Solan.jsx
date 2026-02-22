import React from "react";
import { useNavigate } from "react-router-dom";
import "../District.css";
import Shoolni_mata from "../../../assets/Shoolni_mata.jpeg";
import Jatoli_mahadev from "../../../assets/Jatoli_mahadev.jpeg";
import Karol_ka_Tibba from "../../../assets/Karol_ka_Tibba.jpg";
import Chail from "../../../assets/Chail.jpg";
import NB_waterfall from "../../../assets/NB_waterfall.jpeg";
import Arki_Fort from "../../../assets/Arki_Fort.jpg";
import Sanjeevni_Hanuman_Temple from "../../../assets/Sanjeevni_Hanuman_Temple.jpg";
import Mohan_Shakti_Heritage_Park from "../../../assets/Mohan_Shakti_Heritage_Park.jpg";
import Menri_Monastery from "../../../assets/Menri_Monastery.jpg";

const Solan = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Shoolni Mata",
      img: Shoolni_mata,
      decs: "The Shoolini Maata Temple, snuggled in an alcove of the borough of Solan, is dedicated to Goddess Shoolini - the Wielder of Spears, an incarnation of Maa Durga. The Shrine is one of the prime attractions of the town. It is believed that ages ago, the then hamlet of Solan was named after Devi Shoolini, the presiding deity of the temple. As per the legend, the temple has always been Her abode.",
    },
    {
      name: "Jatoli Mahadev Mandir",
      img: Jatoli_mahadev,
      decs: "Jatoli Mahadev Mandir (Jatoli Shiv Temple), located 8 km from Solan in Himachal Pradesh, India, is renowned as one of Asia's tallest Shiva temples, standing at roughly 122 feet. Built in the South-Dravidian style over 39 years, this landmark features a unique glass-like shivling, a natural cave where Swami Krishnananda Paramhans once meditated, and picturesque mountain surroundings.",
    },
    {
      name: "Karol ka Tibba",
      img: Karol_ka_Tibba,
      decs: "Karol Ka Tibba is the highest peak (~2,240-2,800 meters) located in Solan, Himachal Pradesh. This moderate 9 km trek starts from Chambaghat and leads to the Pandav Caves and Kali Temple. It offers panoramic views of Shimla and Churdhar Peak. The site is famous for its dense oak-pine forests, and the best time to visit is from March to November. ",
    },
    {
      name: "Chail",
      img: Chail,
      decs: "Chail is a serene hill station in Himachal Pradesh, India, located 45 km from Shimla and 38 km from Solan. Renowned for the historic Chail Palace, the world's highest cricket ground (2,444 m), and dense deodar forests, it offers a quieter alternative to Shimla. Key attractions include the Chail Wildlife Sanctuary and trekking, ideal for a 2-3 day trip.",
    },
    {
      name: "NB water fall",
      img: NB_waterfall,
      decs: "NB Waterfall Himachal Pradesh | NB Waterfall Jainager ...NB Waterfall (Nikku Baba Waterfall) is a serene,, natural, and free-entry,, scenic, destination located near Kiari village, Arki Tehsil, Solan district, Himachal Pradesh. Situated 4–5 km from Jainagar and 18 km from Solan, it offers a peaceful,, family-friendly picnic spot with mythological roots related to Saint Nikku Baba.",
    },
    {
      name: "Arki Fort",
      img: Arki_Fort,
      decs: "The Arki Fort is a historic hill fort located in Arki, Solan district, Himachal Pradesh, India. It was constructed in late 17th century and served as the palace and military stronghold of the rulers of the Baghal State (also known as Bhakhal). The Fort was captured by the Gurkhas in 1806. Rana Jagat Singh, the ruler of Baghal had to take refuge in Nalagarh.",
    },
    {
      name: "Mohan Shakti Heritage Park",
      img: Mohan_Shakti_Heritage_Park,
      decs: "Mohan Shakti Heritage Park, located near Solan on the Kalka-Shimla NH 22 in Himachal Pradesh, is a sprawling 40-acre, first-of-its-kind heritage site built by Kapil Mohan. It features a large hilltop temple adorned with Vedic, Ramayana, and Mahabharata art, alongside life-size statues, landscaped gardens, and a cultural museum, offering a blend of spirituality, culture, and nature.",
    },
    {
      name: "Sanjeevni Hanuman Temple",
      img: Sanjeevni_Hanuman_Temple,
      decs: "The legend says that during Ramayan, when lord Lakshman was injured and Hanuman ji was asked to carry sanjeevni for him, his one foot touched this mount top and hence people made a temple there dedicating to him.There are staircases and ramp to reach the top. It’s a good height of around 500ms to climb to reach the temple. You will take about 30-45 minutes to reach on the top.",
    },
    {
      name: "Menri Monastery",
      img: Menri_Monastery,
      decs: "Menri Monastery (Tibetan: སྨན་རི་, Wylie: sman ri — 'medicine mountain') is the name of a Bon monastery in Tibet that has been refounded in India. The name derives from the medicinal plants and medicinal springs on the mountain. Menri became the leading Bon monastery in the Tibetan cultural region. The abbot of Menri is recognized as the spiritual leader of Bon.",
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
          <h2>6</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>1,936 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>580,320</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>2,280m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Solan </h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Solan is a district in Himachal Pradesh, India, established on
            September 1, 1972, serving as a major industrial and agricultural
            hub known as the "Mushroom City of India" and "City of Red Gold"
            (tomatoes). Located 46 km from Shimla, it is considered the "Gateway
            to Himachal Pradesh". Key towns include Kasauli, Baddi, and
            Nalagarh, with an area of 1936 sqkm
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            The territory of the present-day district comprises the territories
            of the erstwhile princely states of Baghal, Baghat, Kunihar, Kuthar,
            Mangal, Beja, Mahlog, Nalagarh and parts of Keonthal and Koti and
            hilly areas of the erstwhile Punjab State which were merged with
            Himachal Pradesh on 1 November 1966. This district came into
            existence on 1 September 1972. The district was carved out by
            amalgamating Solan and Arki tehsils of the erstwhile Mahasu district
            and Kandaghat and Nalagarh tehsils of the erstwhile PEPSU. The name
            of the district as well as its headquarters comes from Mata Shoolini
            Devi. It's said that she saved Solan from being destroyed.
            <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            According to the 2011 census the district has a population of
            580,320, giving it a ranking of 532nd in India (out of a total of
            640).The district has a population density of 300 inhabitants per
            square kilometre (780/sq mi). Its population growth rate over the
            decade 2001-2011 was 15.9%. Solan has a sex ratio of 880 females for
            every 1000 males, and a literacy rate of 85.02%. 17.60% of the
            population lives in urban areas. Scheduled Castes and Scheduled
            Tribes make up 28.35% and 4.42% of the population respectively.At
            the 2011 census, 39.47% of the population identified their language
            as Hindi, 29.70% named it Pahari, 8.92% Punjabi, 6.45% "Other" Hindi
            (including 5.61% Handuri, 2.58% Baghati, 2.35% Nepali and 1.42%
            Bhojpuri.)
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

export default Solan;
