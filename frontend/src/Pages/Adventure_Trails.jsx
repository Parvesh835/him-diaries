import React from "react";
import spiritualImg from "../assets/Bir_Billing.jpg";
import Triund_Trek from "../assets/Triund_Trek.webp";
import Kareri_lake from "../assets/Kareri_lake.webp";
import Guna_devi from "../assets/Guna_devi.jpg";
import Chandra_Taal from "../assets/Chandra_Taal.webp";
import Suraj_Tal from "../assets/Suraj_Tal.jpg";
import ManiMahesh from "../assets/ManiMahesh.jpeg";
import Anjnimata from "../assets/Anjnimata.png";
import Kinnaur_Kailash from "../assets/Kinnaur_Kailash.jpg";
import Charang_Ghati_Trek from "../assets/Charang_Ghati_Trek.jpg";
import Yulla_Kanda from "../assets/Yulla_Kanda.webp";
import Shikari_Devi from "../assets/Shikari_Devi.webp";
import Kamrunag from "../assets/Kamrunag.jpg";
import Churdhar_Peak from "../assets/Churdhar_Peak.webp";
import NB_waterfall from "../assets/NB_waterfall.jpeg";
import Karol_ka_Tibba from "../assets/Karol_ka_Tibba.jpg";
import Shrikhand_Mahadev from "../assets/Shrikhand_Mahadev.jpg"


const Adventure_Trails = () => {
  const places = [
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
      name: "Guna Devi Temple trek",
      img: Guna_devi,
      decs: "The Guna Devi Temple trek near McLeod Ganj is a beautiful, easy-to-moderate day hike through deodar forests, offering panoramic views of the Dhauladhar mountains and the Kangra Valley, starting typically from Naddi village or  Dharamkot; it's a spiritual journey to a sacred Goddess Kali shrine, perfect for nature lovers, photographers, and spiritual seekers seeking peace amidst nature.",
    },
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
      name: " Yulla Kanda",
      img: Yulla_Kanda,
      decs: "Yulla Kanda's history is rooted in the Mahabharata, with local legend claiming the Pandavas built the temple and glacial lake during their exile as a tribute to Lord Krishna, making it one of the world's highest Krishna temples in Himachal Pradesh, India, a sacred site where rituals like the 'Floating Cap' test one's fortune and Janmashtami is celebrated with deep devotion, preservingKinnauri culture and spirituality.",
    },
    {
      name: "Charang Ghati Trek",
      img: Charang_Ghati_Trek,
      decs: "The Charang Ghati Pass Trek is a challenging, high-altitude Himalayan adventure in Himachal Pradesh's Kinnaur region, known for its stunning views of Mt. Kinner Kailash and glacial terrain, traversing to Chitkul village via the ~5,300m Charang La Pass, requiring excellent fitness and experience for its steep ascents and descents, best done in summer/autumn.",
    },
    {
      name: "Kinnaur Kailash",
      img: Kinnaur_Kailash,
      decs: "The Kinnaur Kailasha (locally known as Kinner Kailash) is a mountain in the Kinnaur district. As per Hindu scriptures, Lord Shiva and goddess Parvati reside in Kinner Kailash.[2] It is the fourth most important peak among the group of five separate peaks in Himalayas in separate locations collectively known as the Panch Kailash or 'Five Kailashas', other being Mount Kailash in first place, Adi Kailash in second, Shikhar Kailash (Shrikhand Mahadev Kailash) in third, and Manimahesh Kailash in fifth place in terms of importance.",
    },
    {
      name: "Shrikhand_Mahadev",
      img: Shrikhand_Mahadev,
      decs:"Shrikhand Mahadev, located in the Kullu district of Himachal Pradesh, is a, challenging 5-6 day (32–35 km one-way) pilgrimage trek culminating at a 75-foot-tall Shivalinga at over 5,100 meters. Considered one of the toughest treks in India, it requires high physical fitness and is best undertaken from July to August, starting from Jaon village, offering scenic views of glaciers, forests, and the sacred Nain Sarovar Lake. ",
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
      name: "Churdhar Peak",
      img: Churdhar_Peak,
      decs: "Churdhar Peak, meaning 'Bangle of Snow' (Churichandni), is the highest peak in Himachal Pradesh's Sirmaur district (11,965 ft), known for its stunning views of the Himalayas, including Badrinath and Kedarnath, and the Gangetic plains, making it a popular but challenging trek through dense forests, glaciers, and rocky terrains, featuring the ancient Shirgul Devta Temple at its base. ",
    },
    {
      name: "NB water fall",
      img: NB_waterfall,
      decs: "NB Waterfall Himachal Pradesh | NB Waterfall Jainager ...NB Waterfall (Nikku Baba Waterfall) is a serene,, natural, and free-entry,, scenic, destination located near Kiari village, Arki Tehsil, Solan district, Himachal Pradesh. Situated 4–5 km from Jainagar and 18 km from Solan, it offers a peaceful,, family-friendly picnic spot with mythological roots related to Saint Nikku Baba.",
    },
    {
      name: "Karol ka Tibba",
      img: Karol_ka_Tibba,
      decs: "Karol Ka Tibba is the highest peak (~2,240-2,800 meters) located in Solan, Himachal Pradesh. This moderate 9 km trek starts from Chambaghat and leads to the Pandav Caves and Kali Temple. It offers panoramic views of Shimla and Churdhar Peak. The site is famous for its dense oak-pine forests, and the best time to visit is from March to November. ",
    },
  ];
  return (
    <>
      <h1 className="trek-temple">Treks</h1>
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

export default Adventure_Trails;
