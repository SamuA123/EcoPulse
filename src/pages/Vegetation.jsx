export default function Vegetation() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center gap-10">
      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
        Vegetation & Climate
      </h1>

      {/* Imagen principal */}
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Vegetation"
        className="w-full max-w-5xl rounded-xl shadow-lg object-cover"
      />

      {/* Introducción */}
      <div className="max-w-4xl text-gray-700 text-center leading-relaxed">
        <p>
          Understanding the dynamic relationship between climate and vegetation is essential to interpret how Earth’s ecosystems respond to environmental change. Climate factors such as temperature, rainfall, and sunlight directly influence plant growth, flowering, and productivity. Through satellite observation and data analysis, researchers can explore these patterns on a global scale, uncovering how variations in climate drive the rhythm of life across landscapes.
        </p>
      </div>

       {/* Secciones numeradas */}
      <div className="max-w-4xl flex flex-col gap-6">

        {/* 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">1. Interconnection Between Climate and Vegetation</h2>

          {/* Imagen y texto */}
          <div className="flex flex-col items-center mb-4">
            <img src="/images/TableWeatherandVegetation.png" alt="Image 1" className="mb-2 rounded-lg max-w-full h-auto" />
            <p className="text-gray-600 text-center">MODIS Vegetation Index Products (NDVI and EVI) provide global measurements of canopy greenness every 16 days or monthly, at various spatial resolutions (250 m at 0.05°).
NASA Goddard Space Flight Center. (n.d.). MODIS Vegetation Index Products (NDVI and EVI). NASA Earth Science Data. https://modis.gsfc.nasa.gov/data/dataprod/mod13.php</p>
          </div>
<br />
          <p className="text-gray-700 leading-relaxed">
            Climate is one of the main regulators of plant growth and development. Factors such as temperature, solar radiation, and precipitation determine when and how plants bloom. Changes in these climatic conditions can advance or delay flowering cycles, affecting both agricultural productivity and natural ecosystems. Understanding this relationship helps identify the impacts of climate change on ecosystems and anticipate alterations in natural blooming calendars.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">2. Importance of Satellite Monitoring</h2>

          <div className="flex flex-col items-center mb-4">
            <img src="/images/MonitoringSatelital.png" alt="Image 2" className="w-48 h-48 object-cover rounded-lg mb-2" />
            <p className="text-gray-600 text-center">A comparison of Landsat, MODIS, and VIIRS snow mapping algorithms shows variations in snow cover accuracy under different vegetation conditions (Stillinger et al., 2023).
Stillinger, T., Rittger, K., Raleigh, M. S., Michell, A., Davis, R. E., & Bair, E. H. (2023). Landsat, MODIS, and VIIRS snow cover mapping algorithm performance as validated by airborne lidar datasets. [Figure of comparative snow cover maps]. The Cryosphere,. https://doi.org/10.5194/tc-17-567-2023</p>
          </div>
<br />
          <p className="text-gray-700 leading-relaxed">
            NASA’s Earth observation satellites, such as MODIS, VIIRS, and Landsat, provide continuous insight into the state of global vegetation. These sensors capture variations in surface color and reflectance, allowing the calculation of vegetation indices like NDVI and EVI. Through these measurements, it becomes possible to detect seasonal changes, anomalies, and long-term trends, revealing how vegetation responds to climatic conditions across different regions of the planet.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">3. Detection of Blooming Patterns</h2>

          <div className="flex flex-col items-center mb-4">
            <img src="/images/DetectionFlowers.png" alt="Image 3" className="w-48 h-48 object-cover rounded-lg mb-2" />
            <p className="text-gray-600 text-center">Average green-up onset time, image c) 2000s (2001–2009)
Zhang, X. Y. (2012). Long-term detection of global vegetation phenology using satellite instruments. In Phenology and Climate Change. IntechOpen. https://doi.org/10.5772/39197</p>
          </div>
<br />
          <p className="text-gray-700 leading-relaxed">
            By analyzing time series from satellite data, key stages of the vegetative cycle—such as the onset, peak, and end of flowering—can be identified. These events, known as phenological phases, reflect the interaction between climate and plant physiology. For instance, an early rise in temperature can trigger premature blooms, while prolonged drought may reduce their intensity. Detecting these large-scale patterns provides valuable information for environmental management and agricultural planning.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">4. Indicators of Climate Change</h2>

          <div className="flex flex-col items-center mb-4">
            <img src="/images/IndicationsOfClimateChange.png" alt="Image 4" className="w-48 h-48 object-cover rounded-lg mb-2" />
            <p className="text-gray-600 text-center">Vegetation time series plots and their annual variations.
Zhang, X. Y. (2012). Long-term detection of global vegetation phenology using satellite instruments. In Phenology and Climate Change. IntechOpen. https://doi.org/10.5772/39197</p>
          </div>
<br />
          <p className="text-gray-700 leading-relaxed">
            Shifts in flowering patterns serve as bioindicators of climate change. Global studies show that many species are blooming earlier than usual due to rising average temperatures. This temporal shift alters the relationships between plants, pollinators, and entire ecosystems. Monitoring these variations through satellite data helps identify vulnerable regions and understand the cumulative effects of global warming on vegetation productivity and biodiversity.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">5. Ecological and Social Applications</h2>

          <div className="flex flex-col items-center mb-4">
            <img src="/images/AplicationsEcologicalsandSocials.png" alt="Image 5" className="w-48 h-48 object-cover rounded-lg mb-2" />
            <p className="text-gray-600 text-center">They show the use of NDVI (vegetation index) series to determine the best planting and harvesting times.
Gao, F., Anderson, M. C., Zhang, X., Yang, Z., Alfieri, J. G., Kustas, W. P., ... & Johnson, D. M. (2021). Mapping crop phenology in near real-time using satellite remote sensing. Science Partner Journal: Remote Sensing, 3, 8379391. https://doi.org/10.34133/2021/8379391</p>
          </div>
<br />
          <p className="text-gray-700 leading-relaxed">
            Analyzing the dynamics between climate and vegetation has wide-ranging applications. In agriculture, it helps forecast optimal planting and harvesting periods; in conservation, it supports the detection of areas at risk due to water stress or biodiversity loss. Moreover, information on anomalous blooming events contributes to better natural resource management and more precise environmental policies. Together, these insights enhance humanity’s capacity to adapt to a changing climate, using space-based observation as a key tool for planetary sustainability.
          </p>
        </div>
</div>
    </div>
  );
}
