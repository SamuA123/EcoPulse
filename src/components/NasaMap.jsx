import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function NasaMap({ date }) {
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  // Máximo zoom en Valle de California
  const center = [32.5, -115];
  const zoom = 10;

  // Puntos clave con información + imagen
  const floraPoints = [
    {
      coords: [32.6, -115.1],
      title: "Cactus Saguaro",
      description: "Typical desert flora, adapted to arid conditions.",
      image: "https://www.picturethisai.com/wiki-image/1080/152340565885714437.jpeg"
    },
    {
      coords: [32.4, -114.9],
      title: "Creosote Bush",
      description: "Found in desert scrub areas, blooms in spring.",
      image: "https://threetimbersshop.com/cdn/shop/files/Creosote_7abdb061-7775-49ab-ac14-ecf9e6a8c3e4.png?v=1707373669"
    },
    {
      coords: [32.5, -115.2],
      title: "Ocotillo",
      description: "Spiny shrub with bright red flowers, pollinated by hummingbirds.",
      image: "https://www.moonvalleynurseries.com/_next/image?url=https%3A%2F%2Fcdn.mvncorp.dev%2Fmedia%2Fproducts%2Fimages%2FMoon%20Valley%20Nurseries%20Flowering%20Ocotillo.jpg&w=3840&q=50"
    }
  ];

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center,
        zoom,
      });

      // Capa base NASA GIBS
      layerRef.current = L.tileLayer(
        `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${date}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg`,
        {
          attribution: "NASA GIBS",
          tileSize: 256,
          maxZoom: 9,
        }
      ).addTo(mapRef.current);

      // Marcadores cuadrados con popups + imágenes centradas
      floraPoints.forEach((point) => {
        const rectangle = L.rectangle(
          [
            [point.coords[0] - 0.02, point.coords[1] - 0.02],
            [point.coords[0] + 0.02, point.coords[1] + 0.02]
          ],
          { color: "green", weight: 2, fillOpacity: 0.3 }
        ).addTo(mapRef.current);

        rectangle.bindPopup(
          `<div style="text-align:center; font-family: Arial, sans-serif;">
            <h3 style="color:green; margin-bottom: 5px;">${point.title}</h3>
            <img src="${point.image}" alt="${point.title}" style="width:120px; border-radius:8px; display:block; margin: 0 auto 5px;" />
            <p style="margin:0;">${point.description}</p>
          </div>`
        );
      });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      if (layerRef.current) {
        mapRef.current.removeLayer(layerRef.current);
      }
      layerRef.current = L.tileLayer(
        `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${date}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg`,
        {
          attribution: "NASA GIBS",
          tileSize: 256,
          maxZoom: 9,
        }
      ).addTo(mapRef.current);
    }
  }, [date]);

  return <div id="map" className="w-full h-[80vh] rounded-xl shadow-lg mt-4"></div>;
}
