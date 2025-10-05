import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function NasaMap({ date }) {
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  // Approximate center of California
  const center = [36.5, -119.5];
  const zoom = 7;

  // Blooming points (with links)
  const floraPoints = [
    {
      coords: [36.8, -119.3], // Kings River, Sierra Nevada foothills
      title: "Kings River (Sierra Nevada, Fresno County)",
      description:
        "Blooming in the Sierra Nevada foothills, near the Kings River.",
      image: "/images/KingsRiver.png",
      link: "https://worldview.earthdata.nasa.gov/?v=-119.41480623735602,36.67861214348279,-119.00668374934178,37.094877920577126&l=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,HLS_L30_Nadir_BRDF_Adjusted_Reflectance,HLS_S30_Nadir_BRDF_Adjusted_Reflectance,VIIRS_NOAA21_CorrectedReflectance_TrueColor(hidden),VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor&lg=false&t=2025-03-26-T12%3A35%3A19Z",
    },
    {
      coords: [34.7, -118.4], // Antelope Valley California Poppy Preserve
      title: "Antelope Valley California Poppy Preserve",
      description:
        "Fields of California poppies painting the valley orange in spring.",
      image: "/images/AntelopeValley.png",
      link: "https://worldview.earthdata.nasa.gov/?v=-118.55980519858271,34.51356778218575,-118.1536387949203,34.92783844507617&l=Reference_Labels_15m,Reference_Features_15m(hidden),Coastlines_15m,HLS_S30_Nadir_BRDF_Adjusted_Reflectance(hidden),HLS_L30_Nadir_BRDF_Adjusted_Reflectance,VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden)&lg=true&l1=Reference_Labels_15m,Reference_Features_15m(hidden),Coastlines_15m,HLS_S30_Nadir_BRDF_Adjusted_Reflectance,HLS_L30_Nadir_BRDF_Adjusted_Reflectance,VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden)&lg1=true&ca=true&cv=53&t=2023-04-07-T02%3A00%3A00Z&t1=2020-04-18-T16%3A00%3A00Z",
    },
    {
      coords: [35.2, -119.8], // Carrizo Plain National Monument
      title: "Carrizo Plain National Monument",
      description:
        "One of the most spectacular places to observe superblooms.",
      image: "/images/CarrizoPlain.png",
      link: "https://worldview.earthdata.nasa.gov/?v=-120.00506117370473,34.89481786554561,-119.72316032456429,35.182343496887206&l=Reference_Labels_15m,Reference_Features_15m(hidden),Coastlines_15m,HLS_S30_Nadir_BRDF_Adjusted_Reflectance(hidden),HLS_L30_Nadir_BRDF_Adjusted_Reflectance,VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden)&lg=true&l1=Reference_Labels_15m,Reference_Features_15m(hidden),Coastlines_15m,HLS_S30_Nadir_BRDF_Adjusted_Reflectance,HLS_L30_Nadir_BRDF_Adjusted_Reflectance,VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden)&lg1=true&ca=true&cv=52&t=2023-04-06-T14%3A00%3A00Z&t1=2020-04-16-T12%3A00%3A00Z",
    },
  ];

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center,
        zoom,
      });

      // NASA GIBS base layer
      layerRef.current = L.tileLayer(
        `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${date}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg`,
        {
          attribution: "NASA GIBS",
          tileSize: 256,
          maxZoom: 9,
        }
      ).addTo(mapRef.current);

      // Rectangular markers with popups
      floraPoints.forEach((point) => {
        const rectangle = L.rectangle(
          [
            [point.coords[0] - 0.1, point.coords[1] - 0.1],
            [point.coords[0] + 0.1, point.coords[1] + 0.1],
          ],
          { color: "green", weight: 2, fillOpacity: 0.3 }
        ).addTo(mapRef.current);

        rectangle.bindPopup(
          `<div style="text-align:center; font-family: Arial, sans-serif; max-width:220px;">
            <h3 style="color:green; margin-bottom: 5px;">${point.title}</h3>
            <img src="${point.image}" alt="${point.title}" style="width:120px; border-radius:8px; display:block; margin: 0 auto 5px;" />
            <p style="margin:0 0 5px;">${point.description}</p>
            <a href="${point.link}" target="_blank" style="color:blue; text-decoration:underline; font-size:14px;">
              View NASA satellite image
            </a>
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

  return (
    <div
      id="map"
      className="w-full h-[80vh] rounded-xl shadow-lg mt-4"
    ></div>
  );
}
