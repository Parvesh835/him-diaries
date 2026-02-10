import React from "react";
import { useNavigate } from "react-router-dom";
import Kalpa from "../../../assets/Kalpa.webp";
import Sangla_valley from "../../../assets/Sangla_valley.avif";
import chitkul from "../../../assets/chitkul.jpg";
import Nako_Lake from "../../../assets/Nako_Lake.jpg";
import Reckong_Peo from "../../../assets/Reckong_Peo.webp";
import Roghi_Village from "../../../assets/Roghi_Village.webp";
import Kinnaur_Kailash from "../../../assets/Kinnaur_Kailash.jpg";
import Charang_Ghati_Trek from "../../../assets/Charang_Ghati_Trek.jpg";
import Yulla_Kanda from "../../../assets/Yulla_Kanda.webp";

const Kinnaur = () => {
    const navigate = useNavigate(); // ✅ back navigation
  

  const places = [
    {
      name: " Kalpa",
      img: Kalpa,
      decs: "Kalpa is a small village lying above Reckong Peo, the district headquarters of the Kinnaur district, Himachal Pradesh state, north India. Geographically, Kalpa lies in the Sutlej river valley of the Indian Himalaya. The region is inhabited by the Kinnauri people and is known for its apple orchards, as apples are a major cash-crop for the region. ",
    },
    {
      name: " Sangla valley ",
      img: Sangla_valley,
      decs: "Sangla is a town in the Baspa Valley, in the Kinnaur District of Himachal Pradesh, India, close to the border with Tibet. It is the administrative headquarter of the eponymous Sangla tehsil, and the primary town in the Baspa Valley which is  also referred to as the Sangla Valley.",
    },
    {
      name: "Chitkul",
      img: chitkul,
      decs: "Chitkul is a village in Kinnaur district of Himachal Pradesh. During winters, the place mostly remains covered with snow and the inhabitants move to lower regions of Himachal. According to a recent study by Centre of Atmospheric Sciences at IIT Delhi, Chitkul has the cleanest air in India.",
    },
    {
      name: " Nako Lake",
      img: Nako_Lake,
      decs: "Nako Lake is a high-altitude lake in the Pooh sub-division of the Kinnaur district of the state of Himachal Pradesh in India. It forms part of the boundary of Nako village and is named after it. It is about 3,662 metres (12,014 ft) above sea level. The size of the lake is around 500 meters long and 200 meters wide and the depth of the lake is estimated to be around 60 meters.",
    },
    {
      name: "Reckong Peo",
      img: Reckong_Peo,
      decs: "Reckong Peo, also spelled Rekong Peo or simply known as Peo by the local inhabitants, is headquarters of Kinnaur district, one of the twelve administrative districts of the Indian state of Himachal Pradesh. At a height of 2,290 metres (7,513 ft), Reckong Peo is 260 kilometers (162 miles) from Shimla and seven kilometers (4⅓ miles) from Powari ― a place on NH5. Earlier Kalpa was the  headquarter of the Kinnaur district administration.",
    },
    {
      name: "Roghi Village",
      img: Roghi_Village,
      decs: "Blessed with so many natural wonders, the beautiful Roghi village is situated 8 km away from the town of Kalpa and is surrounded by lovely gardens and village houses. This place is popular for its apple orchards and ethnic village life, which includes temples, monasteries, Kinnauri style buildings, etc. The tourists love visiting this mind blowing destination, which is blessed with such an exquisite beauty.",
    },
    {
      name: "Kinnaur Kailash",
      img: Kinnaur_Kailash,
      decs: "The Kinnaur Kailasha (locally known as Kinner Kailash) is a mountain in the Kinnaur district. As per Hindu scriptures, Lord Shiva and goddess Parvati reside in Kinner Kailash.[2] It is the fourth most important peak among the group of five separate peaks in Himalayas in separate locations collectively known as the Panch Kailash or 'Five Kailashas', other being Mount Kailash in first place, Adi Kailash in second, Shikhar Kailash (Shrikhand Mahadev Kailash) in third, and Manimahesh Kailash in fifth place in terms of importance.",
    },
    {
      name: "Charang Ghati Trek",
      img: Charang_Ghati_Trek,
      decs: "The Charang Ghati Pass Trek is a challenging, high-altitude Himalayan adventure in Himachal Pradesh's Kinnaur region, known for its stunning views of Mt. Kinner Kailash and glacial terrain, traversing to Chitkul village via the ~5,300m Charang La Pass, requiring excellent fitness and experience for its steep ascents and descents, best done in summer/autumn.",
    },
    {
      name: " Yulla Kanda",
      img: Yulla_Kanda,
      decs: "Yulla Kanda's history is rooted in the Mahabharata, with local legend claiming the Pandavas built the temple and glacial lake during their exile as a tribute to Lord Krishna, making it one of the world's highest Krishna temples in Himachal Pradesh, India, a sacred site where rituals like the 'Floating Cap' test one's fortune and Janmashtami is celebrated with deep devotion, preservingKinnauri culture and spirituality.",
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
          <h2>6,401 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>84,121</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>6,816m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Kinnaur</h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Kinnaur district is a mountainous district located in the northeast
            part of the state of Himachal Pradesh, India. Kinnaur district
            borders Tibet to the east, the state of Uttarakhand to the south,
            Shimla district to the southwest, Kullu district to the west, and
            Lahaul and Spiti district to the north.
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Over the 10th-11th centuries A.D., Kinnaur was a part of the Guge
            kingdom. The Guge kingdom broke apart in the 12th century, and the
            Bushahr state arose in the Western Himalayas, taking over most parts
            of present-day Kinnaur. The Bushahr state originated in the Kamru
            village of Sangla valley. However, the uppermost part of Kinnaur
            remained under Tibetan influence until the late 17th century, when
            it was handed over to the Bushahr state by the Tibetans as a reward
            for assistance in the Tibet-Ladakh-Mughal War. The Bushahr state
            shifted its capital to Sarahan, and later still to Rampur, which
            caused this state to be known eventually as 'Rampur-Bushahr'.
            Rampur-Bushahr was attacked by the Gurkhas in the early 19th
            century. Soon afterwards, the British gained supremacy in the
            region. Rampur-Bushahr became a princely state owing suzerainty to
            the British crown, until India's Independence in 1947. Most of
            present-day Kinnaur district was known as 'Chini tehsil' under the
            Rampur-Bushahr state. On 15 April, 1948, Rampur-Bushahr became a
            part of the Republic of India, and a part of an administrative unit
            called the Mahasu district. In 1960, the Chini tehsil and fourteen
            villages of the neighbouring Rampur tehsil were separated from the
            Mahasu district to create the new district of Kinnaur.
            <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            Kinnaur is an entirely mountainous district. The general altitude
            range is 1,500 metres above sea level to over 6,000 metres above sea
            level. The district is drained by several tributaries of the Sutlej
            River. Three mountain ranges run through or touch Kinnaur: the
            Zanskar Range, the Great Himalaya Range, and the Dhauladhar Range.
            The highest peak of Kinnaur district, Leo Purgyil (6,816m), is also
            the highest peak of Himachal Pradesh state. The Kinner Kailash peak
            (6,050m), a regional pilgrimage site for Hindus, is also located in
            Kinnaur. Administratively, Kinnaur is the third largest district by
            size in Himachal Pradesh, with an area of 6,401 sq. km. The district
            has five tehsils (Nichar, Kapla, Sangla, Pooh, and Moorang) and one
            sub-tehsil (Hangrang). For development purposes, the district is
            divided into three developmental blocks—Nichar, Kalpa, and Pooh.
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

export default Kinnaur;
