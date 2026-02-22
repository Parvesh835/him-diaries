
import mongoose from "mongoose";
import dotenv from "dotenv";
import { District } from "./API/models/district.schema.js";
import { Gallery } from "./API/models/gallery.schema.js";

dotenv.config();

const districtsData = [
  {
    name: "Bilaspur",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/BilaspurCityHimachal.jpg/800px-BilaspurCityHimachal.jpg",
    desc: "Bilaspur is famous for the Gobind Sagar Lake, a man-made reservoir on the Sutlej River. It offers water sports and fishing. The district is also known for its ancient temples and forts.",
    area: "1,167 km²",
    population: "381,956 (2011)",
    tehsils: "Bilaspur Sadar, Ghumarwin, Jhandutta, Naina Devi",
    highestPeak: "Bandla Hill (feature)",
    sections: [
      {
        title: "History",
        content: "The area was formerly the princely state of Kahlur, founded by Raja Bir Chand in the 7th century. It became a distinct district of Himachal Pradesh in 1954.",
      },
      {
        title: "Geography",
        content: "Bilaspur is located in the lower Himalayas. It is known as the district of seven hills.",
      },
    ],
    attractions: [
      {
        name: "Gobind Sagar Lake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gobind_Sagar_Lake.jpg/800px-Gobind_Sagar_Lake.jpg",
        desc: "A massive reservoir offering boating, fishing, and water sports.",
      },
      {
        name: "Naina Devi Temple",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Naina_Devi_Temple.JPG/800px-Naina_Devi_Temple.JPG",
        desc: "A revered Shakti Peeth located on a hilltop, offering panoramic views.",
      },
    ],
  },
  {
    name: "Chamba",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chamba_Town.jpg/800px-Chamba_Town.jpg",
    desc: "Chamba is known for its exquisite natural beauty and architectural marvels. It is situated on the banks of the Ravi River and is famous for its temples, arts, and crafts.",
    area: "6,528 km²",
    population: "519,080 (2011)",
    tehsils: "Chamba, Dalhousie, Bhattiyat, Churah, Salooni",
    highestPeak: "Pir Panjal Range peaks",
    sections: [
      {
        title: "Culture",
        content: "Chamba is famous for its Pahari paintings and Chamba Rumal (handkerchief) embroidery.",
      },
    ],
    attractions: [
      {
        name: "Khajjiar",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Khajjiar_Lake%2C_Chamba.jpg/800px-Khajjiar_Lake%2C_Chamba.jpg",
        desc: "Often called 'Mini Switzerland of India', known for its lush green meadows.",
      },
      {
        name: "Dalhousie",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Dalhousie_Himachal.jpg/800px-Dalhousie_Himachal.jpg",
        desc: "A colonial-era hill station with old-world charm and pine-clad valleys.",
      },
    ],
  },
  {
    name: "Hamirpur",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hamirpur_Himachal.jpg/800px-Hamirpur_Himachal.jpg",
    desc: "Hamirpur is the most literate district of Himachal Pradesh. It represents the lower hilly terrain and is known for its educational institutions and vibrant culture.",
    area: "1,118 km²",
    population: "454,768 (2011)",
    tehsils: "Hamirpur, Barsar, Nadaun, Sujanpur, Bhoranj",
    highestPeak: "Awah Devi Peak",
    sections: [
      {
        title: "Education",
        content: "Known as the education hub of the state, home to NIT Hamirpur.",
      },
    ],
    attractions: [
      {
        name: "Deotsidh Temple",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Baba_Balak_Nath.jpg/800px-Baba_Balak_Nath.jpg",
        desc: "A famous cave temple dedicated to Baba Balak Nath.",
      },
    ],
  },
  {
    name: "Kangra",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Dharamshala%2C_Kangra%2C_Himachal_Pradesh%2C_India_%282017%29_1.jpg/800px-Dharamshala%2C_Kangra%2C_Himachal_Pradesh%2C_India_%282017%29_1.jpg",
    desc: "Kangra is the most populous district, home to the Dhauladhar range, Dharamshala, and the Dalai Lama. It offers a blend of spirituality, history, and adventure.",
    area: "5,739 km²",
    population: "1,510,075 (2011)",
    tehsils: "Dharamshala, Kangra, Palampur, Baijnath, Nurpur, etc.",
    highestPeak: "Hanuman Tibba (in Dhauladhars)",
    sections: [
      {
        title: "Spirituality",
        content: "Home to McLeod Ganj, the residence of His Holiness the Dalai Lama.",
      },
    ],
    attractions: [
      {
        name: "Dharamshala",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Dharamshala%2C_Kangra%2C_Himachal_Pradesh%2C_India_%282017%29_1.jpg/800px-Dharamshala%2C_Kangra%2C_Himachal_Pradesh%2C_India_%282017%29_1.jpg",
        desc: "A scenic hill station and the winter capital of the state.",
      },
      {
        name: "Bir Billing",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bir_Billing_Paragliding.jpg/800px-Bir_Billing_Paragliding.jpg",
        desc: "World-famous destination for paragliding.",
      },
    ],
  },
  {
    name: "Kinnaur",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kinnaur_Kailash.jpg/800px-Kinnaur_Kailash.jpg",
    desc: "Kinnaur is a land of fairy tales and legends, known for its apples, vineyards, and the majestic Kinner Kailash peak. It marks the transition to the Tibetan highlands.",
    area: "6,401 km²",
    population: "84,121 (2011)",
    tehsils: "Kalpa, Pooh, Sangla (Nichar)",
    highestPeak: "Reo Purgyil",
    sections: [
      {
        title: "Culture",
        content: "A mix of Hinduism and Buddhism co-exists harmoniously here.",
      },
    ],
    attractions: [
      {
        name: "Kalpa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kalpa_Kinnaur.jpg/800px-Kalpa_Kinnaur.jpg",
        desc: "Famous for its apple orchards and stunning views of Kinnaur Kailash.",
      },
      {
        name: "Sangla Valley",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sangla_Valley.jpg/800px-Sangla_Valley.jpg",
        desc: "One of the most beautiful valleys in the Himalayas.",
      },
    ],
  },
  {
    name: "Kullu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kullu_Valley.jpg/800px-Kullu_Valley.jpg",
    desc: "Kullu, the 'Valley of Gods', is famous for its temples, apple orchards, and the tourist hub of Manali. It serves as a gateway to Lahaul and Spiti.",
    area: "5,503 km²",
    population: "437,903 (2011)",
    tehsils: "Kullu, Manali, Banjar, Sainj",
    highestPeak: "Deo Tibba",
    sections: [
      {
        title: "Festivals",
        content: "Famous for the week-long Kullu Dussehra festival.",
      },
    ],
    attractions: [
      {
        name: "Manali",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Manali_City.jpg/800px-Manali_City.jpg",
        desc: "A popular resort town for backpacking and honeymooners.",
      },
      {
        name: "Great Himalayan National Park",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Great_Himalayan_National_Park.jpg/800px-Great_Himalayan_National_Park.jpg",
        desc: "A UNESCO World Heritage site known for its biodiversity.",
      },
    ],
  },
  {
    name: "Lahaul and Spiti",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chandratal_Lake.jpg/800px-Chandratal_Lake.jpg",
    desc: "A cold desert mountain valley, Lahaul and Spiti offering landscapes like no other. Ancient monasteries, high passes, and stark beauty define this district.",
    area: "13,835 km²",
    population: "31,564 (2011)",
    tehsils: "Lahaul, Spiti",
    highestPeak: "Manirang",
    sections: [
      {
        title: "Geography",
        content: "Separated by the Kunzum Pass, Lahaul is greener while Spiti is high-altitude desert.",
      },
    ],
    attractions: [
      {
        name: "Key Monastery",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Key_Monastery_Spiti.jpg/800px-Key_Monastery_Spiti.jpg",
        desc: "A famous Tibetan Buddhist monastery perched on a hill.",
      },
      {
        name: "Chandratal Lake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chandratal_Lake.jpg/800px-Chandratal_Lake.jpg",
        desc: "The 'Moon Lake', a stunning high-altitude lake.",
      },
    ],
  },
  {
    name: "Mandi",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Prashar_Lake%2CMandi_%2CHimachal_Pardesh.jpg/800px-Prashar_Lake%2CMandi_%2CHimachal_Pardesh.jpg",
    desc: "Known as the 'Varanasi of Hills' due to its many temples. Mandi is situated on the banks of the Beas River and serves as a commercial hub.",
    area: "3,950 km²",
    population: "999,777 (2011)",
    tehsils: "Mandi, Sundernagar, Sarkaghat, Jogindernagar",
    highestPeak: "Shikari Devi",
    sections: [
      {
        title: "Heritage",
        content: "Possesses a rich heritage of stone temples dedicated to Lord Shiva.",
      },
    ],
    attractions: [
      {
        name: "Prashar Lake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Prashar_Lake%2CMandi_%2CHimachal_Pardesh.jpg/800px-Prashar_Lake%2CMandi_%2CHimachal_Pardesh.jpg",
        desc: "A floating island lake with a 3-tiered pagoda temple.",
      },
    ],
  },
  {
    name: "Shimla",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_Ridge_Shimla.jpg/800px-The_Ridge_Shimla.jpg",
    desc: "The capital of Himachal Pradesh, Shimla retains its colonial charm with neo-gothic architecture. It is a hub of education, administration, and tourism.",
    area: "5,131 km²",
    population: "814,010 (2011)",
    tehsils: "Shimla, Rampur, Rohru, Theog",
    highestPeak: "Chanshal Peak",
    sections: [
      {
        title: "History",
        content: "Served as the summer capital of British India.",
      },
    ],
    attractions: [
      {
        name: "The Ridge",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_Ridge_Shimla.jpg/800px-The_Ridge_Shimla.jpg",
        desc: "The heart of Shimla, offering views of the surrounding peaks.",
      },
      {
        name: "Kufri",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kufri_Shimla.jpg/800px-Kufri_Shimla.jpg",
        desc: "Famous for its Himalayan nature park and skiing slopes.",
      },
    ],
  },
  {
    name: "Sirmaur",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Renuka_Lake_Sirmaur.jpg/800px-Renuka_Lake_Sirmaur.jpg",
    desc: "Sirmaur is the southernmost district, known for the Renuka Lake and fossil parks. It has a mix of plains and hilly terrain.",
    area: "2,825 km²",
    population: "529,855 (2011)",
    tehsils: "Nahan, Paonta Sahib, Rajgarh",
    highestPeak: "Churdhar",
    sections: [
      {
        title: "Legends",
        content: "Associated with the legend of Renuka Ji, mother of Lord Parshuram.",
      },
    ],
    attractions: [
      {
        name: "Renuka Lake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Renuka_Lake_Sirmaur.jpg/800px-Renuka_Lake_Sirmaur.jpg",
        desc: "The largest natural lake in Himachal Pradesh, shaped like a sleeping woman.",
      },
      {
        name: "Churdhar Peak",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Churdhar_Peak.jpg/800px-Churdhar_Peak.jpg",
        desc: "A popular trekking destination offering vast views.",
      },
    ],
  },
  {
    name: "Solan",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mohan_Shakti_Heritage_Park.jpg/800px-Mohan_Shakti_Heritage_Park.jpg",
    desc: "Known as the 'Mushroom City of India', Solan connects the plains to the hills. It is an industrial hub and also known for its breweries.",
    area: "1,936 km²",
    population: "580,320 (2011)",
    tehsils: "Solan, Nalagarh, Arki, Kandaghat",
    highestPeak: "Mount KaroL",
    sections: [
      {
        title: "Economy",
        content: "Rapidly growing industrial hub and educational center.",
      },
    ],
    attractions: [
      {
        name: "Kasauli",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kasauli_View.jpg/800px-Kasauli_View.jpg",
        desc: "A serene cantonment town known for its colonial ambience.",
      },
    ],
  },
  {
    name: "Una",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Chintpurni_Temple.jpg/800px-Chintpurni_Temple.jpg",
    desc: "Una lies in the foothills and shares borders with Punjab. It is known for its scorching summers and important pilgrimage sites.",
    area: "1,540 km²",
    population: "521,173 (2011)",
    tehsils: "Una, Amb, Bangana, Haroli",
    highestPeak: "Bharwain",
    sections: [
      {
        title: "Pilgrimage",
        content: "Major pilgrimage center for Chintpurni Mata.",
      },
    ],
    attractions: [
      {
        name: "Chintpurni Temple",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Chintpurni_Temple.jpg/800px-Chintpurni_Temple.jpg",
        desc: "One of the major Shakti Peeths in North India.",
      },
    ],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("Connected to database for seeding...");

    // Clear existing data
    await District.deleteMany({});
    await Gallery.deleteMany({});
    console.log("Cleared existing Districts and Gallery items.");

    // Insert Districts
    const createdDistricts = await District.insertMany(districtsData);
    console.log(`Seeded ${createdDistricts.length} districts.`);

    // Create Gallery Items from the same images
    const galleryItems = [];
    createdDistricts.forEach((dist) => {
      // Main district image
      galleryItems.push({
        caption: `Beauty of ${dist.name}`,
        img: dist.img,
        district: dist.name
      });

      // Attraction images
      if (dist.attractions && dist.attractions.length > 0) {
        dist.attractions.forEach(attr => {
          galleryItems.push({
            caption: attr.name,
            img: attr.img,
            district: dist.name
          });
        });
      }
    });

    await Gallery.insertMany(galleryItems);
    console.log(`Seeded ${galleryItems.length} gallery items.`);

    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedDB();
