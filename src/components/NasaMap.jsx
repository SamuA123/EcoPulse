import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function NasaMap() {
  useEffect(() => {
    // Crear mapa
    const map = L.map("map", {
      center: [0, 0], // centro inicial (Ecuador, para que cargue bien en global)
      zoom: 2,
      minZoom: 1,
      maxZoom: 9, // MODIS solo llega hasta 9
    });

    // Capa base de GIBS (MODIS Terra TrueColor)
    L.tileLayer(
      "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2025-03-26/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg",
      {
        tileSize: 256,
        zoomOffset: 0,
        attribution: "NASA GIBS - MODIS Terra",
      }
    ).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      className="w-full h-[700px] mt-12 rounded-lg shadow-lg border"
    ></div>
  );
}
