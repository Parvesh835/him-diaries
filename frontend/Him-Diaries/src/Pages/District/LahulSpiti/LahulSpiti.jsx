import React from "react";
import { useNavigate } from "react-router-dom";
import Chandra_Taal from "../../../assets/Chandra_Taal.webp";
import Suraj_Tal from "../../../assets/Suraj_Tal.jpg";
import Dhankar_Gompa from "../../../assets/Dhankar_Gompa.avif";
import Langza_village from "../../../assets/Langza_village.webp";
import Hampta_Pass_trek from "../../../assets/Hampta_Pass_trek.webp";
import Pin_Bhaba_Pass from "../../../assets/Pin_Bhaba_Pass.jpg";

const LahulSpiti = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Chandra Taal",
      img: Chandra_Taal,
      decs: "Chandra Taal, or 'Lake of the Moon', is a stunning high-altitude, crescent-shaped lake situated at 4,300 meters (14,100 ft) in the Spiti part of the Lahaul and Spiti district in Himachal Pradesh, India. Renowned for its changing colors from reddish to emerald green, it is a premier camping and trekking destination accessible from late May to early October.",
    },
    {
      name: "Suraj Tal",
      img: Suraj_Tal,
      decs: "Suraj Tal, or the 'Lake of the Sun God', is a breathtaking, sacred, high-altitude lake located near the Bara-lacha-la Pass in Himachal Pradesh's Lahaul and Spiti district. At approximately 4,950 meters (16,024 ft) above sea level, it is the third-highest lake in India, acting as the source of the Bhaga River.",
    },
    {
      name: "Dhankar Gompa",
      img: Dhankar_Gompa,
      decs: "Dhankar Gompa (also Dankhar, Drangkhar or Dhangkar Gompa; Brang-mkhar or Grang-mkhar) is a village and also a Gompa, a Buddhist temple in the district of Lahaul and Spiti in India. It is situated at an elevation of 3,894 metres (12,774 feet) in the Spiti Valley above Dhankar Village, between the towns of Kaza and Tabo. The complex is built on a 1000-foot (300-metre) high spur overlooking the confluence of the Spiti and Pin Rivers - one of the world's most spectacular settings for a gompa. Dhang or dang means cliff, and kar or khar means fort. Hence Dhangkar means fort on a cliff.",
    },
    {
      name: "Langza village",
      img: Langza_village,
      decs: "DLangza in Spiti Valley is famous for its rich deposits of ancient marine fossils (making it the 'Fossil Village'), a towering golden Buddha statue overlooking the valley, stunning Himalayan landscapes, and Tibetan Buddhist culture, offering visitors a unique blend of natural beauty, spiritual heritage, and paleontology.",
    },
    {
      name: " Hampta Pass trek",
      img: Hampta_Pass_trek,
      decs: "The Hampta Pass trek (approx. 14,100 ft) is a thrilling, 4–5 day crossover trek in Himachal Pradesh, connecting the lush Kullu Valley to the arid, stark Lahaul region. Known for its dramatic scenery changes, it is considered a moderate-level trek suitable for fit beginners. The trek features wildflower meadows, glacier crossings, and often ends with a visit to the stunning, high-altitude Chandratal Lake.",
    },
    {
      name: "Pin Bhaba Pass",
      img: Pin_Bhaba_Pass,
      decs: "The Pin Bhaba Pass (4,915M) is a dramatic 8-9 day, 50-60 km high-altitude crossover trek in Himachal Pradesh connecting the lush, green Bhaba Valley in Kinnaur to the arid, barren landscapes of Pin Valley in Spiti. It is considered a challenging, moderate-to-difficult trek that is ideal for experienced trekkers, with the best trekking time being mid-July to September.",
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
          <h2>2</h2>
          <p>Tehsils</p>
        </div>

        <div className="stat-box">
          <h2>13,833 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>31,564</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>6642m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Lahaul and Spiti</h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Lahaul and Spiti district is a high-altitude district in Himachal
            Pradesh, north India. This entirely mountainous district consists of
            two geographically distinct as well as formerly separate
            political-administrative units, called Lahaul and Spiti . Lahaul and
            Spiti is the largest district by area in Himachal Pradesh, and one
            of the least populous districts in the whole of India. Kyelang (also
            spelled as 'Keylong') in Lahaul is the headquarters of the whole
            district, while Spiti also has a subdivisional headquarters, at
            Kaza. Lahaul and Spiti is fast becoming a top weekend getaway
            destination in Himachal, due to improved road access via Atal Tunnel
            and rising investment in resorts and adventure activities.
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Lahaul was under the influence of the kingdom of Ladakh until the
            early 17th century. But the rulers of Chamba and Kullu also vied for
            control over Lahaul in that period. In the 17th century, Lahaul came
            under the influence of the Rajas of Kullu, particularly under the
            reign of Raja Biddhi Singh (r. 1672-1688) and his successor Raja Man
            Singh (r. 1688-1719). In the early 19th century, Sikh forces
            captured Lahaul. After the Anglo-Sikh War of 1845-46, Lahaul came
            under the rule of the British Raj. <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            Geologically located in the Himalayas and the Tibetan Plateau,
            Lahaul and Spiti district is connected to Manali through the Rohtang
            Pass. Lahaul has three valleys, the Chandra valley (locally known as
            Rangloi valley), the Bhaga valley (locally known as Ghar valley),
            and the Chandra-Bhaga valley (locally known as Pattan valley, and
            further on as Chenab valley). The confluence of the Chandra and the
            Bhaga rivers is at Tandi. The average elevation of Spiti is
            significantly greater than that of Lahaul. Lahaul receives much more
            rainfall than Spiti.
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

export default LahulSpiti;
