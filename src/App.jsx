import { useEffect, useState } from "react";
import NasaMap from "./components/NasaMap";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // pequeño delay para animación
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-green-900 text-white shadow-md">
        <h1 className="text-xl font-bold tracking-wide">TERRATALES</h1>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-green-300 transition">About</a>
          <a href="#problem" className="hover:text-green-300 transition">Problem</a>
          <a href="#map" className="hover:text-green-300 transition">Map</a>
          <a href="#impact" className="hover:text-green-300 transition">Impact</a>
        </div>
      </nav>

      {/* Banner */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            WELCOME TO TERRATALES! WHERE CLIMATE STORIES COME ALIVE.
          </h2>
          <p className="text-gray-200 mb-6">
            Witness the pulse of life across our planet! From season to season and
            year to year, Earth’s vegetation is constantly changing, providing
            critical information on plant species, crops, seasonal effects,
            pollen sources, and changes in plant phenology.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
            Launch Game
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
          title: "Vegetation & Climate",
          text: "Explore how vegetation cycles reflect the relationship between seasonal changes and climate. Discover how ecosystems adapt across different biomes."
        },{
          title: "Agriculture & Crops",
          text: "Understand how crop growth patterns shift with changing seasons. Learn how climate change influences agriculture and food security worldwide."
        },{
          title: "Phenology in Plants",
          text: "Dive into plant phenology: the science of how seasonal changes impact plant life cycles, from flowering to pollination, and its vital role in biodiversity."
        }].map((card, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-700 ease-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <h3 className="text-xl font-bold text-green-700 mb-4">{card.title}</h3>
            <p className="text-gray-700">{card.text}</p>
          </div>
        ))}
      </section>

       <h2 className="text-2xl font-bold text-center mt-12">
        Mapa Interactivo (NASA GIBS)
      </h2>
      <NasaMap />

    </div>
  );
}
