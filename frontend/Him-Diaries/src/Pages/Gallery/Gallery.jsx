import React from "react";
import "./Gallery.css";

/* ================= BILASPUR ================= */
import NaninaDevi from "../../assets/NaninaDevi.jpg";
import GovindSagar from "../../assets/GovindSagar.jpg";
import Markandeya from "../../assets/Markandeya.webp";
import VyashCave from "../../assets/VyashCave.jpg";
import KolDam from "../../assets/KolDam.webp";
import Dholra from "../../assets/Dholra.jpg";
import LakshmiNarayan from "../../assets/LakshmiNarayan.jpg";
import Bandla from "../../assets/Bandla.jpeg";
import Panyala from "../../assets/Panyala.jpg";
import Rukmai_kund from "../../assets/Rukmai_kund.webp";
import Water_sports_b from "../../assets/Water_sports_b.webp";
import Paragliding from "../../assets/Paragliding.avif";

/* ================= MANDI ================= */
import TrilokInath_Temple from "../../assets/TrilokInath_Temple.jpg";
import Shikari_Devi from "../../assets/Shikari_Devi.webp";
import Kamrunag from "../../assets/Kamrunag.jpg";
import rewalsar_lake from "../../assets/rewalsar_lake.jpg";
import Prashar_Lake from "../../assets/Prashar_Lake.jpg";
import Bhimakali_Temple from "../../assets/Bhimakali_Temple.jpg";
import Baba_Bhootnath_mandir from "../../assets/Baba_Bhootnath_mandir.jpg";
import Bhrigu_Lake from "../../assets/Bhrigu_Lake.jpg";

/* =================Kullu=====================*/
import Bijli_Mahadev_Temple from "../../assets/Bijli_Mahadev_Temple.jpg";
import Kheerganga_Trek from "../../assets/Kheerganga_Trek.jpg";
import Great_Himalayan_National_Park from "../../assets/Great_Himalayan_National_Park.png";
import Naggar_Castle from "../../assets/Naggar_Castle.jpg";
import Manikaran from "../../assets/Manikaran.webp";
import Anjani_Mahadev from "../../assets/Anjani_Mahadev.jpg";
import Raghunath_kullu from "../../assets/Raghunath_kullu.jpg";
import Hadimba_mata from "../../assets/Hadimba_mata.jpg";
import sissu from "../../assets/sissu.jpg";
import Atal_tunnel from "../../assets/Atal_tunnel.jpg";
import Shrikhand_Mahadev from "../../assets/Shrikhand_Mahadev.jpg" 

/*==================Shimla====================*/
import Ridge from "../../assets/ridge.jpg";
import Hatu_peak from "../../assets/Hatu_peak.jpg";
import Kufri from "../../assets/Kufri.jpg";
import Chadwick_waterfall from "../../assets/Chadwick_waterfall.jpg";
import Toy_train from "../../assets/Toy_train.jpg";
import Narkanda from "../../assets/Narkanda.jpg";

/* ================= CHAMBA ================= */
import Khajiyar from "../../assets/Khajiyar.jpg";
import Sachchepass from "../../assets/Sachchepass.jpg";
import Chaurasi from "../../assets/Chaurasi.png";
import Museeum from "../../assets/Museeum.webp";
import ManiMahesh from "../../assets/ManiMahesh.jpeg";
import Anjnimata from "../../assets/Anjnimata.png";
import Chaugan_chamba from "../../assets/Chaugan_chamba.jpg";
import Swami_kartikeya_Temple from "../../assets/Swami_artikeya_Temple.jpg";

/* ================= HAMIRPUR ================= */
import baba_balak_nath from "../../assets/baba_bakal_nath.webp";
import Sujanpur_fort from "../../assets/Sujanpur_fort.jpeg";
import Santoshi_mata from "../../assets/Santoshi_mata.avif";
import River_Rafting from "../../assets/River_Rafting.webp";
import Shani_dev_h from "../../assets/Shani_dev_h.jpg";
import abv_stadium from "../../assets/abv_stadium.png";
import Gasota_Mahadev_Mandir from "../../assets/Gasota_Mahadev_Mandir.webp";
import Mattan_Sidh_hanuman_mandir from "../../assets/Mattan_Sidh_hanuman_mandir.avif";
import Swimming_pool_gasota from "../../assets/Swimming_pool_gasota.jpg";

/* ================= KANGRA ================= */
import Jwala_devi from "../../assets/Jwala_devi.jpg";
import kangra_fort from "../../assets/kangra_fort.webp";
import Chamunda_devi from "../../assets/Chamunda_devi.jpg";
import Baijnath from "../../assets/Baijnath.jpg";
import Rock_Cut_Temple from "../../assets/Rock_Cut_Temple.webp";
import Triund_Trek from "../../assets/Triund_Trek.webp";
import Kareri_lake from "../../assets/Kareri_lake.webp";
import Guna_devi from "../../assets/Guna_devi.jpg";
import McLeod_Ganj from "../../assets/McLeod_Ganj.jpg";
import Bir_Billing from "../../assets/Bir_Billing.jpg";
import Baglamukhi_temple from "../../assets/Baglamukhi_temple.jpg";
import Dhauladhar_national_park from "../../assets/Dhauladhar_national_park.avif";

/* ================= KINNAUR ================= */
import Kalpa from "../../assets/Kalpa.webp";
import Sangla_valley from "../../assets/Sangla_valley.avif";
import chitkul from "../../assets/chitkul.jpg";
import Nako_Lake from "../../assets/Nako_Lake.jpg";
import Reckong_Peo from "../../assets/Reckong_Peo.webp";
import Roghi_Village from "../../assets/Roghi_Village.webp";
import Kinnaur_Kailash from "../../assets/Kinnaur_Kailash.jpg";
import Charang_Ghati_Trek from "../../assets/Charang_Ghati_Trek.jpg";
import Yulla_Kanda from "../../assets/Yulla_Kanda.webp";

/* ================= LAHAUL SPITI ================= */
import Chandra_Taal from "../../assets/Chandra_Taal.webp";
import Suraj_Tal from "../../assets/Suraj_Tal.jpg";
import Dhankar_Gompa from "../../assets/Dhankar_Gompa.avif";
import Langza_village from "../../assets/Langza_village.webp";
import Hampta_Pass_trek from "../../assets/Hampta_Pass_trek.webp";
import Pin_Bhaba_Pass from "../../assets/Pin_Bhaba_Pass.jpg";

/* ================= SIRMAUR ================= */
import Nahan from "../../assets/Nahan.webp";
import Renuka_Lake from "../../assets/Renuka_Lake.jpg";
import Gurdwara_Paonta_Sahib from "../../assets/Gurdwara_Paonta_Sahib.webp";
import Churdhar_Peak from "../../assets/Churdhar_Peak.webp";
import Jaitak_Fort from "../../assets/Jaitak_Fort.png";
import Haripurdhar from "../../assets/Haripurdhar.jpg";

/* ================= SOLAN ================= */
import Shoolni_mata from "../../assets/Shoolni_mata.jpeg";
import Jatoli_mahadev from "../../assets/Jatoli_mahadev.jpeg";
import Karol_ka_Tibba from "../../assets/Karol_ka_Tibba.jpg";
import Chail from "../../assets/Chail.jpg";
import NB_waterfall from "../../assets/NB_waterfall.jpeg";
import Arki_Fort from "../../assets/Arki_Fort.jpg";
import Sanjeevni_Hanuman_Temple from "../../assets/Sanjeevni_Hanuman_Temple.jpg";
import Mohan_Shakti_Heritage_Park from "../../assets/Mohan_Shakti_Heritage_Park.jpg";
import Menri_Monastery from "../../assets/Menri_Monastery.jpg";

/* ================= UNA ================= */
import Chintpurni_Temple from "../../assets/Chintpurni_Temple.png";
import Govin_sagar_lake_una from "../../assets/Govin_sagar_lake_una.jpg";
import Kutlehar_Fort from "../../assets/Kutlehar_Fort.webp";
import Dera_Baba_Bharbhag_Singh from "../../assets/Dera_Baba_Bharbhag_Singh.webp";
import Shiva_Bari from "../../assets/Shiva_Bari.jpg";
import Thaneek_Pura from "../../assets/Thaneek_Pura.jpg";

/* ================= GALLERY DATA ================= */
const sections = [
  {
    title: "Bilaspur", images: [
      { src: NaninaDevi, name: 'Shri Nanina Devi ji' }, { src: GovindSagar, name: "Govind Sagar Lake" }, 
      { src: Markandeya, name: 'Markandeya' }, { src: VyashCave, name: "Vyas Cave" },
      { src: KolDam, name: 'KolDam' }, { src: Dholra, name: "Baba Nahar Singh Temple, Dholra" },
      { src: Bandla, name: "Bandla Dhar" }, { src: LakshmiNarayan, name: 'Laxmi Narayan Temple' },
      { src: Panyala, name: "Dwadash Jyotirling Shiv Dham, Panyala" }, { src: Rukmai_kund, name: "Rukmani Kund" },
      {src: Water_sports_b, name:"Water Sports"}, {src:Paragliding, name:'Paragliding'},
  ] },
  {
    title: "Mandi", images: [
      { src: TrilokInath_Temple, name: "Shri Triloknath Temple" }, { src: Shikari_Devi, name: "Shikari Devi" },
      { src: Kamrunag, name: 'Kamrunag' }, { src: rewalsar_lake, name: 'Rewalsar Lake' },
      { src: Prashar_Lake, name: 'Prashar Lake' }, { src: Bhimakali_Temple, name: "Bhimakali Temple" },
      {src: Baba_Bhootnath_mandir, name:'Baba Bhootnath Mandir'}, {src:Bhrigu_Lake, name:"Bhrigu Lake"},
  ] },
  {
    title: "Chamba", images: [
      { src: Khajiyar, name: "Khajiyar" }, { src: Sachchepass, name: "Sachche Pass" },
      { src: Chaurasi, name: "Chaurasi Temple" }, { src: Museeum, name: "Bhuri Singh museem" },
      { src: Anjnimata, name: "Anjni Mata" }, { src: ManiMahesh, name: "Mani Mahesh" },
      { src: Swami_kartikeya_Temple, name: "Swami kartikeya Temple" },{ src:Chaugan_chamba , name:"Chaugan"}
  ] },
  {
    title: "Hamirpur", images: [
      {src: baba_balak_nath, name: "Baba Balak Nath, Deothsidh" }, {src: Sujanpur_fort, name: "Sujanpur Tira Fort" },
      {src: Santoshi_mata, name: "Santoshi Mata, Ladraur" }, { rc: River_Rafting, name: "River Rafting, Nadaun" },
      {src: Shani_dev_h, name: "Shri Shani Dev Mandir, Lambloo" },{src: abv_stadium, name: "Atal Bihari Vajpayee Stadium" }, {src: Gasota_Mahadev_Mandir, name: "Gasota Mahadev Mandir" }, {src: Mattan_Sidh_hanuman_mandir, name: "Mattan Sidh hanuman mandir" },{src: Swimming_pool_gasota, name: "Swimming pool gasota" },      
  ] },
  {
    title: "Kangra", images: [
      { src: Jwala_devi, name: "Jwala Devi Temple" }, { src: kangra_fort, name: "kangra Fort" },
      { src: Chamunda_devi, name: "Chamunda Devi Temple" }, { src: Baijnath, name: "Baijnath Temple" },
      { src: Rock_Cut_Temple, name: "Masroor Rock-cut Temple" }, { src: Triund_Trek, name: "Triund Trek" },
      { src: Kareri_lake, name: "Kareri_lake Trek" }, { src: Guna_devi, name: "Guna Devi Temple Trek" },
      { src: McLeod_Ganj, name: "McLeod  Ganj" }, { src: Bir_Billing, name: "Bir Billing" },
      { src: Baglamukhi_temple, name:"Baglamukhi Temple"}, { src: Dhauladhar_national_park, name:"Dhauladhar National Park"},
  ] },
  {
    title: "Kinnaur", images: [
      { src: Kalpa, name: "Kalpa" }, { src: Sangla_valley, name: "Sangla valley" }, { src: chitkul, name: "Chitkul" },
      { src: Nako_Lake, name: "Nako Lake" }, { src: Reckong_Peo, name: "Reckong Peo" },
      { src: Roghi_Village, name: "Roghi Village" }, { src: Kinnaur_Kailash, name: "Kinnaur Kailash" },
      { src: Charang_Ghati_Trek, name:"Charang Ghati Trek"},{ src: Yulla_Kanda, name:"Yulla_Kanda"},
    ]
  },
  {
    title: "Kullu", images: [
      { src: Bijli_Mahadev_Temple, name: "Bijli Mahadev" }, { src: Anjani_Mahadev, name: "Anjani Mahadev" },
      { src: Shrikhand_Mahadev, name: "Shrikhand Mahadev" }, { src: Manikaran, name: "Manikaran" },
      { src: Hadimba_mata, name: "Hadimba Mata" }, { src: sissu, name: "Sissu" },
      { src: Raghunath_kullu, name: "Shri Raghunath Mandir" }, { src: Sangla_valley, name: "Sangla valley" },
      { src: Atal_tunnel, name: "Atal Tunnel" }, { src: Kheerganga_Trek, name: "Kheerganga Trek" },
      { src: Great_Himalayan_National_Park, name: "Great Himalayan National Park" },
      { src: Naggar_Castle, name:"Naggar Castle"},
  ]},
  {
    title: "Lahaul & Spiti", images: [
      { src: Chandra_Taal, name: "Chandra Taal" }, { src: Suraj_Tal, name: "Suraj_Tal" },
      { src: Dhankar_Gompa, name: "Dhankar Gompa" }, { src: Langza_village, name: "Langza village" },
      { src: Hampta_Pass_trek, name:"Hampta Pass Trek"}, { src:Pin_Bhaba_Pass , name:"Pin Bhaba Pass"},
    ]
  },
  {
    title: "Shimla", images: [
      { src: Ridge, name: "Ridge" }, { src: Hatu_peak, name: "Hatu Peak" }, { src: Kufri, name: "Kufri" },
      { src: Chadwick_waterfall, name: "Chadwick waterfall" }, { src: Toy_train, name: "Toy Train Shimla" },
      { src: Narkanda, name:"Narkanda"},
  ]},
  {
    title: "Sirmaur", images: [
      { src: Churdhar_Peak, name: "Churdhar Peak" }, { src: Nahan, name: "Nahan" },
      { src: Renuka_Lake, name: "Renuka_Lake" }, { src: Gurdwara_Paonta_Sahib, name: "Gurdwara Paonta Sahib" },
      { src: Jaitak_Fort, name:"Jaitak Fort"}, { src: Haripurdhar, name:"Haripurdhar"},
  ] },
  {
    title: "Solan", images: [
      { src: Shoolni_mata, name: "Shoolni Mata" }, { src: Jatoli_mahadev, name: "Jatoli Mahadev Mandir" },
      { src: Karol_ka_Tibba, name: "Karol ka Tibba" }, { src: Chail, name: "Chail" },
      { src: NB_waterfall, name: "NB Waterfall" },{ src: Sanjeevni_Hanuman_Temple, name: "Sanjeevni Hanuman Temple" },
      { src: Mohan_Shakti_Heritage_Park, name: "Mohan Shakti Heritage Park" },
      { src: Menri_Monastery, name: "Menri Monastery" }, { src: Arki_Fort, name: "Arki Fort" },
  ] },
  {
    title: "Una", images: [
      { src: Chintpurni_Temple, name: "Shri Mata Chintpurni Ji" }, { src: Govin_sagar_lake_una, name: "Gobind Sagar Lake" },
      { src: Kutlehar_Fort, name: "Kutlehar Fort" }, { src: Dera_Baba_Bharbhag_Singh, name: "Dera Baba Bharbhag Singh" },
      { src: Shiva_Bari, name:"Shiva_Bari"}, { src: Thaneek_Pura, name:"Thaneek Pura"},
  ] },
];

const Gallery = () => {
  return (
    <section className="gallery-wrapper">
      <div className="gallery-hero">
        <h1>Him-Diaries Gallery</h1>
        <p>Explore every district of Himachal Pradesh</p>
      </div>

      {sections.map((section, index) => (
        <div className="gallery-section" key={index}>
          <h2>{section.title}</h2>

          <div className="horizontal-scroll">
  {section.images.map((item, i) => (
    <div className="image-card" key={i}>
      <img src={item.src} alt={item.name} />
      <div className="image-overlay">
        <h3>{item.name}</h3>
      </div>
    </div>
  ))}
</div>

        </div>
      ))}
    </section>
  );
};

export default Gallery;
