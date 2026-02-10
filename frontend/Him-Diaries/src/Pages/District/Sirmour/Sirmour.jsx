import React from "react";
import { useNavigate } from "react-router-dom";
import Nahan from "../../../assets/Nahan.webp";
import Renuka_Lake from "../../../assets/Renuka_Lake.jpg";
import Gurdwara_Paonta_Sahib from "../../../assets/Gurdwara_Paonta_Sahib.webp";
import Churdhar_Peak from "../../../assets/Churdhar_Peak.webp";
import Jaitak_Fort from "../../../assets/Jaitak_Fort.png";
import Haripurdhar from "../../../assets/Haripurdhar.jpg";

const Sirmour = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Churdhar Peak",
      img: Churdhar_Peak,
      decs: "Churdhar Peak, meaning 'Bangle of Snow' (Churichandni), is the highest peak in Himachal Pradesh's Sirmaur district (11,965 ft), known for its stunning views of the Himalayas, including Badrinath and Kedarnath, and the Gangetic plains, making it a popular but challenging trek through dense forests, glaciers, and rocky terrains, featuring the ancient Shirgul Devta Temple at its base. ",
    },
    {
      name: "Nahan",
      img: Nahan,
      decs: "Nahan is a town located in the Sirmaur district of the Indian state of Himachal Pradesh. It serves as the administrative headquarters of Sirmaur district. It was formerly the capital of the princely state of Sirmur, during the British Raj in Colonial India. Nahan is also known as the 'Town of Ponds'.",
    },
    {
      name: "Renuka Lake",
      img: Renuka_Lake,
      decs: "Renuka lake is in the Sirmaur district of Himachal Pradesh in India and it is 672 m above the sea level. It is the largest lake in Himachal Pradesh, with a circumference of about 3214 m. This lake was named after the goddess Renuka and is a designated Ramsar site since November 2005.",
    },
    {
      name: "Gurdwara Paonta Sahib",
      img: Gurdwara_Paonta_Sahib,
      decs: "This Gurdwara was built in memory of Guru Gobind Singh, the tenth guru of sikhs. The gurdwara enjoys a high historic and religious importance among the followers of the Sikh religion world over. The Gurudwara has a palanquin 'Palki' made of puregold, donated by devotees.",
    },
    {
      name: "Jaitak Fort",
      img: Jaitak_Fort,
      decs: " Jaitak Fort is situated about 15 km from district headquarters Nahan in District Sirmour in the Himachal Pradesh state of India. Situated 1479 meters above sea level, fort Jaitak is notable due to its location and affords a view of the surrounding countryside due to its strategic setting.",
    },
    {
      name: "Haripurdhar",
      img: Haripurdhar,
      decs: "Haripurdhar is a small town in Sirmour, Himachal Pradesh, India. The town is situated on a high ridge overlooking a deep valley at an altitude of 2500 metres above sea level. It was earlier known as 'Dungbhangayani' and was the summer capital of Sirmour. In the months of May and June temperatures reach 0 to 5°C. In winters there is a view of snowfall.",
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
          <h2>7</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>2,825 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>529,855</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>3,647m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1> Sirmaur </h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Sirmaur district is the southernmost district of Himachal Pradesh,
            northern India. It is largely mountainous and rural, with 90% of its
            population living in villages. Some of its towns include the capital
            Nahan, Paonta Sahib, Lana palar, Tuheri, Bhawan, Sirmaur, Shamra,
            UchaTikker and Suketi, the latter known for Shivalik Fossil Park. It
            is culturally part of the historical Mahasu region <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            There are seven tehsils in this district: Nahan, Renuka, Kamrau,
            Shillai, Rajgarh, Pachhad, and Paonta Sahib. The Giri River divides
            the district into two almost equal parts: Giripar and Giriaar. The
            major towns are Nahan, Paonta Sahib, Rajgarh, and Shillai. Rajgarh
            is the biggest village of Sirmour district. <br />
            <br />
            <h3 className="distric-page-h3">Demographics</h3>
            <br />
            <br />
            According to the 2011 Census of India, Sirmaur district has a
            population of 529,855, which placed it 542nd in India (out of a
            total of 640). The district had a population density of 188
            inhabitants per square kilometre (490/sq mi).[4] Its population
            growth rate over the decade 2001–2011 was 15.61%. Sirmaur had a sex
            ratio of 915 females for every 1000 males,[4] and a literacy rate of
            79.98%. 10.79% of the population lived in urban areas. Scheduled
            Castes and Scheduled Tribes made up 30.34% and 2.13% of the
            population respectively. <br />
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

export default Sirmour;
