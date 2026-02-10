import React from "react";
import { useNavigate } from "react-router-dom";
import TrilokInath_Temple from "../../../assets/TrilokInath_Temple.jpg";
import Shikari_Devi from "../../../assets/Shikari_Devi.webp";
import Kamrunag from "../../../assets/Kamrunag.jpg";
import rewalsar_lake from "../../../assets/rewalsar_lake.jpg";
import Prashar_Lake from "../../../assets/Prashar_Lake.jpg";
import Bhimakali_Temple from "../../../assets/Bhimakali_Temple.jpg";
import Baba_Bhootnath_mandir from "../../../assets/Baba_Bhootnath_mandir.jpg";
import Bhrigu_Lake from "../../../assets/Bhrigu_Lake.jpg";

const Mandi = () => {
  
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Shri Triloknath Temple",
      img: TrilokInath_Temple,
      decs: "The Trilokinath Temple in Mandi, Himachal Pradesh, is dedicated to the Hindu god Shiva. It contains a three-faced murti (image) of Shiva, which is the origin of the name Trilokinath, (Lord of Three Worlds). The temple is a popular destination for tourists and pilgrims, and a number of festivals are celebrated there every year.",
    },
    {
      name: "Shikari Devi",
      img: Shikari_Devi,
      decs: "Shikari Devi Temple is a popular Hindu temple dedicated to goddess Durga in the form of Hunter's Goddess (in Hindi: Shikari Devi). The temple is located above 18 kilometres (11 mi) from Sanarli in Karsog valley and at the same distance from Janjheli which is on the other side of the hill, through steep road to the temple in Mandi district.",
    },
    {
      name: "KamruNag",
      img: Kamrunag,
      decs: "There is an ancient stone idol of Dev Kamrunag near the lake, hence the name of the lake. People believe that Dev Kamrunag gives blessings to his devotees in exchange for their offerings of faith, devotion, flowers, coins or paper currency which they toss into Kamrunag Lake. Each year in the month of June, there is a big fair, where thousands of people from different places flock to see and worship Dev Kamrunag and take his blessings.",
    },
    {
      name: "Rewalsar Lakee",
      img: rewalsar_lake,
      decs: "Rewalsar Lake, located about 24 km from Mandi in Himachal Pradesh, is a sacred, high-altitude (1,360m) water body revered by Buddhists, Hindus, and Sikhs, known for its floating reed islands. Also called Tso Pema, it is famous for its connection to Padmasambhava (Guru Rinpoche) and houses three Buddhist monasteries, a Gurudwara, and several Hindu temples, making it a major spiritual center.",
    },
    {
      name: "Prashar Lake",
      img: Prashar_Lake,
      decs: "Parashar Lake (also spelled Prashar Lake) is a freshwater lake located at an elevation of 2,730 metres (8,960 ft) in the Mandi district of Himachal Pradesh, India. It lies 12 km (7.5 mi) northeast of the town of Mandi, and has a three storied pagoda-like temple dedicated to the sage Parashara situated on its bank.",
    },
    {
      name: "Bhimakali Temple",
      img: Bhimakali_Temple,
      decs: "Bhimakali Temple is a Hindu temple at Sarahan in Himachal Pradesh, India. The temple is dedicated to the goddess Bhimakali, the presiding deity of the rulers of the former Bushahr state. The temple is situated about 180 kms from Shimla and it is considered as holy as 51 shakti peethas.",
    },
    {
      name: "Baba Bhootnath mandir",
      img: Baba_Bhootnath_mandir,
      decs: "Located in the heart of Mandi town in Himachal Pradesh, Baba Bhootnath Temple is a historic 16th-century Shiva temple, built in 1527 AD by Raja Ajber Sen.Known as Chhoti Kashi, it is the main spiritual center of Mandi. The temple is open from 5:00 AM to 9:45 PM and holds grand celebrations during Mahashivratri.",
    },
    {
      name: "Bhrigu Lake",
      img: Bhrigu_Lake,
      decs: "Bhrigu Lake or Brighu Lake is a lake located at an elevation of around 4,300 metres (14,100 ft) in Kullu district, Himachal Pradesh, India. It is located to the east of Rohtang Pass and is around 6 kilometres (3.7 mi) from Gulaba village. It can be reached by trekking either from Vashisht temple, which is famous for its hot water springs, close to the town of Manali, or from Gulaba, on the way to Rohtang Pass. It is named after Maharshi Bhrigu.",
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
          <h2>3,951 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>999,777</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>3,359m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Mandi</h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Mandi district is one of the central districts of Himachal Pradesh
            state in northern India. The town of Mandi is the headquarters of
            the district.The main native language is Mandeali.As of 2011, it is
            the second most populous district of Himachal Pradesh (out of 12),
            after Kangra. The upper areas of Mandi district are part of the
            geographical, historical and cultural Mahasu region. <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Mandi district in Himachal Pradesh, historically a princely state
            founded in the 16th century, was formally established on April 15,
            1948, by merging Mandi and Suket states. Known as "Chhoti Kashi" for
            its numerous temples and Beas River ghats, it was founded by Ajbar
            Sen in 1526–1527 AD, serving as a key cultural and commercial hub.{" "}
            <br />
            <br />
            <h3 className="distric-page-h3">Demographics</h3>
            <br />
            <br />
            According to the 2011 census, Mandi district has a population of
            999,777 roughly equal to the nation of Fiji or the US state of
            Montana. This gives it a ranking of 446th in India (out of a total
            of 640). The district has a population density of 253 inhabitants
            per square kilometre (660/sq mi). Its population growth rate over
            the decade 2001-2011 was 10.89%. Mandi has a sex ratio of 1012
            females for every 1000 males and a literacy rate of 82.81%. 6.27% of
            the population lives in urban areas. Scheduled Castes and Scheduled
            Tribes make up 29.38% and 1.28% of the population respectively.
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

export default Mandi;
