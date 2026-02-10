import React from "react";
import { useNavigate } from "react-router-dom";
import Sangla_valley from "../../../assets/Sangla_valley.avif";
import Bijli_Mahadev_Temple from "../../../assets/Bijli_Mahadev_Temple.jpg";
import Kheerganga_Trek from "../../../assets/Kheerganga_Trek.jpg";
import Great_Himalayan_National_Park from "../../../assets/Great_Himalayan_National_Park.png";
import Naggar_Castle from "../../../assets/Naggar_Castle.jpg";
import Manikaran from "../../../assets/Manikaran.webp";
import Anjani_Mahadev from "../../../assets/Anjani_Mahadev.jpg";
import Raghunath_kullu from "../../../assets/Raghunath_kullu.jpg";
import Hadimba_mata from "../../../assets/Hadimba_mata.jpg";
import sissu from "../../../assets/sissu.jpg";
import Atal_tunnel from "../../../assets/Atal_tunnel.jpg";
import Shrikhand_Mahadev from "../../../assets/Shrikhand_Mahadev.jpg"
const Kullu = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Bijli Mahadev",
      img: Bijli_Mahadev_Temple,
      decs: "As per Hindu legend, the Bijli Mahadev temple was built as a way to pay homage to lord Shiva after he defeated the asura named Jalandhara with his trident and saved the Kullu valley from being submerged. The temple has been in existence from ancient times, per the local inhabitants. ",
    },

    {
      name: "Anjani Mahadev",
      img: Anjani_Mahadev,
      decs: "35ft snow Shivalingam at Anjani Mahadev major tourist ...Anjani Mahadev, located near Solang Valley in Manali, Himachal Pradesh, is a revered Hindu temple dedicated to Lord Shiva, known for its stunning natural, 25-40 feet high ice Shiva Lingam that forms in winter. Often called the 'Mini Amarnath', it is believed to be the place where Anjani Mata, mother of Lord Hanuman, meditated. ",
    },
    {
      name: "Shrikhand_Mahadev",
      img: Shrikhand_Mahadev,
      decs:"Shrikhand Mahadev, located in the Kullu district of Himachal Pradesh, is a, challenging 5-6 day (32–35 km one-way) pilgrimage trek culminating at a 75-foot-tall Shivalinga at over 5,100 meters. Considered one of the toughest treks in India, it requires high physical fitness and is best undertaken from July to August, starting from Jaon village, offering scenic views of glaciers, forests, and the sacred Nain Sarovar Lake. ",
    },
    {
      name: "Manikaran",
      img: Manikaran,
      decs: " According to legend, when the Hindu gods Shiva and Parvati were walking in the valley, Parvati dropped one of her earrings. The jewel was seized by Shesha, the serpent deity, who then disappeared into the earth with it. Shesha only surrendered the jewel when Shiva performed the cosmic dance, the Tandava, and shot the jewel up through the water. Apparently, jewels continued to be thrown up in the waters at Manikaran until the 1905 Kangra earthquake.",
    },
    {
      name: "Hadimba Mata",
      img: Hadimba_mata,
      decs: "The Hidimba Devi Temple in Manali, Himachal Pradesh, is an ancient, 1553-built pagoda-style shrine dedicated to Hidimbi Devi, the wife of Pandava Bhima and mother of Ghatotkacha from the Mahabharata. Surrounded by cedar forests, this 'Dhungri temple' features unique wooden architecture, a 24-meter tower, and a sacred cave where she is believed to have meditated. ",
    },
    {
      name: "Sissu",
      img: sissu,
      decs: "Sissu, a scenic village in Himachal Pradesh’s Lahaul Valley situated at 3,200 meters, has become a premier year-round destination near Kullu-Manali, accessible via the 9.02 km Atal Tunnel. Famous for the spectacular Palden Lhamo Dhar waterfall, Sissu Lake, and winter snowfall, it offers a 'white paradise' experience with temperatures dropping below \(0^{\circ }\text{C}\). ",
    },
    {
      name: "Shri Raghunath Mandir",
      img: Raghunath_kullu,
      decs: "Built by Raja Jagat Singh, Raghunath Temple is a temple in Kullu dedicated to Lord Ram. Surrounded by mountains, this temple is considered as one of the oldest temples of Himachal.The Raghunath Temple in Sultanpur, Kullu, is a revered Hindu temple dedicated to Lord Rama, considered the chief deity of the Kullu Valley. It was built in 1660 AD by Raja Jagat Singh to atone for his sins and is known for its Pahari-pyramidal style architecture. ",
    },
    {
      name: " Sangla valley ",
      img: Sangla_valley,
      decs: "Sangla is a town in the Baspa Valley, in the Kinnaur District of Himachal Pradesh, India, close to the border with Tibet. It is the administrative headquarter of the eponymous Sangla tehsil, and the primary town in the Baspa Valley which is  also referred to as the Sangla Valley.",
    },
    {
      name: "Atal tunnel",
      img: Atal_tunnel,
      decs: "The Atal Tunnel is a 9.02 km long, horseshoe-shaped highway tunnel built under the Rohtang Pass in the eastern Pir Panjal range of the Himalayas, Himachal Pradesh, India. Dedicated to the nation in 2020, it is the world’s longest single-tube highway tunnel above 10,000 feet, providing all-weather connectivity between Manali and Lahaul-Spiti valley. ",
    },
    {
      name: "Kheerganga Trek",
      img: Kheerganga_Trek,
      decs: "The Kheerganga Trek is a popular, beginner-friendly trek in Himachal Pradesh's Parvati Valley, known for its scenic trails through forests, waterfalls, and meadows, culminating in a natural hot spring and Shiva temple at 9,700 ft. Starting from Barshaini (accessible via Kasol), the moderate 12-14 km round trip takes 4-6 hours each way, featuring steep sections and river crossings,offering stunning Himalayan views and medicinal hot water baths at the top. It's best done between April-November, avoiding peak winter snow.",
    },
    {
      name: "Great Himalayan National Park ",
      img: Great_Himalayan_National_Park,
      decs: "The Great Himalayan National Park (GHNP) is a national park in India, located in Banjar sub-division of Kullu in the state of Himachal Pradesh. The park was established in 1984 and is spread over an area of 1171 km2; elevations within the park range  between 1500 and 6000 m. The Great Himalayan National Park is a habitat to numerous flora and more than 375 fauna species, including approximately 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects.",
    },
    {
      name: "Naggar Castle",
      img: Naggar_Castle,
      decs: "Naggar Castle is a medieval castle, located in Kullu, Himachal Pradesh, India. Built by Raja Sidh Singh of Kullu around 1460 A.D, it was taken over by the Himachal Pradesh Tourism Development Corporation (HPTDC), to run as a heritage hotel, in 1978. It was the official seat of kings for centuries. According to a legend, Raja Sidh Singh used stones from the abandoned palace (Gardhak) of Rana Bhonsal to build the castle.",
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
          <h2>5</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>5,503 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>437,903</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>6,632m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Kullu</h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Kullu district borders Shimla district to the south, Mandi and
            Kangra districts to the west, Kinnaur to the east and the Lahaul and
            Spiti district to the north and east. The largest valley in this
            mountainous district is the Kullu Valley, which follows the course
            of the Beas River, and ranges in elevation from 833 metres (2,733
            ft) at Aut to 3,330 metres (10,930 ft) at the Atal Tunnel South
            Portal, below Rohtang Pass. The town of Kullu, located on the right
            side of the Beas River, serves as the administrative headquarters of
            the Kullu district. <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            The ancient seat of the kings of the kingdom of Kullu was the Naggar
            Castle, about 12 km north of the present-day town of Kullu, and was
            thought to have been built in the late 15th century. Raja Jagat
            Singh (who ruled Kullu between 1637–72) moved the capital in the
            middle of the 17th century from Naggar to Sultanpur, within today's
            Kullu town. Kullu ended being an independent kingdom upon the
            invasion by Maharaja Ranjit Singh in 1839. Following, in turn, the
            takeover of the Sikh Empire by the British Empire, Kullu was ceded
            by the Sikhs to the British in 1846, whereupon it became a tehsil of
            the British-administered Kangra district (in turn a part of the
            Punjab Province, British India) <br />
            <br />
            <h3 className="distric-page-h3">Demographics</h3>
            <br />
            <br />
            According to the 2011 census Kullu district has a population of
            437,903, roughly equal to the nation of Malta. This gives it a
            ranking of 553rd in India (out of a total of 640). The district has
            a population density of 79 inhabitants per square kilometre (200/sq
            mi). Its population growth rate over the decade 2001-2011 was
            14.65%.Kullu has a sex ratio of 942 females for every 1000 males,
            and a literacy rate of 80.14%. 9.45% of the population lives in
            urban areas. Scheduled Castes and Scheduled Tribes make up 28.01%
            and 3.84% of the population respectively.
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

export default Kullu;
