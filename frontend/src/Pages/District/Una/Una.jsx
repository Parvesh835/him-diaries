import React from "react";
import { useNavigate } from "react-router-dom";
import Chintpurni_Temple from "../../../assets/Chintpurni_Temple.png";
import Govin_sagar_lake_una from "../../../assets/Govin_sagar_lake_una.jpg";
import Kutlehar_Fort from "../../../assets/Kutlehar_Fort.webp";
import Dera_Baba_Bharbhag_Singh from "../../../assets/Dera_Baba_Bharbhag_Singh.webp";
import Shiva_Bari from "../../../assets/Shiva_Bari.jpg";
import Thaneek_Pura from "../../../assets/Thaneek_Pura.jpg";

const Una = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Shri Mata Chintpurni Ji",
      img: Chintpurni_Temple,
      decs: "When Lord Vishnu severed the burning body of Maa Sati into 51 pieces so that Lord Shiva would calm down and stop his Tandava, the pieces were scattered over various places in the Indian subcontinent. It is believed that Sati's feet fell at this place and is thus considered one of the most important of the 51 Shakta pithas.",
    },
    {
      name: "Gobind Sagar Lake",
      img: Govin_sagar_lake_una,
      decs: "Gobind Sagar Lake, located in the Una and Bilaspur districts of Himachal Pradesh, is a massive man-made reservoir on the Sutlej River formed by the Bhakra Dam. Named after Guru Gobind Singh, it spans 90 km in length, offering water sports, boating, and scenic views of the Himalayas, making it a popular tourist destination.",
    },
    {
      name: "Kutlehar Fort",
      img: Kutlehar_Fort,
      decs: "Kutlehar Fort, also known as Solasinghi Fort, is a historic fortification complex located in the Una district of Himachal Pradesh, not in Sahibzada Ajit Singh Nagar, Punjab. The fort sits atop the Solasingi Dhar Range, offering panoramic views of Gobind Sagar Lake and the Pong Dam.",
    },
    {
      name: "Dera Baba Bharbhag Singh",
      img: Dera_Baba_Bharbhag_Singh,
      decs: "Dera Baba Bharbhag Singh (often spelled Vadbhag Singh or Badhbhag Singh) is a prominent, sacred Sikh shrine located in Mairi village in the Amb tehsil of Una district, Himachal Pradesh, India. It is situated roughly 40 km from Una and is known for its religious, historical, and spiritual significance, particularly regarding the healing of mental ailments and protection from negative influences.",
    },
    {
      name: "Shiva Bari",
      img: Shiva_Bari,
      decs: "Perched on Hoshiarpur-Dharamsala road, Shiv Bari sits on the bank of the river Swan and this place is considered as a practicing area for archery pupils of Guru Dronacharya. As per legend, the lord Shiva temple in the Shiv Bari was built by Guru Dronacharya for his daughter Jayati to worship the Hindu Lord Shiva. A large number of people throng this place to offer bouquets to the Shiva ling in the months of July and August.",
    },
    {
      name: "Thaneek Pura",
      img: Thaneek_Pura,
      decs: "Thaneek Pura is a scenic hill station and village in the Una district of Himachal Pradesh, India, known for its natural beauty, Himalayan views, and nearby temples like Chintpurni Devi Temple, Mahiya Sidh, and Guga Zahar Peer. Located at about 950 meters, it's a spiritual spot, especially popular during its annual fair with wrestling, and offers a pleasant climate, making it a good destination for pilgrimage and nature lovers.",
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
          <h2>1,540 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>521,173</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>1,200 m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1> Una </h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Una district is a district in the Indian state of Himachal Pradesh.
            Una shares its border with the Hoshiarpur and Rupnagar districts of
            Punjab and Kangra, Hamirpur, and Bilaspur districts of Himachal
            Pradesh. The terrain is generally plain with semi hills. Una has
            five tehsils, namely Ghanari, Haroli, Amb, Bangana and Una itself.
            It was a tehsil of Hoshiarpur district until the Punjab
            Reorganisation Act, 1966 and Kangra district until 1972, after which
            it became a district of Himachal Pradesh.
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            The present Una district until 1st November, 1966 was one of the
            tehsil of the Hoshiarpur district of Punjab. Consequent upon
            reorganization of Punjab, all the hill areas including Una tehsil
            was transferred to Himachal Pradesh. Eversince, until September,
            1972 it continued to remain as tehsil of the then Kangra district.
            On the 1st September,1972 the Himachal Pradesh Govt. reorganised the
            then Kangra district into three districts namely Una, Hamirpur and
            Kangra. Una district consists of five Sub-Divisions(Una, Amb,
            Haroli, Bangana & Gagret), five Tehsils(Una, Amb, Bangana, Haroli
            and Ghanari) and seven Sub-Tehsils(Bharwain, Ispur, Jol, Bihru
            Kalan, Dulehar, Gagret at Kaloh, Mehatpur Basdehra) and is having
            five Development Blocks(Una, Bangana, Gagret, Amb and Haroli).{" "}
            <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            Una lies in the western part of Himachal Pradesh, with the Sivalik
            Hills of the Himalayas rolling on the western side and Solah Singhi
            range on the eastern side. The Satluj river alongside Shahtalai,
            known for the shrine of Baba Balak Nath passes through south of
            district near Nangal Dam and Beas passes at the north of district
            near Pong Dam, Talwara. The altitude varies from more than 409
            meters in plains to over 1000 meters in hills. Swan River which is
            basically seasonal river and also known as soul of district Una
            flows 65 km right across the Jaswan Valley towards south until it
            submerges in the Sutlej river near Anandpur
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

export default Una;
