import { useEffect, useState } from "react";
import NasaMap from "../components/NasaMap";
import { Link } from "react-router-dom";
import Timeline from "../components/TimeLine";

export default function Home() {
  const dates = [
    "2023-01-01",
    "2023-04-01",
    "2023-07-01",
    "2023-10-01",
    "2024-01-01",
    "2024-04-01",
    "2024-07-01",
    "2024-10-01",
    "2025-01-01",
    "2025-04-01",
    "2025-07-01",
    "2025-10-01"
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dates[dates.length - 1]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/ba/f2/07/baf207b32472727522012586467ac168.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-green-300 mb-4">
            EcoPulse
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Tracking Blooming with NASA Satellite Data
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            EcoPulse is an application developed within the framework of the 
            <span className="text-green-400 font-bold"> NASA Space Apps Challenge 2025</span>, 
            focused on monitoring global blooming phenology. 
            We use Earth observation data to visualize when and where plants bloom, 
            providing crucial insights into ecosystems, agriculture, pollination, 
            biodiversity, and the impacts of climate change.
            <br/><br/>
            Our mission is to bring science closer to society through an interactive 
            and accessible map that helps people understand the relationship between 
            climate and plant life cycles.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="relative py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 z-0">
        {[{
          title: "Vegetation & Climate",
          text: "Explore how vegetation cycles reflect the relationship between seasonal changes and climate. Discover how ecosystems adapt across different biomes.",
          img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          link: "/vegetation"
        },{
          title: "Agriculture & Crops",
          text: "Understand how crop growth patterns shift with changing seasons. Learn how climate change influences agriculture and food security worldwide.",
          img: "https://cdn2-group.bureauveritas.com/sites/g/files/zypfnx196/files/2020-10/shutterstock_612566915_compressed.jpg",
          link: "/agriculture"
        },{
          title: "Phenology in Plants",
          text: "Dive into plant phenology: the science of how seasonal changes impact plant life cycles, from flowering to pollination, and its vital role in biodiversity.",
          img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          link: "/phenology"
        }].map((card, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-700 ease-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <Link to={card.link}>
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Map + Timeline - Con z-index bajo para no cubrir el chatbot */}
      <div className="relative p-6 z-0">
        <NasaMap date={selectedDate} />
        <Timeline dates={dates} onDateChange={(date) => setSelectedDate(date)} />
      </div>
    </div>
  );
}