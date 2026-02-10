import React from "react";
import { useNavigate } from "react-router-dom";
import Khajiyar from "../../../assets/Khajiyar.jpg";
import Sachchepass from "../../../assets/Sachchepass.jpg";
import Chaurasi from "../../../assets/Chaurasi.png";
import Museeum from "../../../assets/Museeum.webp";
import ManiMahesh from "../../../assets/ManiMahesh.jpeg";
import Anjnimata from "../../../assets/Anjnimata.png";
import Chaugan_chamba from "../../../assets/Chaugan_chamba.jpg";
import Swami_kartikeya_Temple from "../../../assets/Swami_artikeya_Temple.jpg";

const Chamba = () => {
    const navigate = useNavigate(); // ✅ back navigation
  
  const places = [
    {
      name: "Sachche Pass",
      img: Sachchepass,
      decs: "Sachche Pass also known wrongly as Sach Pass, is a 4,414-metre-high (14,482 ft) mountain pass in Chamba District on the Pir Panjal range of the Himalayas. It is 127 km (79 mi) from the District Headquarters. It connects the Chamba valley with the Pangi valleys of Himachal Pradesh, India. There is a helipad on the ascent towards Sach pass from Bairagarh of Himachal Pradesh.",
    },
    {
      name: "Khajjiar",
      img: Khajiyar,
      decs: "SKhajjiar is a hill station in the north Indian state of Himachal Pradesh. Dating from the 12th century, Khajji Nag Temple is dedicated to a serpent god. Nearby, the high-altitude Khajjiar Lake is surrounded by cedar forest. West, Kalatop Wildlife  Sanctuary is home to animals including deer and bears. Farther west, Dalhousie is a hill station with mountain views, dotted with temples and 19th-century British churches.",
    },
    {
      name: "Chaurasi Temple",
      img: Chaurasi,
      decs: "The Chaurasi temple was built by Raja Meru Verman of Bharmour, in honor of the 84 siddhas or yogis who had come from Kurukshetra and had meditated there, while they were passing Bharmour on their way to Manimahesh Lake. They blessed the king with ten sons and a daughter, Champavati, as he had no heir. It is said that the pilgrimage to Manimahesh Lake.",
    },
    {
      name: "Bhuri Singh museem",
      img: Museeum,
      decs: "Bhuri Singh Museum is situated in the heart of Chamba town. It was founded in 1908 to collect and preserve the scattered cultural heritage of Chamba State. Raja Bhuri Singh, the then ruler of erstwhile Chamba state, had gifted his inherited art collection and  Dr. J. Ph. Vogel imparted his invaluable services for setting up this Museum. The art objects displayed in the Museum were related to art, craft and cultural history of the Chamba State and stand as an eloquent testimony to the life of past and have their value  in the assessment of art and culture of this region.",
    },
    {
      name: "Anjani Mata",
      img: Anjnimata,
      decs: "Anjani Mata Temple,located near Saloni and Himgiri in the Chamba district of Himachal Pradesh, is a renowned religious site . The temple is located near a small lake at an altitude of approximately 2,520 meters. Known for its natural beauty and serene atmosphere the site is also visited by pilgrims on trekking.",
    },
    {
      name: "Mani Mahesh",
      img: ManiMahesh,
      decs: "Etymology of 'Manimahesh' signifies a 'jewel (Mani) on Shiva's (Mahesh's) crown'. According to a local legend, the moon-rays reflected from the jewel can be seen from Manimahesh Lake on clear full moon night (which is a rare occasion). However, it has been inferred that such a phenomenon could be the result of reflection of light from the glacier that embellishes the peak in the form of a serpent around  Shiva's neck",
    },
    {
      name: "Swami Kartikeya Temple",
      img: Swami_kartikeya_Temple,
      decs: "The Swami Kartikeya temple, also known as Kelang temple, is situated at the right side of the entrance to Lakshana devi in the Chaurasi (84) temple complex. This small village shrine is built on a small platform with a unique roof. The temple houses an upright stone symbolizing Kelang, the Kartikeya, who is the god of war. Inside the shrine, there is a small piece of wood carved with a figure representing Kelang, which was offered by a devotee.",
    },
    {
      name: "Chaugan",
      img: Chaugan_chamba,
      decs: "Chamba Chaugan is a famous, historic and spacious open ground located in the center of Chamba city in Himachal Pradesh, known for its natural beauty, social activities and events such as the Minjar Fair. The ground is surrounded by lush green hills and the old city, making it a major tourist attraction.",
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
          <h2>6522 km²</h2>
          <p>Sq. km Area</p>
        </div>

        <div className="stat-box">
          <h2>519,080</h2>
          <p>Population</p>
        </div>

        <div className="stat-box">
          <h2>6,443m</h2>
          <p>Highest Peak</p>
        </div>
      </div>
      {/* district */}
      <div>
        <div className="dist-page-head">
          {" "}
          <h1>Chamba </h1>
        </div>
        <div className="distic-page">
          <p>
            {" "}
            Chamba is a town in the Chamba district in the Indian state of
            Himachal Pradesh. According to the 2001 Indian census, Chamba has a
            population of 20,312 people. Located at an altitude of 1,006 metres
            (3,301 ft)above mean sea level, the town is situated on the banks of
            the Ravi River (a major tributary of the Trans-Himalayan Indus
            River), at its confluence with the Sal River.
            <br />
            <br />
            <h3 className="distric-page-h3">History</h3>
            <br />
            <br />
            Though historical records date the history of the Chamba region to
            the Kolian tribes in the 2nd century BC, the area was formally ruled
            by the Maru dynasty, starting with the Raju Maru from around 500 AD,
            ruling from the ancient capital of Bharmour, which is located 65
            kilometres (40 mi) from the town of Chamba. In 920, Raja Sahil
            Varman (or Raja Sahil Verman) shifted the capital of the kingdom to
            Chamba, following the specific request of his daughter Champavati
            (Chamba was named after her). From the time of Raju Maru, 67 Rajas
            of this dynasty ruled over Chamba until it finally merged with the
            Indian Union in April 1948, although Chamba was under British
            suzerainty from 1846 to this time. <br />
            <br />
            <h3 className="distric-page-h3">Geography</h3>
            <br />
            <br />
            Chamba is the headquarters of the Chamba district, bordered by
            Kishtwar and Doda districts of Jammu region in (union territory) of
            Jammu and Kashmir to the north-west and in the west Ladakh and
            Lahaul and Bara Banghal to the north-east and east, Kangra to the
            south-east and Pathankot district of Punjab to the south. It has an
            average elevation of 1,006 metres (3,301 ft).
            <br />
            The town, the district and the valley where the town is located,
            share the name of Chamba. The town of Chamba is located at the
            junction of Ravi River and its tributary, the Sal River, with the
            Shah Madar hill forming the backdrop on its eastern side. The Ravi
            flows in east-west direction forming deep canyons. During the spring
            and summer months, the levels of the river rise significantly from
            snow melt and pose a flooding risk.Record levels were experienced in
            early July 2005, when the National Hydroelectric Power Corporation
            was forced to shut down the power generation on its 300-MW Chamera
            Power Station
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

export default Chamba;
